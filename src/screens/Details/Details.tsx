import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamsList} from 'src/AppNavigator/models/RootStackParamsList';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamsList, 'Details'>;
};

const DetailsScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default DetailsScreen;
