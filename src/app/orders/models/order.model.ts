import { Product } from '../../products/models/product.model';

export interface Order {
  id:           number;
  reference:    string;
  subtotal:     number;
  tax:          number;
  discount:     number;
  total:        number;
  date:         Date;
  customer:     Customer;
  checked?:     boolean;
  description?: string;
  product?:     Product;
  products:     Product[];
  status:       Status[];
  payment:      Payment;
  shippingDetails: ShippingDetail[];
}

export interface Status {
  id:    number;
  name:  string;
  color: string;
  date:  Date;
}

export interface Payment {
  transactionId: string;
  amount:        number;
  method:        string;
  date:          Date;
}

export interface Customer {
  id:        number;
  firstName: string;
  lastName:  string;
  company:   string;
  jobTitle:  string;
  email:     string;
  phone:     string;
  invoiceAddress:  string;
  shippingAddress: string;
}

export interface ShippingDetail {
  tracking: string;
  carrier:  string;
  weight:   number;
  fee:      number;
  date:     Date;
}
