import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
import StorieCard from '../StorieCard'
import CreateStory from '../CreateStory'

const Stories = () => {

  const storiesObject = [
    {
      key:1,
      name:"Name 1",
      imagepath : require("../../assets/images/img2.jpeg")
    },
    {
      key:2,
      name:"Name 2",
      imagepath : require("../../assets/images/img3.jpeg")
    },
    {
      key:3,
      name:"Name 3",
      imagepath : require("../../assets/images/img4.jpeg")
    },
    {
      key:4,
      name:"Name 4",
      imagepath : require("../../assets/images/img5.jpeg")
    },
    {
      key:5,
      name:"Name 5",
      imagepath : require("../../assets/images/img6.jpeg")
    }, 
    {
      key:7,
      name:"Name 6",
      imagepath : require("../../assets/images/img7.jpeg")
    }, 
    {
      key:8,
      name:"Name 7",
      imagepath : require("../../assets/images/img8.jpeg")
    },
    {
      key:9,
      name:"Name 8",
      imagepath : require("../../assets/images/img8.jpeg")
    }
  ]
  return (
    <View style={styles.main_container}>
      {/* <ScrollView horizontal   */}
      <ScrollView horizontal  contentContainerStyle={styles.scrollViewContent} >
      {/* contentContainerStyle  => this will le u set its child compinent width height etc without this
      they will only occupy the space required by the componenet...
      by this and giving flex 1 to it, we can give flex 1 ,2 ,3 etc to its childs also
      other wise flex ration will not work on childs then only take the required width
      not the flex ration which i have declared... */}
      <CreateStory></CreateStory>
      {
        storiesObject.map((storyItem)=>{
          return(
            <StorieCard key = {storyItem.key} imgSorcePath={storyItem.imagepath} name={storyItem.name}></StorieCard>
          )
        })
      }
      </ScrollView>
      
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor:Colors.white,
  
  },
  // ScrollViewContainer:{
  //   width:100%
  //   // flex:1
  //   // padding:10
  // },
  scrollViewContent:{
    padding:10,
    gap:10
  }
})