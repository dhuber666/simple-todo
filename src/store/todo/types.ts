export interface Todo {
  title: string;
  completed: boolean;
  id: string;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: Todo;
}

interface SetTodoAction {
  type: typeof SET_TODOS;
  payload: Todo[];
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | SetTodoAction;
