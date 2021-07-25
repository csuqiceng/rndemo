/**
 * Created by zhaopengsong on 2016/12/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

export  default  function HeaderView() {
    return (
        <View style={styles.container}>
            {/*上部分*/}
            {renderTopView()}
            {/*下部分*/}
            {renderBottomView()}
        </View>
    );
}
function renderTopView() {
    return(
        <View style={styles.topViewStyle}>
            <Image source={require('../../assets/images/myinfo/my_icon_head.png')} style={styles.leftIconStyle}/>
            <View style={styles.centerViewStyle}>
                <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Admin</Text>
                {/*<Image source={require('../../assets/favicon.png')} style={{width:17, height:17}}/>*/}
            </View>
            {/*--右边的箭头--*/}
            <TouchableOpacity activeOpacity={0.5}  onPress={() =>{alert("系统设置")}}>
                <Image  source={require('../../assets/images/myinfo/my_icon_set.png')} style={{width:30, height:30, marginRight:20}}/>
            </TouchableOpacity>
        </View>
    )
}
function renderBottomView() {
    return(
        <View style={styles.bottomViewStyle}>
            {renderBottomItem()}
        </View>
    )
}
function renderBottomItem() {
    // 数组
    var itemArr = [];
    // 数据数组
    var data = [{'number':'200.00', 'title':'我的余额'},{'number':'321', 'title':'积分'},{'number':'12', 'title':'优惠券'}];
    // 遍历创建组件装入数组
    for(var i=0; i<data.length; i++){
        // 取出单独的数据
        var item = data[i];

        itemArr.push(
            <TouchableOpacity key={i}>
                <View style={styles.bottomInnerViewStyle}>
                    <Text style={{color:'white',fontSize:20}}>{item.number}</Text>
                    <Text style={{color:'white',fontSize:15}}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    // 返回数组
    return itemArr;
}


const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor:'#31C297'
    },

    centerViewStyle:{
        flexDirection:'row',
        width:width * 0.72
    },

    topViewStyle:{
        flexDirection:'row',
        marginTop:50,
        // 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        marginLeft:20,
        borderColor:'rgba(0,0,0,0.2)'
    },

    bottomViewStyle:{
        flexDirection:'row',
        // 绝对定位
        position:'absolute',
        bottom:20
    },

    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:40,
        // backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        // borderRightWidth:1,
        // borderRightColor:'white'
    }
});
