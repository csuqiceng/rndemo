import * as React from 'react';
import { createBottomTabNavigator,createStackNavigator } from '@react-navigation/bottom-tabs';
import {Image,DeviceEventEmitter} from 'react-native';
import ServicePage from "./service/servicePage";
import MinePage from './personinfo/mine';
import MallPage from './mall/mallPage';

const Tab = createBottomTabNavigator();


export default class MainPage extends React.Component{
     constructor() {
         super();
         this.state={
             showMarket: false
         }
     }

    componentDidMount = () => {
        // 这里监听一个事件，如果需要显示商品推荐页面，则将showMarket置为true
        this.subscribe = DeviceEventEmitter.addListener('Home', () => {
            console.log("ddd2")
            this.setState({
                showMarket: true
            });
        });
    };

    componentWillUnmount = () => {
        this.subscribe && this.subscribe.remove();
    };

     render() {
         if (this.state.showMarket){
             return null
         }else{
             return (
                 <Tab.Navigator  screenOptions={{
                     headerShown: false,
                 }}>
                     <Tab.Screen name="Home" component={ServicePage}  options={{
                         tabBarLabel: '首页',
                         tabBarIcon: ({ focused, tintColor }) => (
                             <Image
                                 source={focused ? require('../assets/images/tab_icon_home_sel.png') : require('../assets/images/tab_icon_home_sel.png')}
                                 style={{ width: 26, height: 26, tintColor: tintColor }}
                             />
                         )
                     }}/>
                     <Tab.Screen name="Classify" component={MallPage} options={{
                         tabBarVisible:false,
                         tabBarLabel: '分类',
                         tabBarIcon: ({ focused, tintColor }) => (
                             <Image
                                 source={focused ? require('../assets/images/tab_icon_classify_nor.png') : require('../assets/images/tab_icon_classify_nor.png')}
                                 style={{ width: 26, height: 26, tintColor: tintColor }}
                             />
                         )
                     }}/>
                     <Tab.Screen name="News" component={MinePage} options={{
                         tabBarLabel: '新闻公告',
                         tabBarIcon: ({ focused, tintColor }) => (
                             <Image
                                 source={focused ? require('../assets/images/tab_icon_news_nor.png') : require('../assets/images/tab_icon_news_nor.png')}
                                 style={{ width: 26, height: 26, tintColor: tintColor }}
                             />
                         )
                     }}/>
                     <Tab.Screen name="MyInfo" component={MinePage} options={{
                         tabBarLabel: '我的',
                         tabBarIcon: ({ focused, tintColor }) => (
                             <Image
                                 source={focused ? require('../assets/images/tab_icon_my_nor.png') : require('../assets/images/tab_icon_my_nor.png')}
                                 style={{ width: 26, height: 26, tintColor: tintColor }}
                             />
                         )
                     }}/>
                 </Tab.Navigator>
             );
         }

     }

}
