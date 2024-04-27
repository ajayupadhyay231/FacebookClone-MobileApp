import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import VectorIcon from '../utils/VectorIcon'

const Post = ({ avatarImagePath, postImagePath, userName, caption, noOfComments = 0, likeCount = 0 }) => {
  
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.postHeader}>
        <View style={styles.headerLeftContainer}>
          <View style={styles.avtarContainer}>
            <Image source={avatarImagePath} style={styles.avatar}></Image>
          </View>
          <View style={styles.nametimeConatiner}>
            <Text style={{ fontWeight: "900" }}>{userName}</Text>
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
      <View style={styles.postFooter}>
        <View style={styles.postFooterTopcontainer}>
          <View style={styles.emojiContainer}>
            <Image source={require("../assets/images/like.jpeg")} style={styles.emogiesImage}></Image>
            <Image source={require("../assets/images/shock.jpeg")} style={styles.emogiesImage}></Image>
            <Image source={require("../assets/images/heart.jpeg")} style={styles.emogiesImage}></Image>
            <Text style={{ marginLeft: 10, fontSize: 16 }}>{likeCount}</Text>
          </View>
          <Text style={{ fontSize: 16 }} >{noOfComments} comments</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.postFooterBottomContainer}>
          <View style={styles.footerIconsWithText}>
            <VectorIcon name={"like2"} type={"AntDesign"}></VectorIcon>
            <Text>Like</Text>
          </View>
          <View style={styles.footerIconsWithText}>
            <VectorIcon name={"comment-outline"} type={"MaterialCommunityIcons"}></VectorIcon>
            <Text>Comment</Text>
          </View>
          <View style={styles.footerIconsWithText}>
            <VectorIcon name={"share-outline"} type={"MaterialCommunityIcons"}></VectorIcon>
            <Text>Share</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  mainConatiner: {
    // flex: 1,
    // backgroundColor:"red",
  },
  postHeader: {
    // width: "100%",
    // height: "12%",
    backgroundColor: Colors.white,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerLeftContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8
    // backgroundColor:"orange",
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor:C,
    gap: 15
  },
  postCaption: {
    display: "flex",
    justifyContent: "center",
    // height: "8%",
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingBottom:10,
    // backgroundColor: Colors.blue,

  },
  postImageContainer: {
    height: 300,
    // backgroundColor:"red"    
  },
  postImageStyle: {
    width: "100%",
    height: "100%",
  },
  nametimeConatiner: {
    display: "flex",
    flexDirection: "column"

  },
  avtarContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden"
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  timeAndUserIConConatiner: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  postFooter: {
    backgroundColor: Colors.white,
    // width:"100%",
    // height:100,
    // backgroundColor:"red"
  },
  postFooterTopcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical:15
  },
  postFooterBottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical:10,
  },
  emojiContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  emogiesImage: {
    height: 20,
    width: 20,
    borderRadius: 30
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 10
  },
  footerIconsWithText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

})