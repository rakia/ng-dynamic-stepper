import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { PRODUCTS } from '../../fake-db/products';

@Injectable()
export class ProductsService implements Resolve<any> {

  products: any[];
  onProductsChanged: BehaviorSubject<any>;

  constructor() {
    this.onProductsChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([ this.getProducts() ]).then(() => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get products
   * @returns {Promise<any>}
   */
  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => PRODUCTS);
  }
}
