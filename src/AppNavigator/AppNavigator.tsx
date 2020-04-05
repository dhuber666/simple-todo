import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamsList} from './models/RootStackParamsList';

import HomeScreen from '../screens/Home/Home';
import DetailsScreen from '../screens/Details/Details';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator<RootStackParamsList>();

import {View, Text} from 'react-native';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#3867d5', '#81c7f5']}
      style={{
        height: 238,
        paddingLeft: 15,
        paddingRight: 15,
      }}></LinearGradient>
  );
};

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Hello'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
          header: () => {
            return <Header />;
          },
        }}
      />
    </Stack.Navigator>
  );
};
