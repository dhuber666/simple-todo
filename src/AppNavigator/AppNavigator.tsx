import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamsList} from './models/RootStackParamsList';

import HomeScreen from '../screens/Home/Home';

import Header from '../components/Header';

import Modal from '../components/BottomDrawer';

const Stack = createStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Test" component={Modal} />
  </Tab.Navigator>
);

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};
