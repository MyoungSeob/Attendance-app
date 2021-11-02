import React, {Children, useEffect, useMemo, useState} from 'react';
import {TextInput, View, StyleSheet, Text, Alert, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginId, loginPassword} from '../redux/auth/auth';
import { signUpId, signUpName, signUpPassword } from '../redux/auth/sign';

const Input = props => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  console.log(props.password)

  const onPress = () => {
    Keyboard.dismiss();
  };
  const isTypeOfInput = (data) => {
    switch (data) {
      case 'ID':
        dispatch(loginId({loginId: text}));
        break;
      case 'Password':
        dispatch(loginPassword({loginPassword: text}));
        break;
      case 'SignUpID' :
        dispatch(signUpId({signUpId : text}));
        break;
      case 'SignUpPassword' :
        dispatch(signUpPassword({signUpPassword : text}));
        break;
      case 'SignUpName' :
        dispatch(signUpName({signUpName : text}));
    }
  }

  useEffect(() => {
    isTypeOfInput(props.type)
  }, [text]);

  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.container}
        onChange={e => {
          setText(e.nativeEvent.text);
        }}
        value={text}
        autoCapitalize="none"
        returnKeyType="done"
        onSubmitEditing={() => onPress()}
        secureTextEntry={props.password ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    color: '#333333',
    marginTop: 12,
    borderRadius: 15,
    fontSize: 20,
  },
});

export default Input;
