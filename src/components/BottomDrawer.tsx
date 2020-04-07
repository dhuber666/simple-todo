import React, {useRef} from 'react';
import {View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AddLogo from '../assets/icons/add_icon.svg';

const MySheet = () => (
  <View style={{height: 500}}>
    <View style={{height: 100, backgroundColor: 'transparent', zIndex: 101}}>
      <AddLogo style={{alignSelf: 'center', zIndex: 100, top: 20}} />
    </View>
    <View
      style={{
        height: 400,
        backgroundColor: 'slateblue',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}>
      <TextInput placeholder="your todo.." autoFocus />
    </View>
  </View>
);

export default function Example() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            backfaceVisibility: 'hidden',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: 'transparent',
          },
        }}>
        <MySheet />
      </RBSheet>
    </View>
  );
}
