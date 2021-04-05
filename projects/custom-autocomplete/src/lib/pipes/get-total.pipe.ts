import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTotal'
})
export class GetTotalPipe implements PipeTransform {

  transform(colName: string, dataSource: any[]): any {

    return this.getTotal(colName, dataSource) || '';
  }

  /**
   * Calculate and return the total (sum) of all the column --> the column must be number
   */
  getTotal(colName: string, dataSource: any[]): number {
    const total = dataSource.map(row => row[colName]).reduce((acc, value) => value ? acc + Number(value) : acc, 0);
    return total?.toFixed(2);
  }

}
