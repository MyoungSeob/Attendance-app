import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Input from '../../elements/Input';
import SignupButtonContainer from '../../screen/auth/Signup/SignupButtonContainer';
const SignupInputs = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding">
      <Input placeholder="사용할 아이디를 입력해주세요." type="SignUpID" />
      <View style={{marginTop: 10}} />
      <Input placeholder="이름을 입력해주세요." type="SignUpName" />
      <View style={{marginTop: 10}} />
      <Input
        placeholder="사용할 비밀번호를 입력해주세요."
        type="SignUpPassword"
        password="true"
      />
      <View style={{marginTop: 10}} />
      <Input
        placeholder="비밀번호를 다시 한 번 입력해주세요."
        password="true"
        keyboardVerticalOffset={44}
      />
      <SignupButtonContainer />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    justifyContent: 'center',
  },
});

export default SignupInputs;
