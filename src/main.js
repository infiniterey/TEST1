import React, { Component } from 'react';
import { ScrollView,Platform, StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';


export default class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    email: '',
    ErrorStatusEmail : true,
    password: '',
    ErrorStatusPassword : true,
    MessageEmail: false,
    MessagePassword: false

   }
}
onEnterEmail = (email) =>{
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
 if(email.trim() == 0 || reg.test(email) === false){
      this.setState({email: email, ErrorStatusEmail : false});
      }
  else{
      this.setState({email : email, ErrorStatusEmail : true, MessageEmail:true}) ;

  }
}

onEnterPassword = (password) =>{
 var TextLength = password.length.toString() ;
    if(TextLength > 2 && TextLength < 12){
this.setState({password: password, ErrorStatusPassword : true, MessagePassword:true});
  }
else {
 this.setState({password: password, ErrorStatusPassword : false});
}
}

buttonClickListener = () =>{
  if( this.state.MessageEmail == true && this.state.MessagePassword == true ){
    Alert.alert("Login Succesfully");
  }
  else{
    Alert.alert("Please Check Email and Password");
  }
}

  render() {
    return (
    <ScrollView style={{padding: 20}}>
      <View style={styles.container}>
        <Image source={require('./assets/Logo.png')}  />
      </View>
      <View style={styles.login}>
      <Text>Email </Text>
        <TextInput
          style={styles.textbox}
          onChangeText={email => this.onEnterEmail(email)}
          value={this.state.email}
        />
        { this.state.ErrorStatusEmail == false ? (
        <Text style={styles.errorMessage}>not correct format for email address </Text>) :null }
      <Text>Password </Text>
        <TextInput
          style={styles.textbox}
          maxLength= {12}
          onChangeText={password => this.onEnterPassword(password)}
          value={this.state.password}
          secureTextEntry={true}
        />
        { this.state.ErrorStatusPassword == false ? (
        <Text style={styles.errorMessage}>please use at least 6 - 12 characters </Text> ) : null}
        </View>
        <View style={[{margin: 5}]}>
        <Button
        onPress={this.buttonClickListener}
        title="Sign In"
        style={styles.button}
        />
        </View>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    marginTop: 30

  },
  login: {
    fontSize: 20,
    marginTop: 35,
  },
  textbox: {
    height: 36,
    width: '100%',
    borderColor: 'violet',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    marginleft: 5,
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  Button: {
    height: 36,
    width: '100%',
    borderColor: 'violet',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    marginleft: 5,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  errorMessage:
  {
    fontSize: 10,
    fontStyle: 'italic',
    color:"red",
  }
});
