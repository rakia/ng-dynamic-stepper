import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatTableDataSource      } from '@angular/material/table';
import { Validators, FormControl } from '@angular/forms';
import { MatSort                 } from '@angular/material/sort';
import { Subject                 } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { OptionSearchConfig } from '../../models/option-search-config.model';

/**
 * Author: Rakia Ben Sassi
 */
@Component({
  selector: 'option-search-overlay',
  templateUrl: './option-search-overlay.component.html',
  styleUrls: ['./option-search-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionSearchOverlayComponent<T> implements OnInit, OnChanges, OnDestroy {

  @Input()  optionSearchConfig: OptionSearchConfig<T>;
  @Input()  searchQuery:        string;
  @Input()  searchLabel:        string;
  @Input()  valueField:         string | number;
  @Input()  disable?            = false;

  @Input()  valueFormControl:   FormControl;
  @Input()  optionsList:        T[];
  @Input()  overlayHasFocus:    boolean = true;
  @Input()  required?:          boolean;
  @Input()  errorMessage?:      string;
  @Output() optionSelected      = new EventEmitter<T>();
  currentOption: any;

  @ViewChild('sort', {static: true}) sort: MatSort;

  _unsubscribeAll: Subject<boolean> = new Subject<boolean>();
  dataSource         = new MatTableDataSource<T>([]);
  highlightRowIndex: number  = -1;
  isOverlayOpen:     boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    if (!this.currentOption) {
      this.initCurrentOption();
    }
    if (this.required) {
      this.valueFormControl.setValidators([Validators.required]);
      this.valueFormControl.updateValueAndValidity();
    }
    this.onSearchQueryChanged();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.optionsList && changes.optionsList.currentValue) {
      this.dataSource = new MatTableDataSource<T>(this.optionsList);
      this.dataSource.filteredData = this.optionsList;
      this.highlightRowIndex = -1;
    }
    if (changes.optionSearchConfig && changes.optionSearchConfig.currentValue) {
      if (this.optionSearchConfig.displayColumnDefs && !this.optionSearchConfig.displayedColumns) {
        this.optionSearchConfig.displayedColumns = this.optionSearchConfig.displayColumnDefs.map(col => col.key);
      }
    }
  }

  onSearchQueryChanged(): void {
    this.valueFormControl.valueChanges
      .pipe(
          takeUntil(this._unsubscribeAll),
          debounceTime(150), // debounce searchQueries & dismiss consecutive duplicates
          distinctUntilChanged())
      .subscribe(searchQuery => this.applyFilter(searchQuery) );
  }

  applyFilter(filterQuery: string): void {
    this.dataSource.filter = filterQuery.toLowerCase();
  }

  initCurrentOption(): void {
    this.currentOption = {};
    this.currentOption[this.valueField] = this.valueFormControl.value;
  }

  updateForm(currentOption: T): void {
    this.valueFormControl.setValue( currentOption[this.valueField] );
  }

  checkValue(): void {
    console.log('--Overlay focusout --> checkValue()');

    /*if (this.isOverlayOpen) {
        this.closeOverlay();
    }*/
    if (!this.isOverlayOpen) {
      if (!this.currentOption) {
        // console.log('--Overlay focusout --> no option selected');
        this.searchQuery = '';
        this.valueFormControl.setValue('');
      } else {
        if (this.valueFormControl.value !== this.currentOption[this.valueField]) {

          this.valueFormControl.setValue( this.currentOption[this.valueField] );
        }
      }
    }
  }

  /**
   * Navigate between options in overlay and highlight the one that has keydown.arrowdown
   * @param event
   */
  @HostListener('keydown.arrowdown', ['$event'])
  onArrowDown(event: KeyboardEvent): void {

    if (this.overlayHasFocus && this.highlightRowIndex < (this.dataSource.filteredData.length - 1)) { // data
     this.highlightRowIndex += 1;
     // console.log('--Overlay has Focus --> increase highlightRowIndex ' + this.highlightRowIndex);
    }
  }

  /**
   * Navigate between options in overlay and highlight the one that has keydown.arrowup
   * @param event
   */
  @HostListener('keydown.arrowup', ['$event'])
  onArrowUp(event: KeyboardEvent): void {

    if (this.overlayHasFocus && this.highlightRowIndex > 0) {
      this.highlightRowIndex -= 1;
      // console.log('--highlightRowIndex = ' + this.highlightRowIndex);
    }
  }

  /**
   * Close searchList and select option that is currently highlighted
   * @param event
   */
  @HostListener('keydown.enter', ['$event'])
  onKeyEnter(event: KeyboardEvent): void {

    if (this.isOverlayOpen) {
      if (this.overlayHasFocus && this.highlightRowIndex >= 0 && this.highlightRowIndex < this.dataSource.filteredData.length) { // data
        this.selectRow(this.dataSource.filteredData[this.highlightRowIndex]); // data
      }
    } else {
      this.openOverlay();
    }
  }

  /**
   * open searchList when user is typing
   * @param event
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {

    const searchQueryHasAtLeast2Characters: boolean = this.valueFormControl.value && this.valueFormControl.value.toString().length >= 1;

    if (event.key !== 'Enter' && event.key !== 'Tab' && !this.isOverlayOpen && searchQueryHasAtLeast2Characters) {
      this.openOverlay();
    }
  }

  /**
   * Close searchList without selecting any option
   * @param event
   */
  @HostListener('keydown.esc', ['$event'])
  onKeyEsc(event: KeyboardEvent): void {
    this.checkValue();
    this.closeOverlay();
  }

  selectRow(row: T, closeOverlay: boolean = true): void {

    if (closeOverlay) {
      this.closeOverlay();
    }
    this.currentOption = row;
    this.updateForm(row);
    console.log('Overlay, selectRow(), currentOption: ' + JSON.stringify(row));
    this.optionSelected.emit(row);
  }

  openOverlay(): void {
    this.isOverlayOpen     = true;
    this.highlightRowIndex = -1;
    // console.log('--highlightRowIndex = ' + this.highlightRowIndex);
  }

  closeOverlay(): void {
    this.isOverlayOpen     = false;
    this.highlightRowIndex = -1;
    // console.log('--highlightRowIndex = ' + this.highlightRowIndex);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
