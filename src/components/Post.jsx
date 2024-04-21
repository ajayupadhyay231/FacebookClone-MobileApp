import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import VectorIcon from '../utils/VectorIcon'

const Post = ({avatarImagePath, postImagePath, userName, caption}) => {
  console.log("avatarImagePath", avatarImagePath)
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.postHeader}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.avtarContainer}>
          <Image source={avatarImagePath} style={styles.avatar}></Image>
          </View>
          <View style={styles.nametimeConatiner}>
            <Text style={{fontWeight:"900"}}>{userName}</Text>
            <View style={styles.timeAndUserIConConatiner}>
              <Text style={{}}>2d .</Text>
              <VectorIcon name={"people"} type={"MaterailIcons"} size={15}></VectorIcon>
            </View>
          </View>
        </View>
        <View style={styles.headerRightContainer}>
          <VectorIcon name={"dots-three-horizontal"} type={"Entypo"}></VectorIcon>
          <VectorIcon name={"cross"} type={"Entypo"}></VectorIcon>
        </View>
      </View>
      <View style={styles.postCaption}>
        <Text>{caption}</Text>
      </View>
      <View style={styles.postImageContainer}>
         <Image source={postImagePath} style={styles.postImageStyle}></Image>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1,
    // backgroundColor:"red",
  },
  postHeader:{
    width:"100%",
    height:"12%",
    backgroundColor:"green",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  headerLeftContainer:{
    display:"flex",
    flexDirection:"row",
    gap:8
    // backgroundColor:"orange",
  },
  headerRightContainer:{
    display:"flex",
    flexDirection:"row",
    backgroundColor:"blue",
    gap:15
  },
  postCaption:{
    display:"flex",
    justifyContent:"center",
    height:"8%",
    backgroundColor:"purple",
    paddingHorizontal: 10
  },
  postImageContainer:{
    height:400,
    // backgroundColor:"red"    
  },
  postImageStyle:{
    width:"100%",
    height:"100%",
  },
  nametimeConatiner:{
    display:"flex",
    flexDirection:"column"

  },
  avatar:{
    resizeMode: 'contain', // Ensures the image fits within its container without distorting
    width:40,
    height:40,
    borderRadius:50,
    borderWidth:2,
    // borderColor:Colors.blue
},
timeAndUserIConConatiner:{
  display:'flex', 
  flexDirection:"row", 
  justifyContent:"center", 
  alignItems:"center"
}
})