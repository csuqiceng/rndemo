
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, Dimensions
} from 'react-native';
import React,{useState,useEffect} from 'react';
import ListView from 'deprecated-react-native-listview';
import fetchData from "../../../common/fetch";
const {width} = Dimensions.get('window');
class ClassifyMall extends React.Component {
     constructor(props) {
         super(props);
         // 初始状态
         this.state = {
             dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}),
         };
         // 绑定
         this.fetchData = this.fetchData.bind(this);
     }

     // 网络请求
     fetchData() {
         fetch('http://guangdiu.com/api/gethots.php')
             .then((response) => response.json())
             .then((responseData) => {
                 this.setState({
                     dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                 });
             })
             .done()
     }
     // 返回每一行cell的样式
     renderRow(rowData) {
         return(
             <CommunalHotCell
                 image={rowData.image}
                 title={rowData.title}
             />
         );
     }

     componentDidMount() {
         this.fetchData();
     }
    render() {
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    showsHorizontalScrollIndicator={false}
                    style={styles.listViewStyle}
                />
            </View>
        )
    }
}

export default ClassifyMall





class CommunalHotCell extends React.Component {


    render() {
        return (
            <View style={styles2.container}>
                {/* 左边图片 */}
                <Image source={{uri:this.props.image}} style={styles2.imageStyle} />
                {/* 中间的文中 */}
                <View style={{marginRight:15}}>
                    <Text numberOfLines={3} style={styles2.titleStyle}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        height:100,
        width:width,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        // marginLeft:15,

        paddingLeft:20,

    },

    imageStyle: {
        width:70,
        height:70,
    },
    titleStyle: {
        width:width * 0.65,
    },
    arrowStyle: {
        width:10,
        height:10,
        marginRight:30
    }
});


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },

    navbarTitleItemStyle: {
        fontSize:17,
        color:'black',
        marginLeft:50
    },
    navbarRightItemStyle: {
        fontSize:17,
        color:'rgba(123,178,114,1.0)',
        marginRight:15
    },

    listViewStyle: {
        width:width,
    }
});
