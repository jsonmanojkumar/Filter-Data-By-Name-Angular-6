import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchtext: any): any {
    
    return value.filter(function(search){
      console.log('hello',searchtext,search);
      return search.name.toLowerCase().indexOf(searchtext.toLowerCase()) >-1
      // return search.price.match(searchtext);
    })
  }

}
