
import * as React from 'react';
import { Text, View,Image,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {mainServerData,hotServerData,preferentialData} from '../../../LocalData/homePageData'

export default class ClassifyService extends React.Component {
    constructor() {
        super();
        this.state = {
            LeftToolbar:'家政保洁'
        }
    }
    onLeftToolbarClick=(e)=>{
        this.setState({
            LeftToolbar:e
        })
    }
    renderRightView=()=>{
        switch (this.state.LeftToolbar) {
            case '家政保洁':
                return <Text>家政保洁</Text>
            case '清洁服务':
                return <Text>清洁服务</Text>
            case '甲醛检治':
                return <Text>甲醛检治</Text>
            case '消杀处理':
                return <Text>消杀处理</Text>
            case '家电安装':
                return <Text>家电安装</Text>
            default:
                return <Text>家政保洁</Text>
        }
    }
    render() {
       return(
           <View style={{flexDirection:'row'}}>
               <View style={{flex:1,backgroundColor:'gray'}}>
                       {
                           mainServerData.map((item,i)=>{
                               return(
                               <TouchableOpacity  key={item.title} activeOpacity={0.5} onPress={()=>{this.onLeftToolbarClick(item.title)}}
                               >
                                   <View style={{height:100,backgroundColor:(this.state.LeftToolbar ===item.title)?"red":"#F9F9F7"}}>
                                       <Text style={{textAlign:'center',textAlignVertical: 'center',flex:1}}>{item.title}</Text>
                                   </View>
                               </TouchableOpacity>
                               )
                           })
                       }
               </View>
               <View style={{flex:2}}>
                   {
                       this.renderRightView()
                   }
               </View>
           </View>
       )
    }
}
