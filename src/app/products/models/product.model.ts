export class Product {
  id:            number;
  name:          string;
  description?:   string;
  categories?:    string[];
  priceTaxExcl?:  number;
  priceTaxIncl?:  number;
  taxRate?:       number;
  comparedPrice?: number;
  quantity:      number;
  price?:         number;
  total?:         number;
  sku?:           string;
  width?:         string;
  height?:        string;
  depth?:         string;
  weight?:        string;
  active?:        boolean;
  extraShippingFee?: number;

  constructor(product?) {
    product = product || {};
    this.id            = product.id;
    this.name          = product.name || '';
    this.description   = product.description || '';
    this.categories    = product.categories || [];
    this.priceTaxExcl  = product.priceTaxExcl || 0;
    this.priceTaxIncl  = product.priceTaxIncl || 0;
    this.taxRate       = product.taxRate || 0;
    this.comparedPrice = product.comparedPrice || 0;
    this.quantity      = product.quantity || 0;
    this.price         = product.price || 0;
    this.total         = product.total || 0;
    this.sku           = product.sku || 0;
    this.width         = product.width || 0;
    this.height        = product.height || 0;
    this.depth         = product.depth || 0;
    this.weight        = product.weight || 0;
    this.active        = product.active || true;
    this.extraShippingFee = product.extraShippingFee || 0;
  }
}
