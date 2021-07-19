import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React, {useState} from "react";
import Swiper from 'react-native-swiper';
import {Text, View,TextInput, StyleSheet, Image ,Dimensions,TouchableOpacity,SafeAreaView ,ScrollView ,StatusBar,FlatList,TouchableHighlight} from "react-native";
import ServiceConfirmPage from "./serviceConfirmPage";
import ServiceOrderPage from "./serviceOrderPage";
import {mainServerData,hotServerData,preferentialData} from '../../LocalData/homePageData'

const {width} = Dimensions.get('window');

const swiperData =[
    { title: '1', image: require("../../assets/images/home_banner.png") },
    { title: '2', image: require("../../assets/images/home_banner.png") },
    { title: '3', image: require("../../assets/images/home_banner.png") },
]
class ServiceMainPage extends React.Component{
    constructor() {
        super();
        this.state={
            searchInput:'',
            dataSource: '',
        }
    }

    onCardClick = (data) =>{
        if(data){
            this.props.navigation.navigate('ServiceConfirmPage', { name: data })
        }
    }
    onChangeNumber= (value)=>{
        this.setState({
            searchInput:value
        })
    }
    onChangeText=(text)=> {
        if (text) {
            this.setState({ inputValue: text })  //实时变化值
            clearTimeout(this.settimeId);       //如搜索的内容变化在1秒之中，可以清除变化前的fetch请求，继而减少fetch请求。但不能中断fetch请求
            this.settimeId = setTimeout(() => {
                var jsonData = {
                    "sessionId": global.appInfo.sessionId,
                    "merchName": text,
                };
                console.log(jsonData)
                // fetchData('nsposm/B1404/queryMerchList', jsonData, this.SearchCallback);
            }, 1000);   //让每次要进行fetch请求时先延迟1秒在进行
            console.log("sheng chen id:" + this.settimeId);

        } else {
            this.setState({inputValue: '' })
        }

    }

    componentDidMount() {

    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{height:40,
                    flexDirection: 'column',
                    justifyContent: 'center',}}>
                    <Text
                        style={{
                            textAlign:'center',
                            fontSize: 18,fontWeight:'700',
                            backgroundColor:'white',
                            includeFontPadding: false,
                            textAlignVertical: 'center',
                            flex:1
                        }}
                    >首页</Text>
                </View>
                    <View style={{ height: 40, backgroundColor: "#fff", borderRadius: 0, paddingLeft: 25, flexDirection: 'row', alignItems: 'center',margin:5 }} >
                        <Image source={require('../../assets/images/home_icon_search.png')} style={{ width: 15, height: 15 }}></Image>
                        <TextInput underlineColorAndroid="transparent" placeholder="请输入关键词" style={{ marginLeft: 10, width: 150}}
                                   onChangeText={this.onChangeText}
                                   value={this.state.inputValue}
                                   ref="keyWordInput"
                                   onSubmitEditing={() => { this.refs.keyWordInput.blur() }}>
                        </TextInput>
                        <TouchableOpacity onPress={() => { dismissKeyboard() }} style={{flex:1}}>
                            <Text style={{ color: '#0391ff', fontSize: 14,textAlign:'right' ,marginRight:20 }}>搜索</Text>
                        </TouchableOpacity>
                    </View>
                <SafeAreaView style={{flex:1}}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator ={false}>

                        {/*Swiper*/}
                        <Swiper
                            style={styles.wrapper}
                            autoplay
                            onMomentumScrollEnd={(e, state, context) => {}}
                            dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                            activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            paginationStyle={{
                                top: -290, left: null, right: 10
                            }}
                            loop>
                            {
                                swiperData.map((item,i)=>{
                                    return (
                                        <View style={styles.slide} key={i}>
                                            {/*<Text numberOfLines={1}>Learn from Kim K to land that job</Text>*/}
                                            <Image resizeMode='stretch' style={styles.image} source={item.image} />
                                        </View>
                                    )
                                })
                            }
                        </Swiper>

                        {/*主要服务*/}

                        <View style={{flex:1,flexDirection:'row',marginLeft:15,marginTop:15}}>
                            {
                                mainServerData.map((item,i)=>{
                                    return <BottomMainCard text={item.title} key={item.title} onCardClick={this.onCardClick} image={item.image}></BottomMainCard>
                                })
                            }
                        </View>

