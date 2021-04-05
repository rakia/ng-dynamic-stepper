import { ColumnDefinition } from './column-definition.model';

export interface OptionSearchConfig<T> {
    displayedColumns?:  string[];
    displayColumnDefs?: ColumnDefinition[];
    close?:             boolean;
}
