import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'

const HomePageSubHeader = () => {

  const handleWriteSomethingPressed = ()=>{

  }
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../../assets/images/img1.jpeg")} style={styles.profileImage}></Image>
      <TouchableOpacity style={styles.write_something_container}><Text style={styles.write_something_text} onPress={handleWriteSomethingPressed}>Write something here...</Text></TouchableOpacity>
      <Image source={require("../../assets/images/cameraroll.png")} style={styles.imageUploadButton}></Image>
    </View>
  )
}

export default HomePageSubHeader

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:Colors.white,
    flexDirection:"row",
    paddingHorizontal:15,
    paddingVertical:5,
    alignItems:"center",
    justifyContent:"space-between"
  },
  profileImage:{
    resizeMode: 'contain', // Ensures the image fits within its container without distorting
    width:45,
    height:45,
    borderRadius:30
  },
  write_something_container: {
    width: "70%",
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.Gray,
    marginTop: 5,
    justifyContent: 'center', // Align text vertically
    alignItems: 'center', // Align text horizontally,
    marginBottom:5,
  },
  write_something_text:{
    textAlign: "center", 
    color:Colors.Gray,
    fontWeight:"500"
  },
  imageUploadButton : {
    resizeMode:"contain"
  }

})