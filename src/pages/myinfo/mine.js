import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
//导入外部组件
import MyCell from './commonMineCell'
import MineHeaderView from './mineHeaderView'
import MineMiddleView from './mineMiddleView'
import LoginView from "../login/loginView";
import RegisterView from "../login/registerView";
import SystemPage from "./system";
import Changepassword from "./changepassword";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
const MyinfoStack = createStackNavigator();

export default class MinePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginType:'login'
        }
    }

    render() {
            let loginType = this.state.loginType;
            if ( window.loginType){
                loginType = window.loginType;
            }
            return (
                <MyinfoStack.Navigator
                    initialRouteName={loginType}
                    headerMode="screen"
                    screenOptions={{
                        headerShown: false
                    }}>
                    <MyinfoStack.Screen name="login" options={{
                    }} component={LoginView} />
                    <MyinfoStack.Screen name="register" options={{}} component={RegisterView} />
                    <MyinfoStack.Screen name="mainPgae" options={{}} component={MyinfoPage} />
                    <MyinfoStack.Screen name="system" options={{}} component={SystemPage} />
                    <MyinfoStack.Screen name="changepassword" options={{}} component={Changepassword} />
                </MyinfoStack.Navigator>
            );
        }
}


 class MyinfoPage extends React.Component {
    constructor() {
        super();
    }
     onSystemPageCallback=()=>{
         this.props.navigation.navigate('system')
     }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MineHeaderView onSystemPageCallback={this.onSystemPageCallback}/>
                    <View>
                        <MyCell
                            leftIconName="collect"
                            leftTitle="我的订单"
                            rightTitle="查看全部订单"
                        />
                    </View>

                    <MineMiddleView />

                    <View style={{marginTop:20}}>


                        <MyCell
                            leftIconName="draft"
                            leftTitle="钱包"
                            rightTitle="账户余额:¥100"
                        />

                        <MyCell
                            leftIconName="like"
                            leftTitle="抵用券"
                            rightTitle="10张"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <MyCell
                            leftIconName="card"
                            leftTitle="积分商城"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <MyCell
                            leftIconName="new_friend"
                            leftTitle="今日推荐"
                            rightIconName="me_new"
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <MyCell
                            leftIconName="pay"
                            leftTitle="我要合作"
                            rightTitle="轻松开店,招财进宝"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
 }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
});
