import { FieldDefinition } from './field-definition.model';

export class ColumnDefinition extends FieldDefinition {
    index?:         number;  // if the list of columns will be displayed in material edit-grid (angular material grid), index must be given
    format?:        any; // it could be: { style: 'currency', currency: 'EUR' }, { date: 'short' }
    hasFooter?:     boolean;
    hideInOverlay?: boolean;

    // optionsAttribut is used in stock-receipt maintenance: StockReceiptItem.Unit has options for StockReceiptItem.Birimi
    optionsAttribut?: string; // name of the attribut that has the options list for dropdown
}
