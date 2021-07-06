
import React, {useState,useRef} from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import fetchData from "../../common/fetch";

var {width,height} = Dimensions.get('window');


export default function LoginView({ navigation }) {


    let [passWord,setPassWord] = useState("");

    let [loginName,setLoginName] = useState("");

    let [token,setToken] = useState("6533936kurgh11wvf1sd89ew48x2ryko");
    //密码
    const onPasswordChanged = (newPassword) => {
        setPassWord(newPassword);
    };

    //登录名
    const onLoginNameChanged = (newLoginName) => {
        setLoginName(newLoginName)
    };

    //登录
    const login = ()=>{
        //返回登录
        let data = {
            "username": loginName,
            "password": passWord,
        }
        let param = {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
            'X-Dts-Token': token,
                'content-type': 'application/json'
        },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }
        let url = 'http://lhh.natapp1.cc/mengqi/wx/auth/login';
        const  callback =(responseData)=>{
            setToken(responseData.data.token)
            navigation.navigate('Home', { token: responseData.data.token })
        }
        fetchData(url,param,token,callback);
        console.log(JSON.stringify(token))
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/favicon.png')} style={styles.tgIconStyle}/>
            <TextInput
                placeholder={'  用户名/手机'}
                onChangeText={onLoginNameChanged}  //添加值改变事件
                style={{ ...styles.tgTextInputStyle, marginTop: 20 }}
            />
            <TextInput
                onChangeText={onPasswordChanged}  //添加值改变事件
                style={styles.tgTextInputStyle}
                autoCapitalize='none'  //设置首字母不自动大写
                underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                secureTextEntry={true}  //设置为密码输入框
                placeholderTextColor={'#ccc'}  //设置占位符颜色
                placeholder={'密码'}  //设置占位符
            />
            <TouchableOpacity activeOpacity={0.5}  onPress={() => login()}>
                <View style={styles.tgLoginBtnStyle}>
                    <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{"登录"}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.tgSettingStyle}>
                <TouchableOpacity activeOpacity={0.5}  onPress={()=> alert("发送错误")}>
                    <Text style={{fontSize:15}}>无法登录</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}  onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{fontSize:15}}>新用户</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },

    tgIconStyle:{
        width:100,
        height:100,
        marginTop:60,
        marginBottom:30,
        // borderRadius:40,
        borderWidth:1,
        borderColor:'grey'
    },

    tgTextInputStyle:{
        // marginTop:20,
        width:width*0.8,
        height:38,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginBottom:8,
        borderRadius:4,
        textAlign:'left',
        alignSelf:'center'
    },

    tgLoginBtnStyle:{
        height:38,
        width:width*0.8,
        backgroundColor:'#00BB00',
        marginTop:8,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },

    tgSettingStyle:{
        flexDirection:'row',
        width:width*0.8,
        marginTop:8,
        justifyContent:'space-between'
    },

    tgOtherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:width*0.1,
        left:width*0.1
    },

    tgOtherImageStyle:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:8
    }
});