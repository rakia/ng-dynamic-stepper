import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { OrderType } from '../models/order-type.model';

@Component({
    selector: 'create-step1',
    templateUrl: './create-step1.component.html',
    styleUrls: ['./create-step1.component.scss']
})
export class CreateStep1Component implements OnInit {

  @Input() formStep1: FormGroup;
  @Input() entityTypes: OrderType[];

  constructor() {}

  ngOnInit(): void {}
}
