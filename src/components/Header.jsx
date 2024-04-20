import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import VectorIcon from '../utils/VectorIcon'

const Header = () => {
    return (
        <View style={styles.main_container}>
            {/* <Text style={styles.facebookText}>Facebook</Text> */}
            <Image source={require("../assets/images/fblogo.png")} style={styles.logo}></Image>
            <View style={styles.iconsContainer}>
               <VectorIcon name={"search"} type={"FontAwesome"} size={25} style={styles.searchIconContainer}></VectorIcon>
               <VectorIcon name={"facebook-messenger"} type={"FontAwesome5"} size={25} style={styles.messageIconContainer}></VectorIcon>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:10,
        paddingVertical:15,
        // padding: '10% 5%', // Sets vertical padding of 10% and horizontal padding of 5%
        // backgroundColor:"orange"
    },
    // facebookText: {
    //     fontSize: 30,
    //     fontFamily:"Klavika",
    //     color: Colors.blue,
    //     fontWeight:"800"

    // },
    logo: {
        resizeMode: 'contain', // Ensures the image fits within its container without distorting
        // backgroundColor:"green",
        height:"90%",
        width:"40%",
    },

    iconsContainer:{
        flexDirection:"row",
        gap:10,
        // backgroundColor:"red"
    },
    searchIconContainer:{
     justifyContent:"center" , 
     alignItems:"center", 
     backgroundColor:Colors.veryLightGrey, 
     borderRadius:50, 
     width:40, 
     height:40
    },
    messageIconContainer:{
        justifyContent:"center" , 
        alignItems:"center", 
        backgroundColor:Colors.veryLightGrey, 
        borderRadius:50, 
        width:40, 
        height:40
       },

})