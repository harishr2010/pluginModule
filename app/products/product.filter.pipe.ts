import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((x: IProduct) => x.productName.toLowerCase().indexOf(filterBy) != -1) : value;
    }
}