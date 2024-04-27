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
      postImagePath: require("../../assets/images/post1.jpeg"),
      userName: "Emma",
      caption: "Exploring new horizons 🌄",
      noOfComments: 10,
      likeCount: 20
    },
    {
      id: 2,
      avatarImagePath: require("../../assets/images/img2.jpeg"),
      postImagePath: require("../../assets/images/post2.jpeg"),
      userName: "Olivia",
      caption: "Chasing dreams 💫",
      noOfComments: 5,
      likeCount: 15
    },
    {
      id: 3,
      avatarImagePath: require("../../assets/images/img3.jpeg"),
      postImagePath: require("../../assets/images/post3.jpeg"),
      userName: "Ava",
      caption: "Living life to the fullest! 🎉",
      noOfComments: 8,
      likeCount: 30
    },
    {
      id: 4,
      avatarImagePath: require("../../assets/images/img4.jpeg"),
      postImagePath: require("../../assets/images/post4.jpeg"),
      userName: "Isabella",
      caption: "Embracing every moment ❤️",
      noOfComments: 3,
      likeCount: 25
    },
    {
      id: 5,
      avatarImagePath: require("../../assets/images/img5.jpeg"),
      postImagePath: require("../../assets/images/post5.jpeg"),
      userName: "Sophia",
      caption: "Adventure awaits! 🌟",
      noOfComments: 12,
      likeCount: 40
    },
    {
      id: 6,
      avatarImagePath: require("../../assets/images/img6.jpeg"),
      postImagePath: require("../../assets/images/post6.jpeg"),
      userName: "Mia",
      caption: "Finding beauty in the little things 💖",
      noOfComments: 7,
      likeCount: 35
    },
    {
      id: 7,
      avatarImagePath: require("../../assets/images/img7.jpeg"),
      postImagePath: require("../../assets/images/post7.jpeg"),
      userName: "Amelia",
      caption: "Making memories that last a lifetime 📸",
      noOfComments: 20,
      likeCount: 50
    },
    {
      id: 8,
      avatarImagePath: require("../../assets/images/img8.jpeg"),
      postImagePath: require("../../assets/images/post8.jpeg"),
      userName: "Charlotte",
      caption: "Taking on new challenges with a smile 😊",
      noOfComments: 15,
      likeCount: 45
    }
  ];

  return (
    <ScrollView style={styles.main_container} contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.subHeaderContainer}><SubHeader></SubHeader></View>
      <View style={styles.stories_container}><Stories></Stories></View>
      {
        postsData.map((postItem)=>{
          return(
          <View key={postItem.id} style={styles.Post_container} >
            <Post key={postItem.id} avatarImagePath={postItem.avatarImagePath} postImagePath={postItem.postImagePath} userName={postItem.userName} caption = {postItem.caption} noOfComments={postItem.noOfComments} likeCount={postItem.likeCount}></Post>
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
        paddingVertical:3,
    },
    subHeaderContainer:{
      // flex:1,
      height:80,
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
      // height:500
      // height:"60%" 
      // flex:4,
      // backgroundColor:"orange"
    },
    contentContainerStyle:{
      // paddingBottom:20
      // flex:1
      // // gap:100,
    },
   

    
})