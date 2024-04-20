import { ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../utils/Colors'
import VectorIcon from '../../utils/VectorIcon'

const RegisterScreen = ({ navigation }) => {

  const [fullName, setFullName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleAlreadyHaveAcountClicked = () => {
    navigation.navigate("LoginScreen")  
  }

  const handleCreateAccountClicked = () =>{

  }
  
  return (
    //  <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
      <ScrollView style={styles.main_view} >
        {/* contentContainerStyle={{flex:1}}  not using thsi property of container
        which make all its child take up full width becaause its pushing 
        text filed way to above and not giveibg desired results*/} 
        <VectorIcon name="arrow-left" type={"FontAwesome5"} size={20} color={Colors.black} onPress={()=>{navigation.navigate("LoginScreen")}} />
        <View style={styles.top_div} >
          <VectorIcon name="facebook" size={55} color={Colors.blue} style={styles.faceboook_icon} />
          <TextInput style={styles.textInputs} placeholder='Full name' value={fullName} onChangeText={(text) => { setFullName(text) }} />
          <TextInput style={styles.textInputs} placeholder='Mobile number or email' value={mobileNumber} onChangeText={(text) => { setMobileNumber(text) }} />
          <TextInput style={styles.textInputs} placeholder='Password' value={password} onChangeText={(text) => { setPassword(text) }} />
          <TextInput style={styles.textInputs} placeholder='Confirm Password' value={confirmPassword} onChangeText={(text) => { setConfirmPassword(text) }} />
          <TouchableOpacity style={styles.login_button} onPress={handleCreateAccountClicked}><Text style={styles.login_button_text}>Create Account</Text></TouchableOpacity>
        </View>
        <View style={styles.bottom_div}>
          <TouchableOpacity style={styles.create_new_account}><Text style={styles.create_new_account_text} onPress={handleAlreadyHaveAcountClicked}>Already have an account ?</Text></TouchableOpacity>
          <VectorIcon name="meta" size={20} color={Colors.darkGray} type={"FontAwesome6"} />
        </View>
      </ScrollView>
    //  </KeyboardAvoidingView> 
  )
}

export default RegisterScreen

const styles = StyleSheet.create({

  main_view: {
    flex: 1,
    flexDirection: 'column',
    padding:20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:Colors.white
    // backgroundColor:"orange"
  },
  top_div: { 
    flex: 3, // don't know why but its not wokring properly insde scroll voew main div..
    // backgroundColor: "green", 
    width: "100%",
    justifyContent:"flex-end",
    alignItems:"center",
    // paddingTop:"50%",
    marginTop:"25%",
    marginBottom:"15%"
  },
  bottom_div: {
    flex: 1, 
    // backgroundColor: "red", 
    width: "100%",
    alignItems:"center",
    justifyContent:"flex-start",
    marginTop:"10%"
  },
  faceboook_icon: {
    marginBottom: "15%",
     // Adjust this value to add space between the icon and the text input
  },
  textInputs: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.lightGray,
    fontSize:16,
    color:Colors.Gray
  },
  login_button: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.blue,
    borderRadius: 20,
    marginTop: 5,
    justifyContent:"center"
  },
  login_button_text : {
    textAlign: "center", 
    color: Colors.white,
    fontWeight:"700", 
    fontSize:16
  },
  forgot_password_text:{
    fontWeight: "900", 
    marginTop: 15, 
    marginBottom:20,
    color:Colors.darkGray
  },
  create_new_account: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.blue,
    marginTop: 5,
    justifyContent: 'center', // Align text vertically
    alignItems: 'center', // Align text horizontally,
    marginBottom:5,
  },
  create_new_account_text:{
    textAlign: "center", 
    color:Colors.blue,
    fontWeight:"500"
  }
})
