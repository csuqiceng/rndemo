import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServicePage from "./service/servicePage";
import Mine from './personinfo/mine';
import MallPage from './mall/mallPage';

const Tab = createBottomTabNavigator();

export default function MainPage() {
  return (
      <Tab.Navigator  screenOptions={{
          headerShown: false,
      }}>
        <Tab.Screen name="Home" component={ServicePage}  />
          <Tab.Screen name="mall" component={MallPage} />
        <Tab.Screen name="Settings" component={Mine} />
      </Tab.Navigator>
  );
}
