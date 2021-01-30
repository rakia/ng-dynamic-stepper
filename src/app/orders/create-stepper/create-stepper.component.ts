import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { Step       } from '../../../../projects/dynamic-stepper/src/lib';
import { Order      } from '../models/order.model';
import { OrderType } from '../models/order-type.model';

@Component({
    selector: 'order',
    templateUrl: './create-stepper.component.html',
    styleUrls: ['./create-stepper.component.scss']
})
export class CreateStepperComponent implements OnInit, OnChanges, OnDestroy {

  @Input()  entity:       Order;
  @Input()  entityTypes:  OrderType[];
  @Input()  currencyRate: number;
  @Output() getCurrencyRate = new EventEmitter<string>();
  @Output() createEntity    = new EventEmitter<Order>();
  @Output() gotoInquiry     = new EventEmitter<Order>();

  steps: Step[] = [
    {title: 'entityStates.draft',    content: ''},
    {title: 'entityStates.saved',    content: ''},
    {title: 'entityStates.complete', content: ''},
  ];
  totalSteps: number;
  currentStep: number = 0;

  formStep1 = this.formBuilder.group({
    entityType: [null, Validators.required],
    Tarih:      [new Date(), Validators.required],
    Belgeno:    [''],
    Sube:       [null, Validators.required],
    Fambar:     [null],
    Sambar:     [null],
    Dovcins:    ['', Validators.required],
    Dovkuru:    [''], // required if Dovcins has value
  });
  _unsubscribeAll = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.totalSteps = this.steps.length;
    this.entity     = {} as Order;
  }

  ngOnChanges(changes: SimpleChanges): void {}

  create(): void {
    if (this.formStep1.invalid) {
      return;
    }
    this.patchEntity(this.formStep1.getRawValue());
    this.createEntity.emit(this.entity);
  }

  patchEntity(patchData): void {
    Object.keys(patchData).forEach(key => {
      this.entity[key] = patchData[key];
    });
  }

  goBack(): void {
    this.gotoInquiry.emit(this.entity);
  }

  gotoNextStep(): void {
    if (this.currentStep === 0) {
      this.create();
    }
  }

  gotoPreviousStep(): void {
    this.currentStep--; // Decrease the current step
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
