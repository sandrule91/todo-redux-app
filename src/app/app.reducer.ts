import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';




//Este reducer va ser el que nos diga como se encuentra la appstate de la aplicacion
export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos

}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer


}