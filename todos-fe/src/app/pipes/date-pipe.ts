import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datePipe',
    pure: false
})
export class DatePipe implements PipeTransform {
    transform(items: any[], filter: Object, arg1: any): any {
        if (!items || !filter) {
            return items;
        }
        let currentDate = Date.now();
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item) => {
            if (item.dueDate) {
                let dueDate = new Date(item.dueDate),
                dueDateTimeStamp = dueDate.getTime();
                if(arg1) {
                    return dueDateTimeStamp > currentDate;
                } else {
                    return dueDateTimeStamp < currentDate;
                }
            }
            return false;
        });
    }
}
