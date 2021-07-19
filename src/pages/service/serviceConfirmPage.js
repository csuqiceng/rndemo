import React,{useState,useEffect} from 'react';
import {
    Text,
    View,
    Image,
    Button,
    StyleSheet,
    Platform,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native';
import Swiper from 'react-native-swiper';
import NavBar from "../../common/navBar";

var {width} = Dimensions.get('window');

const swiperData =[
    { title: '1', image: require("../../assets/images/home_banner.png") },
    { title: '2', image: require("../../assets/images/home_banner.png") },
    { title: '3', image: require("../../assets/images/home_banner.png") },
]

export default class ServiceConfirmPage extends React.Component
{
    constructor() {
        super();
    }
    // 返回中间按钮
     renderTitleItem=()=> {
        return(
            <Text style={{textAlign:'center',justifyContent:'center'}}>{this.props.route.params.name}</Text>
        );
    }

    // 返回左边按钮
     renderLeftItem=()=> {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.goBack()}}
            >
                <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20 ,marginLeft: 10}}></Image>
            </TouchableOpacity>
        );
    }
    //返回右边按钮
    renderRightItem=()=> {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.props.navigation.goBack()}}
            >
                <Image source={require('../../assets/images/share.png')} style={{ width: 20, height: 20 ,marginRight: 10}}></Image>
            </TouchableOpacity>
        );
    }
     onClick = (data) =>{
        if(data){
            this.props.navigation.navigate('ServiceOrderPage', { name: data })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*自定义导航栏*/}
                <NavBar
                    titleItem = {() => this.renderTitleItem()}
                    leftItem = {() => this.renderLeftItem()}
                    rightItem = {() => this.renderRightItem()}
                />
                <SafeAreaView style={{flex:1}}>
                    <ScrollView  showsVerticalScrollIndicator ={false}>
                        <Swiper
                            style={styles.wrapper}
                            // autoplay
                            onMomentumScrollEnd={(e, state, context) => {}}
                            dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                            activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            paginationStyle={{
                                top: 190
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
                        {/*  服务介绍  */}
                        <View style={{flex:1,backgroundColor:'#F1F1F1'}}>
                            <View style={{height:150,backgroundColor:'white',paddingLeft:15,paddingRight:15,paddingTop:20 }}>
                                <Text style={{color: '#333333',fontSize:20}}>{this.props.route.params.name}</Text>

                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text  numberOfLines={3} style={{fontSize: 15,color:'#ff6600',paddingTop:10}}>¥ </Text>
                                        <Text  numberOfLines={3} style={{fontSize: 25,color:'#ff6600'}}>{118.00}</Text>
                                    </View>
                                    <Text  numberOfLines={3} style={{fontSize: 13,textDecorationLine:'line-through',color:'gray',paddingTop:10,paddingLeft:10}}>¥ {200.00}</Text>
                                </View>

                                <View style={{flexDirection:'row',marginTop: 10}}>
                                    <Text style={{width:100,height:20,borderColor:'#A38705',color: '#A38705',borderRadius:2,borderWidth:1,textAlign: 'center'}}>满200减20</Text>
                                    <Text style={{width:100,height:20,borderColor:'#A38705',color: '#A38705',borderRadius:2,borderWidth:1,textAlign: 'center',marginLeft: 10}}>购买得积分</Text>
                                    <View style={{flex:1}}></View>
                                    <TouchableOpacity onPress={() => { dismissKeyboard() }} style={{flexDirection:'row' ,marginRight:10}}>
                                        <Text style={{ color: '#333333', fontSize: 17,fontWeight:'300',marginRight:10}}>领券</Text>
                                        <Image style={{ width: 10, height: 20 }} source={require('../../assets/images/goto.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{backgroundColor:'white',marginTop: 10,height:60}}>

                            </View>
                            <View style={{backgroundColor:'white',marginTop: 10,backgroundColor:'gray'}}>
                                <Text style={{textAlign: 'center',fontWeight:'300',fontSize:15,marginTop: 20 ,color: '#666666'}}>{'---商品详情---'}</Text>
                                <View style={{height:500}}>
                                {/* todo*/}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={{height:40,flexDirection:'row',justifyContent:'flex-end',margin: 10}}>
                    <Button
                        color="#272C2E"
                        title="加入购物车"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                    <Button
                        color="#00BEAF"
                        title="立即下单"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
            </View>
        );
    }

}



function TopView(props) {
    return(
        <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/favicon.png')} style={{
                    width:12,
                    height:12}}/>
                <Text style={{fontSize:10, color:'black',marginLeft:10}}>{"恒大幸福家园3号楼1单元第11层1102"}</Text>
            </View>

            <View style={styles.topViewStyle}>
                <Image source={require('../../assets/favicon.png')} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{fontSize:14, color:'black', fontWeight:'bold'}}>{"李素芬"}</Text>
                        <Text style={{fontSize:10, color:'black', fontWeight:'normal',marginLeft:10,marginTop:3}}>{"46岁 山东省"}</Text>
                    </View>

                    <Image source={require('../../assets/favicon.png')} style={{width:17, height:17}}/>
                    <Text style={{fontSize:10, color:'black', fontWeight:'normal',marginTop:3}}>{"已服务2753次"}</Text>
                </View>
                <Text  style={styles.button} onPress={()=>{props.onOrderClick('预约')}}>{"联系Ta"}</Text>
            </View>
        </View>

    )
}


