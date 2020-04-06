import {TodoActionTypes, ADD_TODO, REMOVE_TODO, Todo, SET_TODOS} from './types';

const initialState: Todo[] = [];

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): Todo[] {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case SET_TODOS:
      return action.payload;
    default:
      return state;
  }
}
