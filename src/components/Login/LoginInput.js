import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import LoginButtonContainer from '../../screen/auth/Login/LoginButtonContainer';
import CheckBox from '@react-native-community/checkbox';
import { isAutoLogin } from '../../redux/auth/auth';
import { useDispatch } from 'react-redux';

const LoginInput = () => {
  const [autoLogin, setAutoLogin] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAutoLogin({isAutoLogin : autoLogin}))
  }, [autoLogin])
  return (
    <>
      <Input placeholder="아이디를 입력해주세요." name="아이디" type="ID" />
      <View style={{marginTop: 10}} />
      <Input
        placeholder="비밀번호를 입력해주세요."
        name="비밀번호"
        type="Password"
        password='true'
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => {
            autoLogin ? setAutoLogin(false) : setAutoLogin(true);
          }}
          activeOpacity={1}
          >
          <Text
            style={{
              fontSize: 15,
            }}>
            자동 로그인
          </Text>
        </TouchableOpacity>
        <CheckBox
          disabled={false}
          style={styles.checkbox}
          lineWidth={1}
          boxType="square"
          value={autoLogin}
          onChange={() => {
            autoLogin ? setAutoLogin(false) : setAutoLogin(true);
          }}
        />
      </View>
      <View style={{marginTop: 25}}>
        <LoginButtonContainer />
      </View>
      <View style={{marginTop: 15}}>
        <Button name="회원가입" onPress={() => navigation.navigate('Signup')} />
      </View>
      <TouchableOpacity style={styles.findMyAccount}>
        <Text style={styles.findMyAccountText}>비밀번호 찾기</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  checkboxContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  findMyAccount : {
    marginTop : 15,
    alignItems : 'flex-end',
    marginRight : 10,
  },
  findMyAccountText : {
    fontSize : 15
  }
});

export default LoginInput;
