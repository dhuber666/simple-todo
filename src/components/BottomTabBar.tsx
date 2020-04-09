'use strict';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  PanResponder,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from '../assets/icons/add_icon.svg';
import ActionSheet from 'react-native-actions-sheet';

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
        let actionSheet: ActionSheet;
        return (
          <TouchableOpacity
            style={{backgroundColor: 'transparent'}}
            hitSlop={{top: 50}}
            activeOpacity={1}
            onPress={() => {
              actionSheet.setModalVisible();
            }}>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  elevation: 4,
                  borderRadius: 40,
                  top: -30,
                  alignSelf: 'center',
                }}>
                <Icon width={80} height={80} style={{alignSelf: 'center'}} />
              </View>
              <ActionSheet
                bounceOnOpen
                containerStyle={{
                  backgroundColor: 'teal',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
                bounciness={15}
                defaultOverlayOpacity={0}
                ref={(ref) => (actionSheet = ref!)}
                gestureEnabled={true}
                openAnimationSpeed={100}
                CustomHeaderComponent={
                  <View
                    style={{
                      backgroundColor: 'teal',
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                      height: 40,
                    }}>
                    <View
                      style={{
                        width: 80,
                        height: 80,
                        elevation: 4,
                        borderRadius: 40,
                        top: -50,
                        alignSelf: 'center',
                      }}>
                      <Icon
                        width={80}
                        height={80}
                        style={{alignSelf: 'center'}}
                      />
                    </View>
                  </View>
                }>
                <View
                  style={{
                    height: 300,
                    padding: 15,
                    backgroundColor: 'teal',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}>
                  <TextInput
                    underlineColorAndroid="white"
                    placeholderTextColor="white"
                    placeholder="Todo title.."
                  />
                </View>
              </ActionSheet>
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
