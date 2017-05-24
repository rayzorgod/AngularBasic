import { PipeTransform, Pipe } from '@angular/core';

import { IProduct2 } from './product2';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct2[], filterBy?: string): IProduct2[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : undefined;

        return filterBy ? value.filter((product: IProduct2) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy ? filterBy : "") !== -1) : value;
        }


}