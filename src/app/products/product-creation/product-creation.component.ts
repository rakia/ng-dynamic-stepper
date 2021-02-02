import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Step      } from '../../../../projects/dynamic-stepper/src/lib';
import { Order     } from '../models/order.model';
import { OrderType } from '../models/order-type.model';

@Component({
    selector: 'order',
    templateUrl: './product-creation.component.html',
    styleUrls: ['./product-creation.component.scss']
})
export class ProductCreationComponent implements OnInit, OnChanges, OnDestroy {

  @Input()  entity:      Order;
  @Input()  entityTypes: OrderType[];
  @Output() createEntity = new EventEmitter<Order>();

  steps: Step[] = [
    { title: 'Order Type',    content: '' },
    { title: 'Order Details', content: '' }
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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

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
    // Change the location with new one
    this.router.navigate(['products']);
  }

  onGotoStep(step): void {
    this.currentStep = step;
  }

  gotoNextStep(): void {
    this.currentStep++; // Increase the current step
  }

  gotoPreviousStep(): void {
    this.currentStep--; // Decrease the current step
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
