import React, { useState, useRef } from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import { fetchData } from "../../common/fetch";
import Localstorage from '../../common/localStorage'
var { width, height } = Dimensions.get('window');
let maxTime = 60;
export default class RegisterView extends React.Component {
    constructor() {
        super();
        this.state = {
            imageHeight: 200,
            passWord: '',
            loginName: '',
            mobile: '',
            code: '',
            verificationtext: '获取验证码',
            verificationBool: false,
            token:'otfdtvohut0r30unlxl8fwqwrt1na9iz'
        }
    }

    onChooseItems = (e) => {
        this.setState({
            selectItem: e
        })
    }
    onfocusCallback = (type) => {
        this.setState({
            imageHeight: 0
        })
    }
    onBlurCallback = () => {
        this.setState({
            imageHeight: 200
        })
    }
    onRegisterCallback = () => {
        this.props.navigation.navigate('register')
    }
    onLoginCallback = () => {
        this.props.navigation.navigate('mainPgae')
    }

    //发送验证码
    sendCode =()=>{
        let data = {
            "mobile": this.state.mobile,
        }
        if (this.state.mobile.length > 0){
            setInterval(() => {
                if (maxTime > 0) {
                    --maxTime
                    this.setState({
                        verificationBool:true,
                        verificationtext: '重新获取' + maxTime,
                    })
                }
                else {
                    this.setState({
                        verificationBool:false,
                        verificationtext: '获取验证码',
                    })
                }
            }, 1000)
        } else {
            alert("输入正确手机号码")
            return
        }
        if (!this.state.verificationBool){
            let url = 'http://lhh.natapp1.cc/api/wx/auth/regCaptcha';
            const  callback =(e)=>{
                // navigation.goBack()
            }
            let param = {
                body: JSON.stringify(data), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'X-Litemall-Token': this.state.token,
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
            }
            fetchData(url,param,callback)
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode='stretch' source={require('../../assets/images/myinfo/login_bg_img.png')} style={{
                    height: this.state.imageHeight,
                    width: width
                }} />
                <Text style={{fontSize: 20,marginTop:30,marginBottom:30}}>欢迎来到梦奇佳园</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: width * 0.8,
                            height: 40,
                            borderWidth: 1,
                            borderColor: 'lightgray',

                        }}>
                            <Image source={require('../../assets/images/myinfo/login_icon_name.png')} style={{ width: 22, height: 22, marginLeft: 5 }}></Image>
                            <TextInput
                                underlineColorAndroid='transparent'
                                onFocus={this.props.onfocusCallback}//获取焦点
                                onBlur={this.props.onBlurCallback}//失去焦点
                                placeholder={' 请输入登录名称'}
                                onChangeText={this.onLoginNameChanged}  //添加值改变事件
                                style={{ ...styles.tgTextInputStyle }}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: width * 0.8,
                            height: 40,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            marginTop:10
                        }}>
                            <Image source={require('../../assets/images/myinfo/login_icon_password.png')} style={{ width: 22, height: 22, marginLeft: 5 }}></Image>
                            <TextInput
                                underlineColorAndroid='transparent'
                                onFocus={this.props.onfocusCallback}//获取焦点
                                onBlur={this.props.onBlurCallback}//失去焦点
                                placeholder={' 请设置密码'}
                                onChangeText={this.onLoginNameChanged}  //添加值改变事件
                                style={{...styles.tgTextInputStyle,width:width*0.8-60}}
                            />
                            <TouchableOpacity activeOpacity={0.5}  onPress={() =>{this.sendCode()}}>
                                <Image source={require('../../assets/images/myinfo/login_icon_eyes.png')} style={{ width: 22, height: 22}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: width * 0.8,
                            height: 40,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            marginTop:10
                        }}>
                            <Image source={require('../../assets/images/myinfo/login_icon_ph.png')} style={{ width: 22, height: 22, marginLeft: 5 }}></Image>
                            <TextInput
                                underlineColorAndroid='transparent'
                                onFocus={this.props.onfocusCallback}//获取焦点
                                onBlur={this.props.onBlurCallback}//失去焦点
                                placeholder={' 请输入手机号码'}
                                onChangeText={this.onLoginNameChanged}  //添加值改变事件
                                style={{ ...styles.tgTextInputStyle }}
                            />
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: width * 0.8,
                            height: 40,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            marginTop:10
                        }}>
                            <Image source={require('../../assets/images/myinfo/login_icon_yz.png')} style={{ width: 22, height: 22, marginLeft: 5 }}></Image>
                            <TextInput
                                underlineColorAndroid='transparent'
                                onFocus={this.props.onfocusCallback}//获取焦点
                                onBlur={this.props.onBlurCallback}//失去焦点
                                placeholder={' 请输入验证码'}
                                onChangeText={this.onLoginNameChanged}  //添加值改变事件
                                style={{...styles.tgTextInputStyle,width:width*0.8-110}}
                            />
                            <TouchableOpacity activeOpacity={0.5}  onPress={() =>{this.sendCode()}}>
                                <Text style={{color:'#00BEAF'}}>{this.state.verificationtext}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity activeOpacity={0.5}  onPress={() => {this.onRegisterCallback()}}>
                            <View style={{...styles.tgLoginBtnStyle,marginTop:10,backgroundColor: '#13B4BB'}}>
                                <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{"注册"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


//
// export default function RegisterView1({ navigation }) {
//     const passwordRef = useRef(null);
//
//     let [passWord,setPassWord] = useState("");
//     let [loginName,setLoginName] = useState("");
//     let [mobile,setMobile] = useState("");
//     let [code,setCode] = useState("");
//     let [codeBtn,setCodeBtn] = useState({
//         btnText: '发送验证码',
//         btnBool: false,
//     });
//     let [token,setToken] = useState("qapbcjv06x804psb3z7h4tnepcu348t4");
//
//     //密码
//     const onPasswordChanged = (newPassword) => {
//         setPassWord(newPassword);
//     };
//
//     //登录名
//     const onLoginNameChanged = (newLoginName) => {
//         setLoginName(newLoginName)
//     };
//     //手机
//     const onPhoneChanged = (mobile) => {
//         setMobile(mobile)
//     };
//     //手机验证码
//     const onCodeChanged = (code) => {
//         setCode(code)
//     };
//     //注册
//     const register =()=>{
//         //返回登录
//         let data = {
//             "username": loginName,
//             "password": passWord,
//             "mobile": mobile,
//             "code": code,
//             "wxCode": "123456",
//         }
//         let url = 'http://lhh.natapp1.cc/api/wx/auth/register';
//         const  callback =(responseData)=>{
//             setToken(responseData.data.token)
//             navigation.goBack()
//         }
//         let param = {
//             body: JSON.stringify(data), // must match 'Content-Type' header
//             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             headers: {
//                 'X-Dts-Token': token,
//                 'content-type': 'application/json'
//             },
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         }
//         fetchData(url,param,token,callback)
//     }
//
//     //发送验证码
//     const sendCode =()=>{
//         let data = {
//             "mobile": mobile,
//         }
//        if (mobile.length > 0){
//            setInterval(() => {
//                if (maxTime > 0) {
//                    --maxTime
//                    setCodeBtn({
//                        btnText: '重新获取' + maxTime,
//                        btnBool: true
//                    })
//                }
//                else {
//                    setCodeBtn({
//                        btnText: '发送验证码',
//                        btnBool: false
//                    })
//                }
//            }, 1000)
//        } else {
//            alert("输入正确手机号码")
//            return
//        }
//         if (!codeBtn.btnBool){
//             let url = 'http://lhh.natapp1.cc/api/wx/auth/regCaptcha';
//             const  callback =(e)=>{
//                 // navigation.goBack()
//             }
//             let param = {
//                 body: JSON.stringify(data), // must match 'Content-Type' header
//                 cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//                 headers: {
//                     'X-Dts-Token': token,
//                     'content-type': 'application/json'
//                 },
//                 method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             }
//             fetchData(url,param,token,callback)
//         }
//
//     }
//     return (
//         <View style={styles.container}>
//             <Image source={require('../../assets/favicon.png')} style={styles.tgIconStyle} />
//             <TextInput
//                 placeholder={'  用户名'}
//                 onChangeText={onLoginNameChanged}  //添加值改变事件
//                 style={{ ...styles.tgTextInputStyle, marginTop: 20 }}
//             />
//
//
//             <TextInput
//                 ref={passwordRef}  //设置描述
//                 onChangeText={onPasswordChanged}  //添加值改变事件
//                 style={styles.tgTextInputStyle}
//                 autoCapitalize='none'  //设置首字母不自动大写
//                 underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
//                 secureTextEntry={true}  //设置为密码输入框
//                 placeholderTextColor={'#ccc'}  //设置占位符颜色
//                 placeholder={'密码'}  //设置占位符
//             />
//             <View style={{flexDirection:'row',width: width * 0.8}}>
//                 <TextInput
//                     placeholder={'  手机'}
//                     onChangeText={onPhoneChanged}  //添加值改变事件
//                     style={{ ...styles.phoneInputStyle}}
//                 />
//                 <TextInput
//                     placeholder={'验证码'}
//                     onChangeText={onCodeChanged}  //添加值改变事件
//                     style={{...styles.codeInputStyle}}
//                 />
//                 <TouchableOpacity activeOpacity={0.5}  onPress={() => sendCode()}>
//                     <View style={{...styles.codeBtnStyle,backgroundColor:codeBtn.btnBool?'gray':'#00BB00'}}>
//                         <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{codeBtn.btnText}</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//             <TouchableOpacity activeOpacity={0.5}  onPress={() => register()}>
//                 <View style={styles.tgLoginBtnStyle}>
//                     <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{"注册"}</Text>
//                 </View>
//             </TouchableOpacity>
//             <View style={styles.tgSettingStyle}>
//                 <Text style={{fontSize:15}} onPress={() => navigation.goBack()}>返回</Text>
//             </View>
//         </View>
//     );
// }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    tgIconStyle: {
        width: 100,
        height: 100,
        marginTop: 60,
        marginBottom: 30,
        // borderRadius:40,
        borderWidth: 1,
        borderColor: 'grey'
    },
    tgTextInputStyle:{
        width:width*0.8-50,
        padding:0,
        fontSize:15
    },

    phoneInputStyle: {
        // marginTop:20,
        width: width * 0.4,
        height: 38,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 4,
        textAlign: 'left',
        alignSelf: 'center'
    },
    codeInputStyle: {
        // marginTop:20,
        width: width * 0.18,
        height: 38,
        borderColor: 'lightgrey',
        marginLeft: width * 0.02,
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 4,
        textAlign: 'left',
        alignSelf: 'center'
    },

    codeBtnStyle: {
        height: 38,
        width: width * 0.2,
        backgroundColor: '#00BB00',
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    tgLoginBtnStyle: {
        height: 38,
        width: width * 0.8,
        backgroundColor: '#00BB00',
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },

    tgSettingStyle: {
        flexDirection: 'row',
        width: width * 0.8,
        marginTop: 8,
        justifyContent: 'flex-end'
    },

    tgOtherLoginStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: width * 0.1,
        left: width * 0.1
    },

    tgOtherImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 8
    }
});
