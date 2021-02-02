import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductsService } from '../services/products.service';
import { Product  } from '../models/product.model';
import { PRODUCTS } from '../../fake-db/products';

@Component({
  selector     : 'product-list',
  templateUrl  : './product-list.component.html',
  styleUrls    : ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  dataSource: FilesDataSource | null;
  displayedColumns = ['id', 'name', 'category', 'price', 'quantity', 'active'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private _unsubscribeAll: Subject<any>;

  constructor(private productsService: ProductsService, private router: Router) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataSource = new FilesDataSource(this.productsService, this.paginator, this.sort);
  }

  goToProductDetail(productId: string, productHandle: string): void {
    // Change the location with new one
    this.router.navigate(['products/' + productId]); //  + '/' + productHandle
  }
}

export class FilesDataSource extends DataSource<Product> {

  data: Product[] = [];

  /**
   * Constructor
   * @param {ProductsService} productsService
   * @param {MatPaginator} matPaginator
   * @param {MatSort} matSort
   */
  constructor(private productsService: ProductsService,
              private matPaginator: MatPaginator,
              private matSort: MatSort) {
    super();
    this.data = PRODUCTS; // this.productsService.products;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<any[]>}
   */
  connect(): Observable<Product[]> {
    const displayDataChanges = [
      this.productsService.onProductsChanged,
      this.matPaginator.page,
      // this.filterChange,
      this.matSort.sortChange
    ];

    return merge(...displayDataChanges).pipe(
      map(() => {
          let data = PRODUCTS.slice(); // this.productsService.products.slice()
          // data = this.filterData(data);
          this.data = [...data];
          data = this.sortData(data);

          // Grab the page's slice of data.
          const startIndex = this.matPaginator.pageIndex * this.matPaginator.pageSize;
          return data.splice(startIndex, this.matPaginator.pageSize);
        }
      ));
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
}
