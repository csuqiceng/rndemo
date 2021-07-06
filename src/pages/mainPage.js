import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ServicePage from "./service/servicePage";
import MinePage from './personinfo/mine';
import MallPage from './mall/mallPage';

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation, route }) {

    // const  Service =()=>{
    //     return<ServicePage token={route.params.token}/>
    // }
    // const  Mall =()=>{
    //     return<MallPage token={route.params.token}/>
    // }
    // const  Mine =()=>{
    //     return<MinePage token={route.params.token}/>
    // }
    return (
      <Tab.Navigator  screenOptions={{
          headerShown: false,
      }}>
        <Tab.Screen name="Home" component={ServicePage}  />
          <Tab.Screen name="mall" component={MallPage} />
        <Tab.Screen name="Settings" component={MinePage} />
      </Tab.Navigator>
  );
}
