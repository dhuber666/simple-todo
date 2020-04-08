import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
      title: 'jiha',
      completed: false,
      alarmEnabled: true,
    };

    dispatch(newTodo(myTodo));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}>
      <ScrollView style={{width: '100%'}}>
        {todos && todos.map((todo) => <Text>{todo.title}</Text>)}
      </ScrollView>
      <TouchableOpacity onPress={addTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
