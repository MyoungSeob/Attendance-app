import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Button from '../elements/Button';
import Input from '../elements/Input';
import LoginButtonContainer from '../screen/auth/Login/LoginButtonContainer';

const LoginInput = () => {
  const navigation = useNavigation();
  return (
    <>
      <Input placeholder="아이디를 입력해주세요." name="아이디" type="ID"/>
      <View style={{marginTop: 20}} />
      <Input placeholder="비밀 번호를 입력해주세요." name="비밀번호" type="Password"/>
      <View style={{marginTop: 40}}>
        <LoginButtonContainer/>
      </View>
      <View style={{marginTop: 15}}>
        <Button name="회원가입" onPress={() => navigation.navigate('Signup')}/>
      </View>
    </>
  );
};

export default LoginInput;
