//App 底部入口

import * as React from 'react';
import { createBottomTabNavigator, createStackNavigator } from '@react-navigation/bottom-tabs';
import { Image, DeviceEventEmitter } from 'react-native';
import ServicePage from "./home/servicePage";
import MinePage from './myinfo/mine';
import MallPage from './news/mallPage';
import Classify from './classify/classify';

const Tab = createBottomTabNavigator();


export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showMarket: false
        }
    }

    render() {
        if (this.state.showMarket) {
            return null
        } else {
            return (
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    // tabBarVisible:true,
                }}>
                    <Tab.Screen name="Home" component={ServicePage} options={{
                        tabBarLabel: '首页',
                        tabBarIcon: ({ focused, tintColor }) => (
                            <Image
                                source={focused ? require('../assets/images/tab_icon_home_sel.png') : require('../assets/images/tab_icon_home_nor.png')}
                                style={{ width: 26, height: 26, tintColor: tintColor }}
                            />
                        )
                    }} />
                    <Tab.Screen name="Classify" component={Classify} options={{
                        tabBarLabel: '分类',
                        tabBarIcon: ({ focused, tintColor }) => (
                            <Image
                                source={focused ? require('../assets/images/tab_icon_classify_sel.png') : require('../assets/images/tab_icon_classify_nor.png')}
                                style={{ width: 26, height: 26, tintColor: tintColor }}
                            />
                        )
                    }} />
                    <Tab.Screen name="News" component={MallPage} options={{
                        tabBarLabel: '新闻公告',
                        tabBarIcon: ({ focused, tintColor }) => (
                            <Image
                                source={focused ? require('../assets/images/tab_icon_news_sel.png') : require('../assets/images/tab_icon_news_nor.png')}
                                style={{ width: 26, height: 26, tintColor: tintColor }}
                            />
                        )
                    }} />
                    <Tab.Screen name="MyInfo" component={MinePage} options={{
                        tabBarLabel: '我的',
                        tabBarIcon: ({ focused, tintColor }) => (
                            <Image
                                source={focused ? require('../assets/images/tab_icon_my_sel.png') : require('../assets/images/tab_icon_my_nor.png')}
                                style={{ width: 26, height: 26, tintColor: tintColor }}
                            />
                        )
                    }} />
                </Tab.Navigator>
            );
        }

    }

}
