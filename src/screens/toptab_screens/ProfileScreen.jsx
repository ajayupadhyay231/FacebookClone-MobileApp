import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
import auth from '@react-native-firebase/auth';



const Profile = ({navigation}) => {


// this will make the authentication state object to null in the firrbase and as soon as this 
// happen the authentication state listners on root app componenet will get triggered and 
// call the call back function with null user and based on this the user  will be taken to
// main screen or login screen.... 

// menaas the authentication navigation is maintained by that listener on app component 
// whihc is listing to the firebase state whihc is getting changed on login logout etc...

    const handleLogoutPressed = async() =>{
      try{
        const result =  await auth().signOut();
        Alert.alert("signed out successfully")
      }catch(err){
        Alert.alert("Something went wrong")
        console.log("Error in  singout, err:", err)
      }
    }
  return (
    <View style={styles.main_container}>
      <Text>profile</Text>

      <TouchableOpacity style={styles.login_button} onPress={handleLogoutPressed}><Text style={styles.logout_button_text}>Logout</Text></TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    main_container :{
        flex:1,
        // backgroundColor:"green"
        justifyContent:"space-around",
        padding:10
    },
    login_button: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.blue,
        borderRadius: 20,
        marginTop: 5,
        justifyContent:"center",
    },
      logout_button_text : {
        textAlign: "center", 
        color: Colors.white,
        fontWeight:"700", 
        fontSize:16
      },
})