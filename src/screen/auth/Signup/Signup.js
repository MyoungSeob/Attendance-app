import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ContainerStyle} from '../../../shared/GlobalStyle';

const Signup = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#e9ecef'}} />
      <View style={ContainerStyle}>
        <Text>회원가입</Text>
      </View>
    </>
  );
};

export default Signup;
