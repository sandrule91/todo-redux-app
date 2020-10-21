import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),
];

const _todoReducer = createReducer(estadoInicial,
    //El primer corchete es para retornar un nuevo arreglo. 
    //EL operador spread es para separar cada uno de los todos que tenga para extraerlo de manera independiente
    //Al final es la creacion de un nuevo TODO
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(limpiarTodos, (state) => state.filter( todo => !todo.completado)),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)), //Regresa todos los todos cuyo id sea diferente al id que estoy recibiendo
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, //coge las propiedades y dejalas tal cual
                    completado: !todo.completado //Cambiame el estado al opuesto 
                }
            } else {
                return todo;
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, //coge las propiedades y dejalas tal cual
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    }),
    on(toggleAll, (state, { completado }) => state.map(todo => {
        return {
            ...todo,
            completado: completado
        }
    }
    ))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}