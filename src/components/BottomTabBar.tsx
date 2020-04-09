import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from '../assets/icons/add_icon.svg';
import RBSheet from 'react-native-raw-bottom-sheet';
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

      const onAddPress = (ref: React.MutableRefObject<RBSheet>) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        event.preventDefault();
        ref.current.open();
      };

      if (route.name === 'Add') {
        const refRBSheet = useRef() as React.MutableRefObject<RBSheet>;
        let actionSheet: any;
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
                bounciness={15}
                defaultOverlayOpacity={0}
                ref={(ref) => (actionSheet = ref)}
                gestureEnabled={true}
                openAnimationSpeed={100}
                CustomHeaderComponent={
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      borderRadius: 15,
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
                <View style={{height: 300, backgroundColor: 'transparent'}}>
                  <Text>YOUR CUSTOM COMPONENT INSIDE THE ACTIONSHEET</Text>
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

const MySheet = () => (
  <View
    style={{
      height: 700,
      position: 'relative',
      width: '100%',
      backgroundColor: 'orange',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    }}>
    <Icon
      style={{
        position: 'absolute',
        alignSelf: 'center',
        top: -40,
      }}
    />
    <TextInput placeholder="Your Todo.." />
  </View>
);

export default BottomTabBar;
