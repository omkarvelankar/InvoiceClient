import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getByIdPipe',
  pure: false
})
export class GetById implements PipeTransform {

 /**
     * Transform
     *
     * @param {any[]} value
     * @param {number} id
     * @param {string} property
     * @returns {any}
     */
    transform(value: any[], id: number, property: string): any
    {
        const foundItem = value.find(item => {
            if ( item.id !== undefined )
            {
                return item.id === id;
            }

            return false;
        });

        if ( foundItem )
        {
            return foundItem[property];
        }
    }
}
