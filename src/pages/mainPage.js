import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServicePage from "./service/servicePage";
import Mine from './personinfo/mine';
import MallPage from './mall/mallPage';

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation }) {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ServicePage}  />
          <Tab.Screen name="mall" component={MallPage} />
        <Tab.Screen name="Settings" component={Mine} />
      </Tab.Navigator>
  );
}