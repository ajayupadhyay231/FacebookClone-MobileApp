import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'

const Profile = ({navigation}) => {

    const handleLogoutPressed = () =>{
        navigation.navigate("LoginScreen")
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