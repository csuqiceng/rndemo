
import * as React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions
} from 'react-native';
 
var {width,height} = Dimensions.get('window');


export default function LoginView({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/favicon.png')} style={styles.tgIconStyle}/>
            <TextInput placeholder={'  请输入用户名'}  style={{...styles.tgTextInputStyle,marginTop:20}} />
            <TextInput  textContentType='password' placeholder={'  请输入密码'}  password={true}  style={styles.tgTextInputStyle} />
            <View style={styles.tgLoginBtnStyle}>
                <Button title="登录" color='white'  onPress={() => navigation.navigate('mainPage')} />
            </View>
            <View style={styles.tgSettingStyle}>
                <Text style={{fontSize:15}} onPress={()=> alert("发送错误")}>无法登录</Text>
                <Text style={{fontSize:15}} onPress={() => navigation.navigate('register')}>新用户</Text>
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