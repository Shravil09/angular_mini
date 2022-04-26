import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString:string): any {
    if(filteredString === ""){
      return value;
    }
  filteredString = filteredString.toLowerCase();
  return value.filter(function(item:any){
    return JSON.stringify(item).toLowerCase().includes(filteredString);
});
  }
  
}
