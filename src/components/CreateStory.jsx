import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import VectorIcon from '../utils/VectorIcon'

const CreateStory = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.createStoryImageContainer}>
        <ImageBackground source={require("../assets/images/img1.jpeg")} style={styles.createStoryImage}>
        </ImageBackground>
        </View>
        <View style={styles.bottomContainer}>
        <VectorIcon name={"circle-with-plus"} type={"Entypo"} size={35} color={Colors.blue} style={styles.plusIcon}></VectorIcon>
          <Text style={styles.createStoryText}>Create</Text>
          <Text style={styles.createStoryText}>Story</Text>
        </View>
        {/* <Image source={require("../assets/images/img1.jpeg")} style={styles.createStoryImage}></Image> */}
    </View>
  )
}

export default CreateStory
const styles = StyleSheet.create({
    mainContainer:{
        width:100,
        backgroundColor:Colors.veryLightGrey,
        borderRadius:10,
        overflow: "hidden", 
    },
    createStoryImageContainer:{
        height:"60%",
        width:"100%"
    },
    createStoryImage:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    bottomContainer:{
        // backgroundColor:"red",
        flex:1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    plusIcon:{
        marginTop:-20,
        backgroundColor:"white",
        borderRadius:30
    },
    createStoryText:{
        fontWeight:"900", 
        color:Colors.black
    }
})