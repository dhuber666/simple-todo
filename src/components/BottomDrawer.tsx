import React, {useRef} from 'react';
import {View, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AddLogo from '../assets/icons/add_icon.svg';

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
    <AddLogo
      style={{
        position: 'absolute',
        alignSelf: 'center',
        top: -40,
      }}
    />
    <TextInput placeholder="Your Todo.." />
  </View>
);

export default function Example() {
  const refRBSheet = useRef() as React.MutableRefObject<RBSheet>;
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
        closeOnDragDown={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'transparent',
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
