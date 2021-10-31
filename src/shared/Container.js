import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Container = () => {
  return (
    <SafeAreaView >
      <View style={styles.Container}>
        <Text style={styles.Grid}>안녕하세요</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    Container : {
        backgroundColor : "#e9ecef",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        height : '100%',
        padding : 30
    },
    Grid : {
      width: '100%',
      backgroundColor : '#ffffff'
    }
})

export default Container;
