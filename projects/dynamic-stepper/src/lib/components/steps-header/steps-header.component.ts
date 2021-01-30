import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Step } from '../../models/step.model';

@Component({
  selector: 'steps-header',
  templateUrl: './steps-header.component.html',
  styleUrls: ['./steps-header.component.scss']
})
export class StepsHeaderComponent implements OnInit {

  @Input()  steps:       Step[];
  @Input()  currentStep: number = 0;
  @Input()  showGoBack?: boolean;
  @Output() gotoStep     = new EventEmitter<number>();
  @Output() goBack       = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onGotoStep(step): void {
    this.gotoStep.emit(step);
  }

}
