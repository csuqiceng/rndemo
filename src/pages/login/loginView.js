
import React, {useState,useRef} from "react";
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
import {fetchData} from "../../common/fetch";
// import Localstorage from '../../common/localStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

var {width,height} = Dimensions.get('window');
let maxTime  = 60;
export default class LoginView extends React.Component{
    constructor() {
        super();
        this.state={
            imageHeight:150,
            selectItem:'accountlogin',
            passWord:'',
            loginName:'',
            token:'',
        }
    }

    onChooseItems=(e)=>{
         this.setState({
             selectItem:e
         })
    }
    onfocusCallback=(type)=>{
        this.setState({
            imageHeight:0
        })
    }
    onBlurCallback=()=> {
        this.setState({
            imageHeight:150
        })
    }
    onRegisterCallback=()=>{
        this.props.navigation.navigate('register')
    }
    onLoginCallback=()=>{
        this.props.navigation.navigate('mainPgae')
    }
    renderPage=()=>{
         switch (this.state.selectItem) {
             case 'accountlogin':
                 return <AccoutLoginView onfocusCallback={this.onfocusCallback} onBlurCallback={this.onBlurCallback}
                                         onRegisterCallback={this.onRegisterCallback} onLoginCallback={this.onLoginCallback}></AccoutLoginView>
             case 'verificationcode':
                 return <VerificationcodeView onfocusCallback={this.onfocusCallback} onBlurCallback={this.onBlurCallback}
                                              onRegisterCallback={this.onRegisterCallback} onLoginCallback={this.onLoginCallback}></VerificationcodeView>
             default:
                 return <AccoutLoginView onfocusCallback={this.onfocusCallback} onBlurCallback={this.onBlurCallback}
                                         onRegisterCallback={this.onRegisterCallback} onLoginCallback={this.onLoginCallback}></AccoutLoginView>
         }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image  resizeMode='stretch' source={require('../../assets/images/myinfo/login_bg_img.png')} style={{height:this.state.imageHeight,
                    width:width}}/>
                <View style={{flex:1,backgroundColor: 'white'}}>
                    <View style={{flexDirection:'row',marginTop:20,marginLeft: 40,marginRight:40,marginBottom: 30}}>
                        <TouchableOpacity activeOpacity={0.1} style={{flex:1}} onPress={() => { this.onChooseItems('accountlogin') }}
                        >
                            <Text style={{textAlign: 'center',fontSize:20,color:this.state.selectItem =='accountlogin'?'black':'gray',
                                borderBottomWidth:this.state.selectItem =='accountlogin'?3:0,borderBottomColor:'#13B4BB'}}>????????????</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.1} style={{flex:1,marginLeft: 20}} onPress={() => { this.onChooseItems('verificationcode')}}
                        >
                                <Text style={{textAlign: 'center',fontSize:20,color:this.state.selectItem =='verificationcode'?'black':'gray',
                                    borderBottomWidth:this.state.selectItem =='verificationcode'?3:0,borderBottomColor:'#13B4BB'}}>???????????????</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.renderPage()
                    }
                </View>
            </View>
        );
    }
}
//??????????????????
class AccoutLoginView extends React.Component{
  constructor() {
      super();
      this.state={
          loginName:'',
          passWord:'',
          token:'otfdtvohut0r30unlxl8fwqwrt1na9iz'
      }
  }
    //??????
    onPasswordChanged = (newPassword) => {
        this.setState({
            passWord:newPassword
        })
    };

    //?????????
    onLoginNameChanged = (newLoginName) => {
        this.setState({
            loginName:newLoginName
        })
    };

    //??????
    login = ()=>{
        //????????????
        let data = {
            "username": this.state.loginName,
            "password": this.state.passWord,
        }
        console.log(JSON.stringify(data))
        let param = {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'X-Litemall-Token': this.state.token,
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }
        let url = 'http://lhh.natapp1.cc/api/wx/auth/login';
        const  callback =(responseData)=>{
            this.props.onLoginCallback()

            AsyncStorage.setItem('loginType','mainPgae')
                .then(()=> console.log("update"))
                .catch(e=>console.log("e: ",e))

            AsyncStorage.setItem('token',responseData.data.token)
                .then(()=> console.log("update"))
                .catch(e=>console.log("e: ",e))

        }
        fetchData(url,param,callback);
    }

