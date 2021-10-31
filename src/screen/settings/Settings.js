import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Container from '../../shared/Container';
import { ContainerStyle } from '../../shared/GlobalStyle';

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={ContainerStyle}>
        <Text>로그인 스크린입니다.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
