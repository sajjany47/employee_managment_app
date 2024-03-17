/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

export const Login = () => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        gap: 10,
      }}>
      <TextInput
        mode="outlined"
        label="Username/Email/Mobile"
        placeholder="Enter your Id"
        left={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Enter Password"
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  );
};