    componentDidMount(){

    }
  render() {
      return(
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1,marginLeft: width*0.1
          }}>
              <View style={{
                  flexDirection: 'row',
                  alignItems:'center',
                  backgroundColor:'#fff',
                  width:width*0.8,
                  height:40,borderWidth:1,
                  borderColor:'lightgray',
              }}>
                  <Image source={require('../../assets/images/myinfo/login_icon_name.png')} style={{ width: 22, height: 22,marginLeft:5 }}></Image>
                  <TextInput
                      value={this.state.loginName}
                      underlineColorAndroid='transparent'
                      onFocus={this.props.onfocusCallback}//????????????
                      onBlur={this.props.onBlurCallback}//????????????
                      placeholder={' ??????????????????'}
                      onChangeText={this.onLoginNameChanged}  //?????????????????????
                      style={{ ...styles.tgTextInputStyle}}
                  />
              </View>
              <View style={{
                  flexDirection: 'row',
                  alignItems:'center',
                  backgroundColor:'#fff',
                  width:width*0.8,
                  height:40,borderWidth:1,
                  borderColor:'lightgray',
                  marginTop:10
              }}>
                  <Image source={require('../../assets/images/myinfo/login_icon_password.png')} style={{ width: 22, height: 22,marginLeft: 5 }}></Image>
                  <TextInput
                      onChangeText={this.onPasswordChanged}  //?????????????????????
                      onFocus={this.props.onfocusCallback}//????????????
                      onBlur={this.props.onBlurCallback}//????????????
                      style={styles.tgTextInputStyle}
                      autoCapitalize='none'  //??????????????????????????????
                      underlineColorAndroid={'transparent'}  //??????????????????????????????
                      secureTextEntry={true}  //????????????????????????
                      placeholderTextColor={'#ccc'}  //?????????????????????
                      placeholder={'?????????????????????'}  //???????????????
                      value={this.state.passWord}
                  />
              </View>

              <TouchableOpacity activeOpacity={0.5}  onPress={() => this.login()}>
                  <View style={{...styles.tgLoginBtnStyle,backgroundColor:'#14B7B9',}}>
                      <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{"??????"}</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5}  onPress={() => {this.props.onRegisterCallback('dd')}}>
                  <View style={{...styles.tgLoginBtnStyle,marginTop:10,backgroundColor: 'white',borderColor:'lightgray',borderWidth:1}}>
                      <Text style={{color:'#999999',textAlign:'center',justifyContent:'center'}}>{"??????"}</Text>
                  </View>
              </TouchableOpacity>

              <View style={styles.tgSettingStyle}>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{fontSize:13}}>???????????????????????????</Text>
                      <TouchableOpacity activeOpacity={0.5}  onPress={()=> alert("????????????")}>
                          <Text style={{fontSize:13,color:'#FA5700'}}>{"??????????????????"}</Text>
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity activeOpacity={0.5}  onPress={() =>  alert("????????????")}>
                      <Text style={{fontSize:13}}>???????????????</Text>
                  </TouchableOpacity>

              </View>

              <View style={{marginTop:20,alignItems:'center',width:width*0.8}}>
                  <Text style={{fontSize: 15,color:'gray'}}>??????????????????</Text>
                  <TouchableOpacity activeOpacity={0.5}  onPress={() =>  alert("????????????")}>
                      <Image source={require('../../assets/images/myinfo/login_icon_wechat.png')} style={{ width: 30, height: 30,marginTop:10 }}></Image>
                  </TouchableOpacity>
              </View>
          </View>
          </ScrollView>
      )
  }
}


//???????????????
class VerificationcodeView extends React.Component{
    constructor() {
        super();
        this.state={
            mobile:'',
            code:'',
            verificationtext:'???????????????',
            verificationBool:false,
            token:'otfdtvohut0r30unlxl8fwqwrt1na9iz'
        }
    }
    //??????
    onMobileChanged = (mobile) => {
        this.setState({
            mobile:mobile
        })
    };

    //?????????
    onCodeChanged = (code) => {
        this.setState({
            code:code
        })
    };

