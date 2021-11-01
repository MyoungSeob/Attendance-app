import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LoginInput from '../../../components/Login/LoginInput';
import Input from '../../../elements/Input';
import {ContainerStyle} from '../../../shared/GlobalStyle';

const Login = () => {

  return (
    <>
      <SafeAreaView style={{backgroundColor : "#e9ecef"}}/>
      <View style={ContainerStyle}>
        <View style={styles.container}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>카-첵</Text>
          </View>
          <LoginInput/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
  },
  titleTextContainer : {
      justifyContent : 'center',
      alignItems : 'center',
      marginBottom : 60
  },
  titleText : {
      fontSize : 50,
      fontFamily : 'OTSBAggroB'
  }
});

export default Login;
