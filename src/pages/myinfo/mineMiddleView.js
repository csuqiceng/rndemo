/**
 * Created by zhaopengsong on 2016/12/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
export  default function MineMiddleView() {
    return (
        <View style={styles.container}>
            {renderInnerView('order1','待付款')}
            {renderInnerView('order2','待发货')}
            {renderInnerView('order3','待收货')}
            {renderInnerView('order4','已完成')}
        </View>
    );
}
function renderInnerView(imageName,title) {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了')}}>
            <View style={styles.subViewStyle}>
                <Image source={require('../../assets/favicon.png')} style={styles.ImageStyle}/>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // 改变主轴方向
        flexDirection:'row',
        //改变水平对齐方式
        justifyContent:'space-around'
    },
    ImageStyle:{
        width:30,
        height:30,
        marginBottom:5,
    },
    subViewStyle:{
       backgroundColor:'white',
        // 设置垂直居中
        alignItems:'center'
    },


});
