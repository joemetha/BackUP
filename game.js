import React, {Component} from 'react'
import {View, Text,StyleSheet,ListView,SectionList, Picker,Button, Modal, StatusBar,Share,TextInput,AsyncStorage,TouchableHighlight} from 'react-native'
const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column', 
  },
  container2: {
   flex: 1,
   flexDirection: 'row', 
  },
  _header:{
      flex:1.5,
      flexDirection:'row',
      
  },
  _highscore:{
      flex:1,
      backgroundColor:'#784212'
  },
  _time:{
      flex:1,
      backgroundColor:'#784212'
  },
  _currentscore:{
      flex:1,
      backgroundColor:'#784212'
  },
  _console:{
      flex:1,
      backgroundColor:'#EDBB99'
  },
  _body:{
      flex:7.5,
      backgroundColor:'#ECF0F1'
  },
  _full:{
      flex:1,
        backgroundColor:'#F6DDCC',
        margin:10,
        borderRadius:5
  },
  _startButton:{
      marginTop:10,
      flex:1,
      alignItems:'center'
  },
  _subbody:{
      flex:1,
      backgroundColor:'#ECF0F1',
      marginTop:5,
      marginLeft:5,
  },
  _subbody2:{
      flex:1,
      backgroundColor:'#F6DDCC',
      marginRight:5,
     
  },
  _animal:{
      fontSize:60,
      textAlign:'center',
      marginTop:25
     
  },
  _text:{
    
    color:'black',
    fontSize:18,
textAlign :'center'
  },

  _touch:{
    // alignItems: 'center',
  
    // justifyContent: 'center',
   
    flex:1
    
    
  }

})

var timeLimit=10;
var timer=null;
var Animal = React.createClass({
    render(){
        return(
            <TouchableHighlight style={styles._touch} onPress={this.props.onPress}>
             
            <Text style={styles._animal}>{this.props.show ? '🐻':''}</Text>
            </TouchableHighlight>
        )
    }
})

const STORAGE_KEY= '@AwesomeProject:data'
class game extends Component{

    constructor(){
        super();
        this.state={
            highScore:0,
            timeCount:0,
            score:0,
            playing: false,
            holes: [false,false,false,false,false,false,false,false,false]
        }
        
        this.componentDidMount();
        
    }

    start(){
        this.setState({
            timeCount:timeLimit,
            playing:true,
            score:0,
            
        });

         Animals = setInterval(()=>{
            var currentHoles = this.state.holes;
            currentHoles[Math.floor(Math.random()*9)] = true;
            if(!Math.floor(Math.random()*3)){
                currentHoles=[false,false,false,false,false,false,false,false,false]
             }
            this.setState({
                holes: currentHoles,
        })
      },500);

        timer =setInterval(()=>{
            this.setState({
                timeCount:this.state.timeCount-1,
            });
            if(this.state.timeCount==0){
                this.stopGame();
            }
        },1000);
    }

    stopGame(){
         clearInterval(timer);
            clearInterval(Animals);
                this.setState({
                    playing:false,
                    holes: [false,false,false,false,false,false,false,false,false],
                    highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
                })
                this._save();
    }
    
    _handleTouch(number){
        if (this.state.holes[number]) {
            this.setState({
                score: this.state.score + 1,
            })
        }
            }

    _save(){
    AsyncStorage.setItem(STORAGE_KEY,this.state.highScore+'')
    .then(()=>console.log('saved'))
    .catch((error)=> console.log(error.message)).done();

  }

  componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY)
    .then((value)=> {
      this.setState({
        highScore: (value==null) ? 0 : value,
      })
    })
    .catch((error)=> console.log('AsyncStorage:'+error.message))
  }

  render() {
    return (

        <View style={styles.container}>
            <View style={styles._header}>
                <View style={styles._highscore}>
                    <View style={styles._full}>
                        <Text style={styles._text}>High Score</Text>
                        <Text style={styles._text}>{this.state.highScore}</Text>
                    </View>
                </View>
                <View style={styles._time}>
                    <View style={styles._full}>
                        <Text style={styles._text}>Time</Text>
                        <Text style={styles._text}>{this.state.timeCount}</Text>
                    </View>
                </View>
                <View style={styles._currentscore}>
                    <View style={styles._full}>
                        <Text style={styles._text}>Score</Text>
                        <Text style={styles._text}>{this.state.score}</Text>
                    </View>
                </View>
            </View>
            <View style={styles._console}>
                <View style={styles._startButton}>
                    <Button
                    onPress={()=>this.start()}
                    title="Start"
                    color="#BA4A00"
                    disabled={this.state.playing}
                    />           
                </View>
            </View>
             <View style={styles._body}>
                <View style={styles._subbody}>
                    <View style={styles.container2}>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[0]}
                            onPress={() => this._handleTouch(0)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[1]}
                            onPress={() => this._handleTouch(1)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[2]}
                            onPress={() => this._handleTouch(2)}/>
                        </View>
                    </View>
                </View>
                <View style={styles._subbody}>
                    <View style={styles.container2}>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[3]}
                            onPress={() => this._handleTouch(3)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[4]}
                            onPress={() => this._handleTouch(4)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[5]}
                            onPress={() => this._handleTouch(5)}/>
                        </View>
                    </View>
                </View>
                <View style={styles._subbody}>
                    <View style={styles.container2}>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[6]}
                            onPress={() => this._handleTouch(6)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[7]}
                            onPress={() => this._handleTouch(7)}/>
                        </View>
                        <View style={styles._subbody2}>
                            <Animal show={this.state.holes[8]}
                            onPress={() => this._handleTouch(8)}/>
                        </View>
                    </View>
                </View>
            </View> 
        </View>

    );
  }
}

export default game