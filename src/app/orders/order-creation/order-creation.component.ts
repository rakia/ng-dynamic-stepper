import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router    } from '@angular/router';
import { Subject   } from 'rxjs';

import { Order     } from '../models/order.model';
import { OrderType } from '../models/order-type.model';
import { Step      } from '../../../../projects/dynamic-stepper/src/lib';

@Component({
  selector: 'order',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.scss']
})
export class OrderCreationComponent implements OnInit, OnChanges, OnDestroy {

  @Input()  order:      Order;
  @Input()  orderTypes: OrderType[] = [
    { value: 1, label: 'Market' },
    { value: 2, label: 'Limit'  },
    { value: 3, label: 'Stop'   }
  ];
  @Output() createEntity = new EventEmitter<Order>();

  _unsubscribeAll = new Subject<boolean>();

  steps: Step[] = [
    { title: 'Order Type',    content: '' },
    { title: 'Order Details', content: '' }
  ];
  totalSteps:  number;
  currentStep: number = 0;

  form = this.formBuilder.group({
    orderType:   [null,       Validators.required],
    product:     ['',         Validators.required],
    date:        [new Date(), Validators.required],
    currency:    ['',         Validators.required],
    orderNo:     [''],
    description: ['']
  });
  /*id:         number;
  reference:    string;
  subtotal:     number;
  tax:          number;
  discount:     number;
  total:        number;
  date:         Date;
  customer:     Customer;
  checked?:     boolean;
  description?: string;
  product?:     Product;
  products:     Product[];
  status:       Status[];
  payment:      Payment;
  shippingDetails: ShippingDetail[];*/

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.totalSteps = this.steps.length;
    this.order     = {} as Order;
  }

  ngOnChanges(changes: SimpleChanges): void {}

  create(): void {
    if (this.form.invalid) {
      return;
    }
    this.patchEntity(this.form.getRawValue());
    this.createEntity.emit(this.order);
  }

  patchEntity(patchData): void {
    Object.keys(patchData).forEach(key => {
      this.order[key] = patchData[key];
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
