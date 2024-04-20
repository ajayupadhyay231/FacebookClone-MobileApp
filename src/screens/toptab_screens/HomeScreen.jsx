import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePageSubHeader from '../../components/homescreen_componenets/SubHeader'
import Stories from '../../components/homescreen_componenets/Stories'
import Posts from '../../components/homescreen_componenets/Posts'
import { Colors } from '../../utils/Colors'

const Home = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.homePageSubHeaderContainer}><HomePageSubHeader></HomePageSubHeader></View>
      <View style={styles.stories_container}><Stories></Stories></View>
      <View style={styles.posts_container} ><Posts></Posts></View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    main_container :{
        flex:1,
        backgroundColor:Colors.lightGray,
        paddingTop:3
    },
    homePageSubHeaderContainer:{
      flex:1,
      // backgroundColor:"red",
      marginBottom:7,
    },
    stories_container:{
      flex:2,
      backgroundColor:"green",
      marginBottom:7
    },
    posts_container:{
      flex:4,
      backgroundColor:"orange"

    }
})