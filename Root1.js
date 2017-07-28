import React, {Component} from 'react'
import {View, Text,StyleSheet,ListView,SectionList, Picker,Button, Modal, StatusBar,Share,TextInput,AsyncStorage} from 'react-native'
//import Header from './Header.js'
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
var DatePicker = require('./DatePicker');

const STORAGE_KEY= '@AwesomeProject:data'
class Root1 extends Component{
    constructor(props) {
        super(props);
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { 
            x: 0 ,
          textInput:'',
           modalVisible: false,
           name:''
        };
          this.showModal=this.showModal.bind(this);
          this._save=this._save.bind(this);
          this.componentDidMount();
    }
  doSomthing(){
    this.setState({
      x: Math.floor(Math.random()*10)
    })
  }
  showModal(){
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
  hideModal(){
    this.setState({
      modalVisible: false
    })
  }


  shared(){
    Share.share({message:'xxxxxxxxxxxxxxxxxxxx'})
  }
  _save(){
    AsyncStorage.setItem(STORAGE_KEY,this.state.textInput)
    .then(()=>console.log('saved'))
    .catch((error)=> console.log(error.message)).done();

    this.setState({
      name:this.state.textInput
    })
  }

  componentDidMount(){
    AsyncStorage.getItem(STORAGE_KEY)
    .then((value)=> {
      this.setState({
        name: value,
      })
    })
    .catch((error)=> console.log('AsyncStorage:'+error.message))
  }

  render() {
    return (
      <View style={styles.container}>
           <StatusBar
           hidden={false}
     backgroundColor="black"
     barStyle="light-content"
   />
   <View>
          <DatePicker/>
         </View>
          <Button
  onPress={()=>this.doSomthing()}
  title="RANDOM"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  
/>


<Text style={{textAlign:'center',fontSize:30}}>{this.state.x}</Text>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
           onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <Text>Fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>

                <Button
  onPress={()=>this.showModal()}
  title="close"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  
/>

          </Modal>

      <Button
  onPress={()=>this.showModal()}
  title="modal"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  
/>

<View style={{marginTop:20}}>
      <Button
  onPress={()=>this.shared()}
  title="shared"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  
/>
</View>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(textInput) => this.setState({textInput})}
        value={this.state.textInput}
      />
      <Button
  onPress={()=>this._save()}
  title="save"
  color="red"
  accessibilityLabel="Learn more about this purple button"
  
/>      
<Text>{this.state.name}</Text>      
      </View>


);
  }
}

export default Root1