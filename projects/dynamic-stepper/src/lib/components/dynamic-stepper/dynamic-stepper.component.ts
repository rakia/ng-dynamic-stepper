import {
  AfterViewInit, ChangeDetectorRef,
  Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges,
  OnDestroy, OnInit, Output,
  SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, takeUntil, withLatestFrom } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Step } from '../../models/step.model';
import { HandGestureService } from '../../ml/hand-gesture.service';

@Component({
  selector: 'lib-dynamic-stepper',
  templateUrl: './dynamic-stepper.component.html',
  styleUrls: ['./dynamic-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicStepperComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input()  steps:       Step[];
  @Input()  currentStep: number = 0;
  @Input()  showGoBack?: boolean;
  @Output() goBack           = new EventEmitter<void>();
  @Output() gotoNextStep     = new EventEmitter<void>();
  @Output() gotoPreviousStep = new EventEmitter<void>();
  @Output() gotoStep         = new EventEmitter<number>();
  @Output() confirmLastStep  = new EventEmitter<void>();
  totalSteps: number;
  _unsubscribeAll = new Subject<boolean>();

  @ContentChild('stepsHeader',  { read: TemplateRef }) stepsHeader:  TemplateRef<any>;
  @ContentChild('stepsContent', { read: TemplateRef }) stepsContent: TemplateRef<any>;

  // ---- to save hand gesture state
  @ViewChild('video')  video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  // @ContentChild('goNext')     goNext: ElementRef<HTMLAnchorElement>;
  // @ContentChild('goPrevious') goPrevious: ElementRef<HTMLAnchorElement>;
  opened$ = this.handGestureService.swipe$.pipe(
    filter(value => value === 'left' || value === 'right'),
    map(value => value === 'right')
  );
  selection$ = this.handGestureService.gesture$.pipe(
    takeUntil(this._unsubscribeAll),
    filter(value => value === 'one' || value === 'two'), //  || value === 'ok'
    map(value => (value === 'one' ? 0 : 1)) // : (value === 'two') ? 1 : 2
  );

  /**
   * @param handGestureService
   * @param router
   * @param _changeDetectorRef
   */
  constructor(private handGestureService: HandGestureService, private router: Router, private _changeDetectorRef: ChangeDetectorRef) {
    this.handGestureService.gesture$.pipe(
      takeUntil(this._unsubscribeAll),
      filter(value => value === 'ok'),
      withLatestFrom(this.selection$)
    )
      .subscribe(([_, stepNumber]) => this.onGotoStep(stepNumber)); // this.router.navigateByUrl(page)
  }

  get stream(): MediaStream {
    return this.handGestureService.stream;
  }

  ngAfterViewInit(): void {
    console.log('---- handGestureService.initialize()');
    this.handGestureService.initialize(
      this.canvas.nativeElement,
      this.video.nativeElement
    );
  }

  onGotoStep(step): void {
    console.log('Go to step: ' + Number(step + 1));
    this.gotoStep.emit(step);
  }

  onGotoNextStep(): void {
    this.gotoNextStep.emit();
  }

  onGotoPreviousStep(): void {
    if ( this.currentStep === 0 ) {
      return;
    }
    this.gotoPreviousStep.emit();
  }

  ngOnInit(): void {
    this.totalSteps = this.steps ? this.steps.length : 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentStep && changes.currentStep.currentValue) {
      this._changeDetectorRef.detectChanges(); // Run change detection so the change in the animation direction registered
    }
  }

  ngOnDestroy(): void {
    // this.handGestureService.stream.removeEventListener()
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
