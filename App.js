/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Heading from './Heading'

export default class App extends Component{
  constructor(){
    super();
    this.state={
      CompanyName : ' ',
      FullName:'',
      EmailAddress:'',
      Password:'',
      ContactNo: 0

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>Employer Account</Text>
        <Text style={styles.bold}>  Your company Name</Text>
        <TextInput style={styles.input} onChangeText={(CompanyName)=> this.setState(CompanyName)} placeholder='You Company Name'  placeholderTextColor='#CACACA'
        selectionColor='#666666' /> 
        <Text style={styles.bold}>Full Name        </Text>
        <TextInput style={styles.input} onChangeText={(FullName)=> this.setState(FullName)} placeholder='Your full Name     '  placeholderTextColor='#CACACA'
        selectionColor='#666666'/> 
        <Text style={styles.bold}>Email Address       </Text>
        <TextInput style={styles.input} onChangeText={(EmailAddress)=> this.setState(EmailAddress)} placeholder='Your Email Address     '  placeholderTextColor='#CACACA'
        selectionColor='#666666'/>
        <Text style={styles.bold}>Password       </Text>
        <TextInput style={styles.input} onChangeText={(Password)=> this.setState(Password)} placeholder='Password     '  placeholderTextColor='#CACACA'
        selectionColor='#666666' secureTextEntry={true}/>
        <Text style={styles.bold}>ContactNo         </Text>
        <TextInput style={styles.input} onChangeText={(ContactNo)=> this.setState(ContactNo)} placeholder='Your contact number     '  placeholderTextColor='#CACACA'
        selectionColor='#666666'/>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btntext}>Sin Up</Text>
        </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
    
  },
  Header:{
    fontSize: 26,
    color:'#008B8B',
  paddingBottom: 10,
  marginBottom:40,
  borderBottomColor: '#000000',
  borderBottomWidth:1
  },
  input: {
    height: 50,
    width: 100,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    
  },
  bold:{
    fontWeight: 'bold',
    
  },
  button:{
    alignSelf:'stretch',
   alignItems:'center',
   padding:20,
   backgroundColor: '#008B8B',
   marginTop:30
  },
  btntext:{
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  }
});
