import React, { Component } from 'react';
import{
    View,
    Button,
    Text,
    DatePickerAndroid,
    TimePickerAndroid
} from 'react-native';

var now = new Date();

var DatePicker = React.createClass({

    _open(){
        DatePickerAndroid.open({date : now});
    },
    _opentime(){
        TimePickerAndroid.open({date : now});
    },
    render(){
        return(
            <View style={{width:200, height:200}}>
                <Button title="open" onPress={()=>this._open()}/>
                    <Button title="open" onPress={()=>this._opentime()}/>
                </View>
        )
    }
})

module.exports = DatePicker;