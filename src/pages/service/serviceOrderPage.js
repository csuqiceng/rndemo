import React,{useState,useEffect} from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import NavBar from "../../common/navBar";

var {width} = Dimensions.get('window');
export default class ServiceOrderPage extends React.Component{
    constructor() {
        super();
    }
    // 返回中间按钮
    renderTitleItem=()=> {
        return(
            <Text style={{textAlign:'center',justifyContent:'center',marginLeft:-50}}>{this.props.route.params.name}</Text>
        );
    }

    // 返回左边按钮
    renderLeftItem=()=> {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.goBack()}}
            >
                <Text style={{marginLeft:10}}>返回</Text>
            </TouchableOpacity>
        );
    }
    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    titleItem = {() => this.renderTitleItem()}
                    leftItem = {() => this.renderLeftItem()}
                />
                <View style={{height:100,backgroundColor:'white',marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/favicon.png')} style={{
                        width:20,
                        height:20,
                        marginTop:40,
                        marginLeft:20
                    }}/>
                    <View style={{marginTop:25}}>
                        <Text style={{fontSize:10, color:'black',marginLeft:10}}>{"服务地址"}</Text>
                        <Text style={{fontSize:13, color:'black',marginLeft:10,marginTop:5}}>{"1770000244566"}</Text>
                        <Text style={{fontSize:13, color:'black',marginLeft:10,marginTop:5}}>{"恒大幸福家园3号楼1单元第11层1102"}</Text>
                    </View>
                </View>

                <View style={{height:100,backgroundColor:'white',marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/favicon.png')} style={{
                        width:20,
                        height:20,
                        marginTop:40,
                        marginLeft:20
                    }}/>
                    <View style={{marginTop:25}}>
                        <Text style={{fontSize:10, color:'black',marginLeft:10}}>{"服务时间"}</Text>
                        <Text style={{fontSize:13, color:'black',marginLeft:10,marginTop:5}}>{"2019-11-23 08:00-09:00"}</Text>
                        <Text style={{fontSize:13, color:'orange',marginLeft:10,marginTop:5}}>{"与月度双次公区保洁一起上门"}</Text>
                    </View>
                </View>

                <View style={{height:50,backgroundColor:'white',marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/favicon.png')} style={{
                        width:20,
                        height:20,
                        marginTop:15,
                        marginLeft:20
                    }}/>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:13, color:'gray',marginLeft:10}}>{"使用优惠券"}</Text>
                    </View>
                </View>

                <View style={{height:100,backgroundColor:'white',marginTop:20,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Image source={require('../../assets/favicon.png')} style={{
                        width:20,
                        height:20,
                        marginTop:30,
                        marginLeft:20
                    }}/>
                    <View style={{marginTop:25}}>
                        <Text style={{fontSize:10, color:'black',marginLeft:10}}>{"特殊需求"}</Text>
                        <Text style={{fontSize:13, color:'black',marginLeft:10,marginTop:5}}>{"家有宠物"}</Text>
                    </View>
                </View>
                <View style={{flex:1}}/>
                <View style={{height:40,flexDirection:'row',justifyContent: 'space-between',backgroundColor:'white',marginBottom:10}}>
                    <Text style={{fontSize:13, color:'red',marginLeft:10,textAlign:'center',marginTop:10}}>{"$ 45"}</Text>
                    <View style={{
                        height: 25,
                        backgroundColor: 'orange',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'orange',
                        marginRight:20,
                        marginTop:5,
                        width:100,
                    }}>
                        <Text style={{fontSize:13,marginTop:5,color:'white',textAlign:'center'}} onPress={()=>{alert("预约完成")}}>{"立即预约"}</Text>
                    </View>
                </View>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button:{
        color:'orange',
        width:80,
        height:25,
        paddingTop:2,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 3,
        textAlign:'center',
    },
    centerViewStyle:{
        height:50,
        marginLeft:10,
        flex:1,
        flexDirection:'column',
        width:width * 0.72
    },

    topViewStyle:{
        flexDirection:'row',
        // marginTop:280,
        // 设置侧轴的对齐方式
        alignItems:'center',
        marginTop:20,
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    leftIconStyle:{
        width:50,
        height:50,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },

    bottomViewStyle:{
        flexDirection:'row',
        // 绝对定位
        position:'absolute',
        bottom:0
    },

    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    }
});
