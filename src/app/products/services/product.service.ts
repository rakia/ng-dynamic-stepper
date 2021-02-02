import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { PRODUCTS } from '../../fake-db/products';
import { Product  } from '../models/product.model';

@Injectable()
export class ProductService implements Resolve<any> {

  routeParams: any;
  product: any;
  onProductChanged: BehaviorSubject<any>;

  constructor() {
    this.onProductChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([ this.getProduct() ]).then(() => {
          resolve();
        },
        reject
      );
    });
  }

  getProduct(): Promise<Product> {
    return new Promise((resolve, reject) => PRODUCTS.filter(product => product.id === this.routeParams.id));
  }

  saveProduct(product): Promise<any> {
    return new Promise((resolve, reject) => {});
  }

  addProduct(product): Promise<any> {
    return new Promise((resolve, reject) => {});
  }
}
