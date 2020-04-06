import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {RootStackParamsList} from 'src/AppNavigator/models/RootStackParamsList';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {Todo} from '../../store/todo/types';
import {newTodo, onNewTodo} from '../../store/todo/actions';
import AddLogo from '../../assets/icons/add_icon.svg';

type Props = {
  navigation: StackNavigationProp<RootStackParamsList, 'Details'>;
};

interface RootState {
  todos: Todo[];
}

const HomeScreen = ({navigation}: Props) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

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
      categorie: 'work',
    };

    dispatch(newTodo(myTodo));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.todoScrollView}>
        {todos && todos.map((todo) => <Text key={todo.id}>{todo.title}</Text>)}
      </ScrollView>
      <TouchableOpacity onPress={addTodo}>
        <AddLogo style={styles.addLogo} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FCFF',
  },
  todoScrollView: {
    width: '100%',
    padding: 20,
  },
  addLogo: {
    shadowColor: '#F456C3',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.47,
    shadowRadius: 9,
    height: 53,
    width: 53,
    marginBottom: 60,
  },
});

export default HomeScreen;
