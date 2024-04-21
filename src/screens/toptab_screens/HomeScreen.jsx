import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SubHeader from '../../components/homescreen_componenets/SubHeader'
import Stories from '../../components/homescreen_componenets/Stories'
import Post from '../../components/Post'
import { Colors } from '../../utils/Colors'

const Home = () => {

  const postsData = [
    {
      id: 1,
      avatarImagePath: require("../../assets/images/img1.jpeg"),
      postImagePath: require("../../assets/images/post0.jpeg"),
      userName: "Emma",
      caption: "Exploring new horizons 🌄"
    },
    {
      id: 2,
      avatarImagePath: require("../../assets/images/img2.jpeg"),
      postImagePath: require("../../assets/images/post1.jpeg"),
      userName: "Olivia",
      caption: "Chasing dreams 💫"
    },
    {
      id: 3,
      avatarImagePath: require("../../assets/images/img3.jpeg"),
      postImagePath: require("../../assets/images/post2.jpeg"),
      userName: "Ava",
      caption: "Living life to the fullest! 🎉"
    },
    {
      id: 4,
      avatarImagePath: require("../../assets/images/img4.jpeg"),
      postImagePath: require("../../assets/images/post3.jpeg"),
      userName: "Isabella",
      caption: "Embracing every moment ❤️"
    },
    {
      id: 5,
      avatarImagePath: require("../../assets/images/img5.jpeg"),
      postImagePath: require("../../assets/images/post4.jpeg"),
      userName: "Sophia",
      caption: "Adventure awaits! 🌟"
    },
    {
      id: 6,
      avatarImagePath: require("../../assets/images/img6.jpeg"),
      postImagePath: require("../../assets/images/post5.jpeg"),
      userName: "Mia",
      caption: "Finding beauty in the little things 💖"
    },
    {
      id: 7,
      avatarImagePath: require("../../assets/images/img7.jpeg"),
      postImagePath: require("../../assets/images/post6.jpeg"),
      userName: "Amelia",
      caption: "Making memories that last a lifetime 📸"
    },
    {
      id: 8,
      avatarImagePath: require("../../assets/images/img8.jpeg"),
      postImagePath: require("../../assets/images/post7.jpeg"),
      userName: "Charlotte",
      caption: "Taking on new challenges with a smile 😊"
    }
  ]

  return (
    <ScrollView style={styles.main_container} contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.subHeaderContainer}><SubHeader></SubHeader></View>
      <View style={styles.stories_container}><Stories></Stories></View>
      {
        postsData.map((postItem)=>{
          return(
          <View style={styles.Post_container} >
            <Post key={postItem.id} avatarImagePath={postItem.avatarImagePath} postImagePath={postItem.postImagePath} userName={postItem.userName} caption = {postItem.caption}></Post>
          </View>
          )
        })
      }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    main_container :{
        flex:1,
        backgroundColor:Colors.lightGray,
        paddingVertical:3
    },
    subHeaderContainer:{
      // flex:1,
      height:85,
      // backgroundColor:"red",
      marginBottom:7,
    },
    stories_container:{
      // flex:2,
      height:150,
      // backgroundColor:"green",
      marginBottom:7
    },
    Post_container:{
      height:500
      // height:"60%" 
      // flex:4,
      // backgroundColor:"orange"
    },
    scrollViewContainer:{
      // flex:1
      // // gap:100,
    }
    
})