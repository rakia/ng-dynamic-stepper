import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Product        } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Step           } from '../../../../projects/dynamic-stepper/src/lib';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product:     Product;
  pageType:    string;
  productForm: FormGroup;
  steps:       Step[] = [
    { title: 'Basic Info', content: '' },
    { title: 'Pricing',    content: '' },
    { title: 'Inventory',  content: '' },
    { title: 'Shipping',   content: '' }
  ];
  totalSteps: number;
  currentStep: number = 0;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * @param {ProductService} productService
   * @param {FormBuilder} formBuilder
   * @param {Location} location
   * @param {MatSnackBar} matSnackBar
   */
  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private location: Location,
              private matSnackBar: MatSnackBar) {

    this.product = new Product();
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.totalSteps = this.steps.length;
    // Subscribe to update product on changes
    this.productService.onProductChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(product => {

      if ( product ) {
        this.product = new Product(product);
        this.pageType = 'edit';
      } else {
        this.pageType = 'new';
        this.product = new Product();
      }

      this.productForm = this.createProductForm();
    });
  }

  createProductForm(): FormGroup  {
    return this.formBuilder.group({
      id              : [this.product.id],
      name            : [this.product.name],
      handle          : [this.product.handle],
      description     : [this.product.description],
      categories      : [this.product.categories],
      priceTaxExcl    : [this.product.priceTaxExcl],
      priceTaxIncl    : [this.product.priceTaxIncl],
      taxRate         : [this.product.taxRate],
      comparedPrice   : [this.product.comparedPrice],
      quantity        : [this.product.quantity],
      sku             : [this.product.sku],
      width           : [this.product.width],
      height          : [this.product.height],
      depth           : [this.product.depth],
      weight          : [this.product.weight],
      extraShippingFee: [this.product.extraShippingFee],
      active          : [this.product.active]
    });
  }

  saveProduct(): void {
    const data = this.productForm.getRawValue();
    data.handle = data.name;

    this.productService.saveProduct(data).then(() => {

      // Trigger the subscription with new data
      this.productService.onProductChanged.next(data);

      // Show the success message
      this.matSnackBar.open('Product saved', 'OK', {
        verticalPosition: 'top',
        duration        : 2000
      });
    });
  }

  addProduct(): void {
    const data = this.productForm.getRawValue();
    data.handle = data.name;

    this.productService.addProduct(data).then(() => {

      // Trigger the subscription with new data
      this.productService.onProductChanged.next(data);

      // Show the success message
      this.matSnackBar.open('Product added', 'OK', {
        verticalPosition: 'top',
        duration        : 2000
      });

      // Change the location with new one
      this.location.go('products/' + this.product.id + '/' + this.product.handle);
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
