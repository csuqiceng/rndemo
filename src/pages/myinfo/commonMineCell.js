/**
 * Created by zhaopengsong on 2016/12/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
function rightSubView(props) {
    return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
            {renderRightContent(props)}
            {/*箭头*/}
            <Image source={require('../../assets/images/myinfo/icon_back.png')} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>
        </View>
    )
}
function renderRightContent(props) {
    if(props.rightIconName&&props.rightIconName.length == 0){ // 不返回图片
        return(
            <Text style={{color:'gray'}}>{props.rightTitle}</Text>
        )
    }else{
        return(
            <Image source={require('../../assets/favicon.png')}  style={{width:24, height:13}}/>
        )
    }
}
export  default function CommonMineCell(props) {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                {/*--左边--*/}
                <View style={styles.leftViewStyle}>
                    <Image source={require('../../assets/favicon.png')} style={styles.leftImgStyle}/>
                    <Text style={styles.leftTitleStyle}>{props.leftTitle}</Text>
                </View>
                {/*--右边--*/}
                <View style={styles.rightViewStyle}>
                    {rightSubView(props)}
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS == 'ios' ? 40 : 36,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },

    rightViewStyle:{

    },

    leftImgStyle:{ // 左边的图片
        width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
    },

    leftTitleStyle:{
        fontSize:16
    }
});
