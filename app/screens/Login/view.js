import React from 'react';
import { View, Text } from 'react-native';
import Button from 'apsl-react-native-button';
import { Hoshi } from 'react-native-textinput-effects';
import styles from './styles';

export default function LoginView({ onChange, message, handleSubmit }) {
  return (
    <View style={styles.container}>
      <Hoshi
        style={{ width: '100%', marginBottom: 10 }}
        label={'Name'}
        borderColor={'##880088'}
        borderHeight={3}
        inputPadding={16}
        onChangeText={text => onChange(text)}
      />
      <Text style={{ color: 'red', fontSize: 18, width: '100%' }}>
        {message}
      </Text>

      <Button
        onPress={handleSubmit}
        style={{
          backgroundColor: '#880088',
          borderWidth: 0,
          height: 60,
          marginTop: 30,
        }}
        textStyle={{ fontSize: 18 }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Submit
        </Text>
      </Button>
    </View>
  );
}
