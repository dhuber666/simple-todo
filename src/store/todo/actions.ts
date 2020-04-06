import {REMOVE_TODO, TodoActionTypes, Todo, SET_TODOS} from './types';
import firestore from '@react-native-firebase/firestore';

// Creates a new todo on firebase, doesn't set local state directly
export const newTodo = (newTodo: Todo) => async (dispatch: Function) =>
  firestore().collection('Todo').add(newTodo);

// runs every time a new todo comes in from firebase
// returns a unsubscribe function, for the component to unsubscribe
export const onNewTodo = (setUnsubscribe: Function) => async (
  dispatch: Function,
) => {
  const todoCollection = firestore().collection('Todo');

  const unsubscribe = todoCollection.onSnapshot((snapshot) => {
    const data = snapshot.docs.map((item) => {
      const todo = item.data();
      const id = item.id;
      console.log(id);
      return {id, ...todo};
    }) as Todo[];
    dispatch(setTodos(data));
  });

  setUnsubscribe(unsubscribe);
};

// this sets the state with the new todos
export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: todos,
});

// removes todo
export const removeTodo = (todo: Todo): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: todo,
});
