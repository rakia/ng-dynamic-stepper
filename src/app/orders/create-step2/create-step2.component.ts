import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { OrderType } from '../models/order-type.model';
import { Order     } from '../models/order.model';

@Component({
    selector: 'create-step2',
    templateUrl: './create-step2.component.html',
    styleUrls: ['./create-step2.component.scss']
})
export class CreateStep2Component implements OnInit, OnChanges, OnDestroy {

  @Input()  form:        FormGroup;
  @Input()  entity:      Order;
  @Input()  entityTypes: OrderType[];

  _unsubscribeAll = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
