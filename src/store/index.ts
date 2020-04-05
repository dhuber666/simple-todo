import {combineReducers} from 'redux';
import {systemReducer} from './system/reducers';
import {chatReducer} from './chat/reducers';
import {todoReducer} from './todo/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
