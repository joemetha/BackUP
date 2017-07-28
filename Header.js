import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button, ListView, ScrollView} from 'react-native'

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#919191'
    },
    textStyle:{
        fontSize:40,
        color:'#FFF',
        textAlign:'center'
    },
    xtable:{
        borderWidth:1,
        textAlign:'center',
        padding:10
    }

})


class Header extends Component{

   ds = new ListView.DataSource({rowHasChanged:(r1,r2) =>r1 !==r2});

    state={
        name:'Forecasting',
        message:'nothing',
        ids: '6f6e1e13be298aef85facfa6f251c0f3',
        icon:'https://lh3.googleusercontent.com/ajMMLTx53XZXTM15J0F9nZ9Rdt_eBLjQFkNbvU3vnXGPlmrwgrNRtXoZ2rPEHsWZcPNk=w300',
        dataSource: this.ds.cloneWithRows(['Book','Pencil','Ball'])
};

_renderRow(rowData){
    return(
        <Text style={styles.xtable}>{rowData}</Text>
    )
}

_onPress(event){
    alert('Kuy Ball');
}
_handleName(event){
    console.log('its work');
    var description='';
    var name= event.nativeEvent.text;
    var ids= '6f6e1e13be298aef85facfa6f251c0f3';
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid='+ids)
        .then((response) => response.json())
        .then((responseJSON)=>{
            console.log(responseJSON);
            this.setState({
                name: this.state.name,
                message: responseJSON.weather[0].main,
                icon: 'http://openweathermap.org/img/w/'+responseJSON.weather[0].icon+'.png',
                description: responseJSON.weather[0].description
                
            });
        })
        .catch((error)=>{
            console.warn(error);
        });
}
    
    render(){
        return(
            <ScrollView>
            <View style={styles.wrapper}>
                <Text style={styles.textStyle}>Wheather {this.state.name}</Text>
                <TextInput onSubmitEditing={(event) => this._handleName(event)}/>
                <Image source ={{uri:this.state.icon}} resizeMode='cover' style={{width:200, height: 200, marginLeft:80}}></Image>
                <Text style={{textAlign:'center'}}>Wheather NOW! ={this.state.message}</Text>
                <Text style={{textAlign:'center', marginBottom:50}}>Description ={this.state.description}</Text>
                <View>
                    <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
                </View>
            <Button
                onPress={this._onPress}
                title="Learn More"
                //color="#841584"
                //accessibilityLabel="Learn more about this purple button"
            />
           
            </View>
            </ScrollView>
            
            
        )
    }
}

export default Header