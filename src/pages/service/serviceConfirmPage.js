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
export default function  ServiceConfirmPage({ route, navigation })
{
    // 返回中间按钮
    const renderTitleItem=()=> {
        return(
            <Text style={{textAlign:'center',justifyContent:'center',marginLeft:-50}}>{route.params.name}</Text>
        );
    }

    // 返回右边按钮
    const renderLeftItem=()=> {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.goBack()}}
            >
                <Text style={{marginLeft:10}}>返回</Text>
            </TouchableOpacity>
        );
    }
    const onClick = (data) =>{
        if(data){
            navigation.navigate('ServiceOrderPage', { name: data })
        }
    }
    return (
        <View style={styles.container}>
            <NavBar
                titleItem = {() => renderTitleItem()}
                leftItem = {() => renderLeftItem()}
            />
            <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10}}>
                <TopView onOrderClick={onClick}/>
                <Text style={{marginTop:10,fontWeight:'bold',paddingTop:7,paddingLeft:10,fontSize:12,backgroundColor:'rgba(255,218,185,0.5)',height:30,color:'orange'}} onPress={()=>{onClick('预约')}}>{"预约TA为我打扫卧室   >"}</Text>
                <BottomView />
            </View>
        </View>
    );
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
                    <Text
                        key={index}
                        style={{
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
        backgroundColor:'white',
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