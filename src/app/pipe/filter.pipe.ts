import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../shared/model/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Todo>, searchInput:string){
    if(!searchInput){
      return value
    }

    if(!value){
      return []
    }

    let filterArr= value.filter(e =>{
      return e.title.toLowerCase().startsWith(searchInput.toLowerCase())
    })
    return filterArr
  }



}
