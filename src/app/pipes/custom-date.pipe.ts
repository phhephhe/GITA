import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): any {
    if (value instanceof Date) {
      return moment(value).format("HH:mm:ss MMM dd yyyy");
    }else{
      return value;
    }
  }

}