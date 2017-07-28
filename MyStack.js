//Created by Joe Metha

import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button, ListView, ScrollView,FlatList,Alert} from 'react-native'
import styles from './myCSS.js'


class MyStack extends Component{
    constructor(props) {
        super(props);
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { 
            text: 'Placeholder' ,
            arrayList:['Java','Java Script','C++','React Native'],
           
        };
    }

    _handleName(event){
    console.log('its work');
    }
    _onPush(){
        this.setState({
            arrayList:[...this.state.arrayList,this.state.text],
        })
    }
    _onPop(){
        Alert.alert(
  'Confirmation',
  'Are you sure whether you wan to pop the last index',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => this._Pop()},
  ],
  { cancelable: false }
)

    }
    _Pop(){
        var index = this.state.arrayList.indexOf(this.state.arrayList)
        this.setState({
            arrayList:this.state.arrayList.slice(0,index)
        })
    }
    
    render(){
        return(
            
                <View style={styles.containerCol}>
                    <View style={styles._head} >
                        <View style={{flex:1}}>
                            <Text style={{fontWeight: 'bold',fontSize:24, textAlign:'center', paddingTop:4, paddingBottom:4, color:'white'}}>MyStack</Text>
                        </View>
                    </View>
                    <View style={styles._console}>
                        <View style={styles.containerRow}>
                            <View style={styles._console1}>
                                <View style={{flex:1}}>
                                          <TextInput
                                            style={{height: 40, borderColor: 'gray'}}
                                            onChangeText={(text) => this.setState({text})}
                                            value={this.state.text}
                                            />
                                </View>
                            </View>
                            <View style={styles._console2}>
                                <View style={{flex:1}}>
                                    <Button
                                     onPress={()=>this._onPush()}
                                      title="PUSH"
                                      color="#841584"
                                      //accessibilityLabel="Learn more about this purple button"
                                    />
                                </View>
                            </View>
                            <View style={styles._console3}>
                                <View style={{flex:1}}>
                                    <Button
                                     onPress={()=>this._onPop()}
                                      title="POP"
                                      //color="#841584"
                                      //accessibilityLabel="Learn more about this purple button"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles._body}>
                        <View style={{flex:1}}>
                            <FlatList
                            data={this.state.arrayList}
                            renderItem={({item}) => <Text style={styles.xtable}>{item}</Text>}
                            />
                        </View>
                    </View>
                </View>
            
            
            
        )
    }
}

export default MyStack