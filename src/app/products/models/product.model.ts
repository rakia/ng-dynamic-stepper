import { MatChipInputEvent } from '@angular/material/chips';

export class Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  categories: string[];
  priceTaxExcl: number;
  priceTaxIncl: number;
  taxRate: number;
  comparedPrice: number;
  quantity: number;
  sku: string;
  width: string;
  height: string;
  depth: string;
  weight: string;
  extraShippingFee: number;
  active: boolean;

  /**
   * Constructor
   * @param product
   */
  constructor(product?) {
    product = product || {};
    this.id = product.id;
    this.name = product.name || '';
    this.handle = product.handle;
    this.description = product.description || '';
    this.categories = product.categories || [];
    this.priceTaxExcl = product.priceTaxExcl || 0;
    this.priceTaxIncl = product.priceTaxIncl || 0;
    this.taxRate = product.taxRate || 0;
    this.comparedPrice = product.comparedPrice || 0;
    this.quantity = product.quantity || 0;
    this.sku = product.sku || 0;
    this.width = product.width || 0;
    this.height = product.height || 0;
    this.depth = product.depth || 0;
    this.weight = product.weight || 0;
    this.extraShippingFee = product.extraShippingFee || 0;
    this.active = product.active || true;
  }
}
