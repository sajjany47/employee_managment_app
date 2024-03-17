/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Icon from 'react-native-paper';

export const Login = () => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        marginTop: 250,
        margin: 10,
      }}>
      <TextInput
        mode="outlined"
        label="Username/Email/Mobile"
        placeholder="Enter your Id"
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
