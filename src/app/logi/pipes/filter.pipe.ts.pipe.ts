import { Pipe, PipeTransform } from '@angular/core';
import { LogiUtils } from '../utils';

@Pipe({
  name: 'filterPipe'
})
export class Filter implements PipeTransform {

 /**
     * Transform
     *
     * @param {any[]} mainArr
     * @param {string} searchText
     * @param {string} property
     * @returns {any}
     */
    transform(mainArr: any[], searchText: string, property: string): any
    {
        return LogiUtils.filterArrayByString(mainArr, searchText);
    }

}
