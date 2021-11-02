import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import SignupInputs from '../../../components/signup/SignupInputs';
import {ContainerStyle} from '../../../shared/GlobalStyle';

const Signup = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#e9ecef'}} />
      <View style={ContainerStyle}>
        <View style={styles.container}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>출-석부</Text>
          </View>
          <SignupInputs />
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
  titleTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'OTSBAggroB',
  },
});
export default Signup;
