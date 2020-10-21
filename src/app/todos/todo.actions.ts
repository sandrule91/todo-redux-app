import { createAction, props } from '@ngrx/store';

//Limpiar tareas completadas
export const limpiarTodos = createAction( '[TODO] Limpiar Todo');

//Crear el estado
export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ texto: string }>()
);
//cambiar el estado
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

//editar el estado
export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

//borrar el estado
export const borrar = createAction(
    '[TODO] Eliminar Todo',
    props<{ id: number }>()
);

//Cambiar todos los estados
export const toggleAll = createAction(
    '[TODO] ToggleAll TodoAll',
    props<{ completado: boolean }>()
);


