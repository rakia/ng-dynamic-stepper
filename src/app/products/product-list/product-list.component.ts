import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';

@Component({
  selector     : 'product-list',
  templateUrl  : './product-list.component.html',
  styleUrls    : ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  dataSource: FilesDataSource | null;
  displayedColumns = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter', {static: true}) filter: ElementRef;

  private _unsubscribeAll: Subject<any>;

  constructor(private productsService: ProductsService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new FilesDataSource(this.productsService, this.paginator, this.sort);

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(() => {
        if ( !this.dataSource ) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class FilesDataSource extends DataSource<any> {

  private filterChange = new BehaviorSubject('');
  private filteredDataChange = new BehaviorSubject('');

  /**
   * Constructor
   * @param {EcommerceProductsService} productsService
   * @param {MatPaginator} matPaginator
   * @param {MatSort} matSort
   */
  constructor(private productsService: ProductsService,
              private matPaginator: MatPaginator,
              private matSort: MatSort) {
    super();
    this.filteredData = this.productsService.products;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.productsService.onProductsChanged,
      this.matPaginator.page,
      this.filterChange,
      this.matSort.sortChange
    ];

    return merge(...displayDataChanges).pipe(
      map(() => {
          let data = this.productsService.products.slice();

          data = this.filterData(data);

          this.filteredData = [...data];

          data = this.sortData(data);

          // Grab the page's slice of data.
          const startIndex = this.matPaginator.pageIndex * this.matPaginator.pageSize;
          return data.splice(startIndex, this.matPaginator.pageSize);
        }
      ));
  }

  // ----------------------------------- Accessors

  // Filtered data
  get filteredData(): any {
    return this.filteredDataChange.value;
  }

  set filteredData(value: any) {
    this.filteredDataChange.next(value);
  }

  get filter(): string {
    return this.filterChange.value;
  }

  set filter(filter: string) {
    this.filterChange.next(filter);
  }

  /**
   * Filter data
   *
   * @param data
   * @returns {any}
   */
  filterData(data): any {
    if (!this.filter) {
      return data;
    }
    return this.filterArrayByString(data, this.filter);
  }

  /**
   * Sort data
   * @param data
   * @returns {any[]}
   */
  sortData(data): any[] {
    if ( !this.matSort.active || this.matSort.direction === '' ) {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch ( this.matSort.active ) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'categories':
          [propertyA, propertyB] = [a.categories[0], b.categories[0]];
          break;
        case 'price':
          [propertyA, propertyB] = [a.priceTaxIncl, b.priceTaxIncl];
          break;
        case 'quantity':
          [propertyA, propertyB] = [a.quantity, b.quantity];
          break;
        case 'active':
          [propertyA, propertyB] = [a.active, b.active];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this.matSort.direction === 'asc' ? 1 : -1);
    });
  }

  disconnect(): void {}

  /**
   * Filter array by string
   * @param mainArr
   * @param searchText
   * @returns {any}
   */
  filterArrayByString(mainArr, searchText): any {
    if (searchText === '') {
      return mainArr;
    }
    searchText = searchText.toLowerCase();

    /*return mainArr.filter(itemObj => {
      return this.searchInObj(itemObj, searchText);
    });*/
    return mainArr;
  }
}
