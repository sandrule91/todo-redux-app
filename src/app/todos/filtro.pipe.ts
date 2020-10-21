import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado); //que devuelva el que este completado en true
      case 'pendientes':
        return todos.filter(todo => !todo.completado); //opuesto
      default:
        return todos; //no hace falta aplicar filtro y por eso devolvemos todos
    }

  }

}
