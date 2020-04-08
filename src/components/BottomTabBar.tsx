import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from '../assets/icons/add_icon.svg';

function BottomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const renderTabs = () => {
    return state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      if (route.name === 'Add') {
        return (
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: 'white',
              flex: 1,
            }}
            hitSlop={{top: 50, left: -20, right: -20}}
            accessibilityRole="button"
            activeOpacity={1}
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View
              style={{
                width: 80,
                height: 80,
                elevation: 4,
                borderRadius: 40,
                bottom: 50,
                alignSelf: 'center',
              }}>
              <Icon
                height={80}
                width={80}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableOpacity>
        );
      }

      return (
        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={1}
          accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            flex: 1,
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: isFocused ? 'orange' : '#5F87E7'}}>{label}</Text>
        </TouchableOpacity>
      );
    });
  };

  return <View style={{flexDirection: 'row'}}>{renderTabs()}</View>;
}

export default BottomTabBar;
