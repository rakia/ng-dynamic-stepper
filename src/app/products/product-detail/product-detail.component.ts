import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

import { PRODUCTS       } from '../../fake-db/products';
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

  productForm: FormGroup;
  product:     Product;
  steps:       Step[] = [
    { title: 'Basic Info', content: '' },
    { title: 'Pricing',    content: '' },
    { title: 'Inventory',  content: '' },
    { title: 'Shipping',   content: '' }
  ];
  totalSteps: number;
  currentStep: number = 0;
  private _unsubscribeAll = new Subject<boolean>();

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const filtered  = PRODUCTS.filter(product => product.id === productId);
    if (filtered && filtered.length) {
      this.product = filtered[0];
    } else {
      this.product = new Product();
    }
    this.productForm = this.createProductForm();
    this.totalSteps = this.steps.length;
  }

  createProductForm(): FormGroup  {
    return this.formBuilder.group({
      id              : [this.product.id],
      name            : [this.product.name],
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

    this.productService.saveProduct(data).then(() => {
      this.productService.onProductChanged.next(data); // Trigger the subscription with new data
      this.matSnackBar.open('Product saved', 'OK', {verticalPosition: 'top', duration: 2000});
    });
  }

  goBack(): void {
    // Change the location with new one
    this.router.navigate(['products']);
  }

  onGotoStep(step): void {
    this.currentStep = step;
  }

  gotoNextStep(): void {
    this.currentStep++; // Increase the current step
  }

  gotoPreviousStep(): void {
    this.currentStep--; // Decrease the current step
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.unsubscribe();
  }
}
