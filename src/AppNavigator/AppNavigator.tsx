import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamsList} from './models/RootStackParamsList';

import HomeScreen from '../screens/Home/Home';

import Header from '../components/Header';

import BottomDrawer from '../components/BottomDrawer';

import BottomTabBar from '../components/BottomTabBar';

const Stack = createStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Add" component={BottomDrawer} />
    <Tab.Screen name="Tasks" component={Header} />
  </Tab.Navigator>
);

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => <Header />}}
      />
    </Stack.Navigator>
  );
};
