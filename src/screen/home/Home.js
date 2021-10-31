import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Container from '../../shared/Container';
import {ContainerStyle} from '../../shared/GlobalStyle';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={ContainerStyle}>
          <Text>됏냐?</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