                        {/*热门服务*/}
                        <View>
                            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center',marginLeft:10}} >
                                <Image source={require('../../assets/images/home_icon_line.png')} style={{ width: 5, height: 30 }}></Image>
                                <Text style={{  fontSize: 17,marginLeft:10}}>热门服务</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false}  style={{margin: 15}}>
                                {
                                    hotServerData.map((item,i)=>{
                                        return(
                                            <View key={item.title} style={{paddingRight:10}}>
                                                <BottomHotCard text={item.title} key={item.title} subtitle={item.subtitle} onCardClick={this.onCardClick} image={item.image}></BottomHotCard>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                        {/*特惠优选*/}
                        <View>
                            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center',marginLeft:10,marginRight: 10,marginBottom:10}} >
                                <Image source={require('../../assets/images/home_icon_line.png')} style={{ width: 5, height: 30 }}></Image>
                                <Text style={{  fontSize: 17,marginLeft:10}}>特惠优选</Text>
                            </View>
                            {
                                preferentialData.map((item,i)=>{
                                    return(
                                        <TouchableHighlight
                                            key={item.name}
                                            activeOpacity={0.6}
                                            underlayColor="#DDDDDD"
                                            onPress={() => alert('Pressed!')}>
                                        <View style={{ backgroundColor: 'white' ,flexDirection:'row' ,marginBottom:10}} key={item.name}>
                                            <Image  source={{uri:item.picUrl}} style={{height:110,width:150,borderWidth: 1,borderColor:'white',borderRadius:4}} />
                                            <View style={{margin: 10}}>
                                                <Text  numberOfLines={3} style={{width:width * 0.5,fontSize: 13,height:30}}>{item.name}</Text>
                                                <View style={{flexDirection:'row',marginTop:40}}>
                                                    <Text  numberOfLines={3} style={{fontSize: 15,color:'#ff6600'}}>¥ {item.retailPrice}</Text>
                                                    <Text  numberOfLines={3} style={{fontSize: 13,textDecorationLine:'line-through',color:'gray',paddingTop:2,paddingLeft:10}}>¥ {item.counterPrice}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }

                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>

        )
    }

}


/*
* 卡片
* */
function MidCard(props)
{

    return(
        <View style={{flex:1,flexDirection:'column'}}>
            <Text style={{flex:1,marginTop:30,fontSize:15,marginLeft:20,fontWeight:'bold'}}>{props.title}</Text>
            <View style={{flex:2,flexDirection:'row'}}>
                <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={()=> props.onCardClick(props.firstTitle)}>
                    <View style={{flex:1,backgroundColor:'white',margin:15,marginTop:0,flexDirection:'column',shadowColor:'gray',
                        shadowOffset:{width:0,height:0},shadowOpacity:1,shadowRadius:1.5}}>
                        <Text style={{margin:10,marginBottom:5,fontSize:12,fontWeight:'bold'}}>{props.firstTitle}</Text>
                        <Text style={{margin:10,marginBottom:5,fontSize:10,color:'gray'}}>{props.firstMsg}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={()=> props.onCardClick(props.secondTitle)}>
                    <View style={{flex:1,backgroundColor:'white',margin:15,marginTop:0,flexDirection:'column',shadowColor:'gray',
                        shadowOffset:{width:0,height:0},shadowOpacity:1,shadowRadius:1.5}}>
                        <Text style={{margin:10,marginBottom:5,fontSize:12,fontWeight:'bold'}}>{props.secondTitle}</Text>
                        <Text style={{margin:10,marginBottom:5,fontSize:10,color:'gray'}}>{props.secondMsg}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function BottomMainCard(props)
{
    return(
        <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={()=>{props.onCardClick(props.text)}}>
            <View style={{width:100,height:80,flexDirection:'column'}}>
                <Image source={props.image}
                       style={{
                           width:50,
                           height:50,
                           }}/>
                <Text style={{width:100}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}


function BottomHotCard(props)
{
    return(
        <TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={()=>{props.onCardClick(props.text)}}>
            <View style={{width:120,height:130,flexDirection:'column'}}>
                <Image source={props.image}
                       style={{
                           width:120,
                           height:88,
                       }}/>
                <Text style={{width:120,textAlign:'center',fontSize: 15}}>{props.text}</Text>
                <Text style={{width:120,textAlign:'center',fontSize: 12,color:'gray'}}>{props.subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}


const Stack = createStackNavigator();

export default function ServicePage({ navigation, route }) {
    return (
        <Stack.Navigator
            initialRouteName="ServicePage"
            headerMode="screen"
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ServicePage" options={{
            }} component={ServiceMainPage} />
            <Stack.Screen name="ServiceOrderPage" options={({ route }) => ({ title: route.params.name })} component={ServiceOrderPage} />
            <Stack.Screen name="ServiceConfirmPage" options={({ route }) => ({ title: route.params.name })} component={ServiceConfirmPage} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            backgroundColor:'white'
        },
        scrollView: {
            // backgroundColor: 'pink',
            // marginHorizontal: 20,
        },
        wrapper: {
            height:150,
            backgroundColor:'#22DDDD',
        },

        slide: {
            height:200,
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
        ,
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
        },
        arrowStyle: {
            width:10,
            height:10,
            marginRight:30
        }
    }
)
