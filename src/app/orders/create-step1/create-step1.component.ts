import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PRODUCTS  } from '../../fake-db/products';
import { Product   } from '../../products/models/product.model';
import { OrderType } from '../models/order-type.model';
import { ColumnDefinition, OptionSearchConfig } from '../../../../projects/custom-autocomplete/src/lib';

@Component({
    selector: 'create-step1',
    templateUrl: './create-step1.component.html',
    styleUrls: ['./create-step1.component.scss']
})
export class CreateStep1Component implements OnInit {

  @Input() form: FormGroup;
  @Input() orderTypes: OrderType[];

  products: Product[] = PRODUCTS;
  optionSearchConfig: OptionSearchConfig<Product>;
  readonly displayColumnDefs: ColumnDefinition[] = [
    { key: 'id',          label: 'ID'          },
    { key: 'name',        label: 'Name'        },
    { key: 'description', label: 'Description' },
    { key: 'price',       label: 'Price'       },
    { key: 'width',       label: 'Width'       },
    { key: 'height',      label: 'Height'      }
  ];

  constructor() {}

  ngOnInit(): void {
    this.optionSearchConfig = {
      displayColumnDefs: this.displayColumnDefs,
      displayedColumns:  this.displayColumnDefs.map(col => col.key)
    };
  }

  onOptionSelectedFromOverlay(event: Product): void {
    // this.currentOption = event;
    // this.optionSelected.emit(event);
  }

}