    //??????
    login = ()=>{
        //????????????
        let data = {
            "mobile": this.state.mobile,
            "code": this.state.code,
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
        let url = 'http://lhh.natapp1.cc/api/wx/auth/mobileLogin';
        const  callback =(responseData)=>{
            // setToken(responseData.data.token)
            // navigation.navigate('Home', { token: responseData.data.token })
            // let Localstorage1 = new Localstorage();
            // Localstorage1.save('token',responseData.data.token)
            this.props.onLoginCallback();
        }
        fetchData(url,param,callback);
        // console.log(JSON.stringify(token))
    }
    //???????????????
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
                        verificationtext: '????????????' + maxTime,
                    })
                }
                else {
                    this.setState({
                        verificationBool:false,
                        verificationtext: '???????????????',
                    })
                }
            }, 1000)
        } else {
            alert("????????????????????????")
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
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,marginLeft: width*0.1
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        backgroundColor:'#fff',
                        width:width*0.8,
                        height:40,borderWidth:1,
                        borderColor:'lightgray',
                    }}>
                        <Image source={require('../../assets/images/myinfo/login_icon_name.png')} style={{ width: 22, height: 22,marginLeft:5 }}></Image>
                        <TextInput
                            underlineColorAndroid='transparent'
                            onFocus={this.props.onfocusCallback}//????????????
                            onBlur={this.props.onBlurCallback}//????????????
                            placeholder={' ?????????????????????'}
                            onChangeText={this.onMobileChanged}  //?????????????????????
                            style={{ ...styles.tgTextInputStyle}}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        backgroundColor:'#fff',
                        width:width*0.8,
                        height:40,borderWidth:1,
                        borderColor:'lightgray',
                        marginTop:10
                    }}>
                        <Image source={require('../../assets/images/myinfo/login_icon_password.png')} style={{ width: 22, height: 22,marginLeft: 5 }}></Image>
                        <TextInput
                            onChangeText={this.onCodeChanged}  //?????????????????????
                            onFocus={this.props.onfocusCallback}//????????????
                            onBlur={this.props.onBlurCallback}//????????????
                            style={{...styles.tgTextInputStyle,width:width*0.8-110}}
                            autoCapitalize='none'  //??????????????????????????????
                            underlineColorAndroid={'transparent'}  //??????????????????????????????
                            secureTextEntry={false}  //????????????????????????
                            placeholderTextColor={'#ccc'}  //?????????????????????
                            placeholder={'??????????????????'}  //???????????????
                        />
                        <TouchableOpacity activeOpacity={0.5}  onPress={() =>{this.sendCode()}}>
                            <Text style={{color:'#00BEAF'}}>{this.state.verificationtext}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.5}  onPress={() => this.login()}>
                        <View style={{...styles.tgLoginBtnStyle,backgroundColor:'#14B7B9',}}>
                            <Text style={{color:'white',textAlign:'center',justifyContent:'center'}}>{"??????"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}  onPress={() => {this.props.onRegisterCallback('dd')}}>
                        <View style={{...styles.tgLoginBtnStyle,marginTop:10,backgroundColor: 'white',borderColor:'lightgray',borderWidth:1}}>
                            <Text style={{color:'#999999',textAlign:'center',justifyContent:'center'}}>{"??????"}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.tgSettingStyle}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:13}}>???????????????????????????</Text>
                            <TouchableOpacity activeOpacity={0.5}  onPress={()=> alert("????????????")}>
                                <Text style={{fontSize:13,color:'#FA5700'}}>{"??????????????????"}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{marginTop:20,alignItems:'center',width:width*0.8}}>
                        <Text style={{fontSize: 15,color:'gray'}}>??????????????????</Text>
                        <TouchableOpacity activeOpacity={0.5}  onPress={() =>  alert("????????????")}>
                            <Image source={require('../../assets/images/myinfo/login_icon_wechat.png')} style={{ width: 30, height: 30,marginTop:10 }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    tgTextInputStyle:{
        width:width*0.8-50,
        padding:0,
        fontSize:15
    },

    tgLoginBtnStyle:{
        height:38,
        width:width*0.8,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },

    tgSettingStyle:{
        flexDirection:'row',
        width:width*0.8,
        marginTop:15,
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
