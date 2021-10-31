import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Settings from '../screen/settings/Settings';
import {SafeAreaView} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <SafeAreaView />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
