import React, {useState} from "react";
import Swiper from 'react-native-swiper';
import {Text, View, StyleSheet, Image ,Dimensions} from "react-native";
const {width} = Dimensions.get('window');

export default function ServicePage(){
    return(
        <View style={styles.container}>

            <Swiper
                    style={styles.wrapper}
                    autoplay
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                    activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        top: -290, left: null, right: 10
                    }}

                    loop>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../assets/favicon.png')} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../assets/favicon.png')} />
                </View>
                <View style={styles.slide} >
                    <Text numberOfLines={1}>Why Stone split from Garfield</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../assets/favicon.png')} />
                </View>
                <View style={styles.slide}>
                    <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../assets/favicon.png')} />
                </View>
            </Swiper>
            <View style={{height:30,backgroundColor:'white',flexDirection:'row',marginBottom:1,shadowColor:'gray',shadowOffset:{width:0,height:0},shadowOpacity:1,shadowRadius:1.5}}>
                 <Text style={{height:13,marginTop:5,width:30,borderRadius:5,backgroundColor:'red',color:'white',fontSize:11,marginLeft:20}}>优惠</Text>
                 <Text style={{height:30,borderRadius:5,fontSize:11,marginTop:5,marginLeft:20}}>首次购卡满300送200元券</Text>
                 <Text style={{height:30,width:80,borderRadius:5,fontSize:11,color:'gray',marginTop:5,marginLeft:30}}>立即购买 ></Text>
            </View>
            <View style={{flex:1,backgroundColor:'white'}}>
                <Card title={"会员专享"} firstTitle={"月度保洁"} firstMsg={"专享周期保洁服务"}
                      secondTitle={"卧室保洁"} secondMsg={"卧室保洁服务"}></Card>
            </View>
            <View style={{flex:1,backgroundColor:'white'}}>
                <Card title={"保洁服务"} firstTitle={"日常保洁"} firstMsg={"日常保洁服务"}
                      secondTitle={"深度保洁"} secondMsg={"专业深度保洁服务"}></Card>
            </View>
            <View style={{flex:1,backgroundColor:'white'}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginLeft:20,
            marginRight:20,
        },

        wrapper: {
            backgroundColor:'orange',
            // height:200
        },

        slide: {
            height:100,
            justifyContent: 'center',
            backgroundColor: 'transparent'
        },

        slide1: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB'
        },

        text: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold'
        },

        image: {
            width:width,
            flex: 1
        }
    }
)

/*
* 卡片
* */
function Card(props)
{
    return(
        <View style={{flex:1,flexDirection:'column'}}>
            <Text style={{flex:1,marginTop:30,fontSize:15,marginLeft:20,fontWeight:'bold'}}>{props.title}</Text>
            <View style={{flex:2,flexDirection:'row'}}>
                <View style={{flex:1,backgroundColor:'white',margin:15,marginTop:0,flexDirection:'column',shadowColor:'gray',
                    shadowOffset:{width:0,height:0},shadowOpacity:1,shadowRadius:1.5}}>
                     <Text style={{margin:10,marginBottom:5,fontSize:12,fontWeight:'bold'}}>{props.firstTitle}</Text>
                     <Text style={{margin:10,marginBottom:5,fontSize:10,color:'gray'}}>{props.firstMsg}</Text>
                </View>
                <View style={{flex:1,backgroundColor:'white',margin:15,marginTop:0,flexDirection:'column',shadowColor:'gray',
                    shadowOffset:{width:0,height:0},shadowOpacity:1,shadowRadius:1.5}}>
                    <Text style={{margin:10,marginBottom:5,fontSize:12,fontWeight:'bold'}}>{props.secondTitle}</Text>
                    <Text style={{margin:10,marginBottom:5,fontSize:10,color:'gray'}}>{props.secondMsg}</Text>
                </View>
            </View>
        </View>
    )
}
