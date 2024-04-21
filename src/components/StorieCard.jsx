import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'

const StorieCard = ({imgSorcePath, name}) => {

  return (
    <View style={styles.main_container}>
        <ImageBackground source={imgSorcePath}  style={styles.backgroundImage} >
          <Image source={imgSorcePath} style={styles.avatar}></Image>
          {/* <View style={styles.headingContainer}> */}
          <Text style={styles.storyHeading}>{name}</Text>
          {/* </View> */}
        </ImageBackground>
    </View>
  )
}

export default StorieCard

const styles = StyleSheet.create({
    main_container:{
        width:100,
        borderRadius:10,
        overflow:"hidden",
        backgroundColor:"green"
    },
    backgroundImage:{
        flex:1,
        // resizeMode:"cover",
        padding:4,
        justifyContent:"space-between"
    },
    avatar:{
        resizeMode: 'contain', // Ensures the image fits within its container without distorting
        width:40,
        height:40,
        borderRadius:50,
        borderWidth:2,
        borderColor:Colors.blue
    },
    storyHeading:{
        color:Colors.white,
        margin:4,
        fontSize:14,
        fontWeight:"500"
    },
    headingContainer:{
        flex:1,
        backgroundColor:"red"
    },
})