function BottomView(props)
{
    let [data,setData] = useState({
        name:"ServiceOrder",
    });
    const onClick =(e)=>{
        setData({
            name:e,
        })
    }

    useEffect(() => {
        return () => {
            console.log("卸载了")
        }
    }, [data]);

    function renderView(data) {
        switch (data.name) {
            case 'ServiceOrder':
                return <ServiceOrderView/>
                break;
            case 'CustomerReviews':
                return <CustomerReviewsView/>
                break;
            case 'CleanersInfo':
                return <CleanersInfoView/>
                break;
            default:
                return <ServiceOrderView/>
                break;
        }
    }


    return(
        <View style={{flex:1,flexDirection:'column'}}>
            <Toolbar onClick={onClick} data={data.name}/>
            {renderView(data)}
        </View>
    );

}

function Toolbar(props) {
    let [data] = useState({
        infos:
            [
                {'title':'服务订单','key':'ServiceOrder'},
                {'title':'保洁员信息','key':'CleanersInfo'},
                {'title':'客户评价','key':'CustomerReviews'},
            ]
    });
    return(
        <View style={{height:40,flexDirection:'row'}}>
            {
                data.infos.map((item,index)=>(
                    <Text style={{
                        flex:1,textAlign:'center',
                        marginTop:10,
                        color:props.data === item.key?'orange':'black',
                    }}
                    onPress={()=>{props.onClick(item.key)}}>{item.title}</Text>
                ))
            }
        </View>
    )
}

function ServiceOrderView(props)
{
    let [data] = useState({
        infos:
        [
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'待派送','button':'改约'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'待评价','button':'去评价'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'已评价','button':'追评'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'已评价','button':'追评'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'已评价','button':'追评'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'已评价','button':'追评'},
            {'title':'优质保洁','time':'2020年10月3日-2020年10月10日','assess':'已评价','button':'追评'},

        ]
    });
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <ScrollView>
                <View>
                    {
                        data.infos.map((item,index)=>(
                            <View style={{flexDirection:'row',borderTopWidth:0.5,borderColor:'gray',paddingTop:20}}>
                                <View style={{height:100}}>
                                    <Text style={{fontSize:13,fontWeight:'bold'}}>{item.title}</Text>
                                    <Text style={{fontSize:10,paddingTop:10}}>{`预约上门时间：${item.time}`}</Text>
                                    <Text style={{fontSize:10}}>{`订单状态：${item.assess}`}</Text>
                                </View>
                                <Text  style={{
                                    color:'gray',
                                    width:50,
                                    height:20,
                                    fontSize:13,
                                    marginLeft:60,
                                    marginTop:30,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    borderRadius: 3,
                                    paddingTop:2,
                                    textAlign:'center'}} onPress={()=>{alert("联系Ta")}}>{item.button}</Text>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
function CleanersInfoView(props)
{
    return(
        <View style={{borderTopWidth:0.5,borderColor:'gray'}}>
            <Text>保洁员信息</Text>
        </View>
    )
}
function CustomerReviewsView(props)
{
    return(
        <View style={{borderTopWidth:0.5,borderColor:'gray'}}>
            <Text>客户评价</Text>
        </View>
    )
}
const styles = StyleSheet.create({
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
        height:200,
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
