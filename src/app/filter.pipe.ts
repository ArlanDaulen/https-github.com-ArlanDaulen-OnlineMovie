import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(games, value){
    return games.filter( game => {
      return game.name.includes(value);
    });
  }
}
