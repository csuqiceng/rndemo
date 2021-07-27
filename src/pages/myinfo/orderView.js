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
import NavBar from '../../common/navBar';
const {width} = Dimensions.get('window');
const OrderViewData=
    [{
        "title": '全部订单',
        "id": 'allorder',
    }, {
        "title": '待付款',
        "id": 'pay',
    },{
        "title": '待发货',
        "id": 'deliver',
    }, {
        "title": '待收货',
        "id": 'receive',
    }, {
        "title": '已完成',
        "id": 'accomplish',
    }]

export default class MyOrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            itemType:props.route.params.id
        }
    }
    // 返回中间按钮
    renderTitleItem = () => {
        return (
            <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 20,marginLeft: -20 }}>我的订单</Text>
        );
    }

    // 返回左边按钮
    renderLeftItem = () => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.goBack() }}
            >
                <Image source={require('../../assets/images/back.png')} style={{ width: 20, height: 20, marginLeft: 10 }}></Image>
            </TouchableOpacity>
        );
    }
    onChangeItemType=(e)=>{
        this.setState({
            itemType:e
        })
    }
    renderMianView=()=>{
        switch (this.state.itemType) {
            case 'allorder':
                return <AllorderView></AllorderView>
            case 'pay':
                return <PayView></PayView>
            case 'deliver':
                return <DeliverView></DeliverView>
            case 'receive':
                return <ReceiveView></ReceiveView>
            case 'accomplish':
                return <AccomplishView></AccomplishView>
            default:
                return <AllorderView></AllorderView>
        }
    }
    render() {
        const {id} = this.props.route.params;
        console.log(this.state.itemType)

        return (
            <View style={styles.container}>
                <NavBar
                    titleItem={() => this.renderTitleItem()}
                    leftItem={() => this.renderLeftItem()}
                />
                    <View style={{flexDirection:'row',flex: 1}}>
                        {
                            OrderViewData.map((item, i) => {
                                return (
                                    <TouchableOpacity key={item.id} activeOpacity={0.5} onPress={()=>{this.onChangeItemType(item.id)}}>
                                        <Text style={{
                                            color: (item.id == this.state.itemType)?'black':'gray',
                                            textAlignVertical: 'center',
                                            fontSize:15,
                                            alignItems:'center',
                                            height:40,
                                            width:width/5,
                                            textAlign:'center' }}>{item.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                </View>
                {
                    this.renderMianView()
                }
            </View>
        );
    }
}


class AllorderView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <View style={{flex: 1, alignItems:'center'}}>
                <Text>全部订单</Text>
            </View>
        )
    }
}
class PayView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <View style={{flex: 1, alignItems:'center'}}>
                <Text>待付款</Text>
            </View>
        )
    }
}
class DeliverView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <View style={{flex: 1, alignItems:'center'}}>
                <Text>待发货</Text>
            </View>
        )
    }
}
class ReceiveView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <View style={{flex: 1, alignItems:'center'}}>
                <Text>待收货</Text>
            </View>
        )
    }
}
class AccomplishView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <View style={{flex: 1, alignItems:'center'}}>
                <Text>已完成</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // 改变主轴方向
        // flexDirection:'row',
        //改变水平对齐方式
        // justifyContent:'space-around',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        paddingBottom: 20
    },
    ImageStyle:{
        width:40,
        height:40,
        marginBottom:5,
    },
    subViewStyle:{
        backgroundColor:'white',
        // 设置垂直居中
        alignItems:'center'
    },


});
