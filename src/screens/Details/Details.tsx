import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamsList} from 'src/AppNavigator/models/RootStackParamsList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {Todo} from '../../store/todo/types';
import {newTodo, onNewTodo} from '../../store/todo/actions';

type Props = {
  navigation: StackNavigationProp<RootStackParamsList, 'Details'>;
};

interface RootState {
  todos: Todo[];
}

const DetailsScreen = ({navigation}: Props) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    let unsubscribe: Function;

    dispatch(
      onNewTodo((setUnsubscribe: Function) => {
        unsubscribe = setUnsubscribe;
      }),
    );

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const addTodo = () => {
    const myTodo: Todo = {
      id: '3',
      title: 'jiha',
      completed: false,
    };

    dispatch(newTodo(myTodo));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Add Todo" onPress={addTodo} />
      {todos && todos.map((todo) => <Text>{todo.title}</Text>)}
    </View>
  );
};

export default DetailsScreen;
