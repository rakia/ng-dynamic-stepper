import {
  AfterViewInit, ChangeDetectorRef,
  Component, ContentChild, EventEmitter, Input, OnChanges,
  OnDestroy, OnInit, Output,
  SimpleChanges, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';

import { Step } from '../../models/step.model';

@Component({
  selector: 'dynamic-stepper',
  templateUrl: './dynamic-stepper.component.html',
  styleUrls: ['./dynamic-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicStepperComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input()  steps:               Step[];
  @Input()  currentStep:         number = 0;
  @Input()  showGoBack?:         boolean;
  @Output() goBack           = new EventEmitter<void>();
  @Output() gotoNextStep     = new EventEmitter<void>();
  @Output() gotoPreviousStep = new EventEmitter<void>();
  @Output() gotoStep         = new EventEmitter<number>();
  // @Output() confirmLastStep = new EventEmitter<void>();
  totalSteps: number;
  animationDirection: 'left' | 'right' | 'none' = 'none';
  _unsubscribeAll = new Subject<boolean>();

  @ContentChild('stepsHeaderContent', { read: TemplateRef }) stepsHeaderContent: TemplateRef<any>;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.totalSteps = this.steps ? this.steps.length : 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentStep && changes.currentStep.currentValue) {
      this._changeDetectorRef.detectChanges(); // Run change detection so the change in the animation direction registered
    }
  }

  ngAfterViewInit(): void {}

  onGotoStep(step): void {
    this.animationDirection = this.currentStep < step ? 'left' : 'right'; // Decide the animation direction
    // this._changeDetectorRef.detectChanges(); // Run change detection so the change in the animation direction registered
    // this.currentStep = step; // Set the current step
    this.gotoStep.emit(step);
  }

  onGotoNextStep(): void {
    /*if ( this.currentStep === this.totalSteps - 1 ) {
      return;
    }*/
    this.animationDirection = 'left'; // Set the animation direction
    this.gotoNextStep.emit();
    // this._changeDetectorRef.detectChanges(); // Run change detection so the change in the animation direction registered
    // this.currentStep++; // Increase the current step
  }

  onGotoPreviousStep(): void {
    if ( this.currentStep === 0 ) {
      return;
    }
    this.animationDirection = 'right'; // Set the animation direction
    this.gotoPreviousStep.emit();
    // this._changeDetectorRef.detectChanges(); // Run change detection so the change in the animation direction registered
    // this.currentStep--; // Decrease the current step
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
