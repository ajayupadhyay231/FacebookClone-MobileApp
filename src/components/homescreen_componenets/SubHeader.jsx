import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'

const SubHeader = () => {

  const handleWriteSomethingPressed = ()=>{

  }
  return (
    <View style={styles.mainContainer}>
               <View style={styles.avtarContainer}>
      <Image source={require("../../assets/images/img1.jpeg")} style={styles.avatar}></Image>
      </View>
      <TouchableOpacity style={styles.write_something_container}>
        <Text style={styles.write_something_text} onPress={handleWriteSomethingPressed}>Write something here...</Text>
        <Text style={styles.write_something_text} onPress={handleWriteSomethingPressed}>यहाँ कुछ लिखिए...</Text>
      </TouchableOpacity>
      <Image source={require("../../assets/images/cameraroll.png")} style={styles.imageUploadButton}></Image>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:Colors.white,
    flexDirection:"row",
    paddingHorizontal:15,
    alignItems:"center",
    justifyContent:"space-between",
    // backgroundColor:"red"
  },
  avtarContainer:{
    width:40,
    height:40,
    borderRadius:50,
    overflow:"hidden"
  },
  avatar:{
    resizeMode: 'contain', // Ensures the image fits within its container without distorting
    width:"100%",
    height:"100%",
  },
  write_something_container: {
    width: "70%",
    height: "70%",
    backgroundColor: Colors.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.Gray,
    // justifyContent: 'center', // Align text vertically
    // alignItems: 'center', // Align text horizontally,
    // marginBottom:5,
    paddingVertical:3,
    paddingLeft:20,
  },
  write_something_text:{
    color:Colors.Gray,
    fontSize:16,
    fontWeight:"500",
    // backgroundColor:"red"
  },
  imageUploadButton : {
    resizeMode:"contain"
  }

})