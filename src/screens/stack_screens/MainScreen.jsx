import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../toptab_screens/HomeScreen';
import Profile from '../toptab_screens/ProfileScreen';
import { Colors } from '../../utils/Colors';
import Friends from '../../components/Friends';
import VideoScreen from '../toptab_screens/VideoScreen';
import MarketPlaceScreen from '../toptab_screens/MarketPlaceScreen';
import NotificationScreen from '../toptab_screens/NotificationScreen';
import VectorIcon from '../../utils/VectorIcon';


const Tab = createMaterialTopTabNavigator();


const HomeScreen = () => {

    const tabScreens = [
        {
            id: 1,
            name: "Home",
            component: Home,
            inactiveIconType: "MaterialCommunityIcons",
            activeIconType:"Entypo",
            inactiveIconName: "home-outline",
            activeIconName: "home",
            sizeFocused : 31,
            sizeUnfocused :28
        },
        {
            id: 2,
            name: "FriendsScreen",
            component: Friends,
            activeIconName: "people",
            inactiveIconName: "people-outline",
            inactiveIconType:"Ionicons",
            activeIconType:"Ionicons",
            sizeFocused : 30,
            sizeUnfocused :25
        },
        {
            id: 3,
            name: "VideoScreen",
            component: VideoScreen,
            activeIconName: "youtube-tv",
            inactiveIconName: "ondemand-video",
            inactiveIconType: "MaterialIcons",
            activeIconType:"MaterialCommunityIcons",
            sizeFocused : 30,
            sizeUnfocused :25

        },
        {
            id: 4,
            name: "MarketPlaceScreen",
            component: MarketPlaceScreen,
            activeIconName: "shop",
            inactiveIconName: "storefront",
            inactiveIconType: "MaterialIcons",
            activeIconType:"Entypo",
            sizeFocused : 30,
            sizeUnfocused :25

        },
        {
            id: 5,
            name: "NotificationScreen",
            component: NotificationScreen,
            activeIconName: "notifications",
            inactiveIconName: "notifications-outline",
            inactiveIconType: "Ionicons",
            activeIconType:"Ionicons",
            sizeFocused : 30,
            sizeUnfocused :25

        },
        {
            id: 6,
            name: "Profile",
            component: Profile,
            activeIconName: "person",
            inactiveIconName: "user",
            inactiveIconType: "AntDesign",
            activeIconType:"Ionicons",
            sizeFocused : 30,
            sizeUnfocused :25
        }
    ];
    
    
    return (
        <View style={styles.main_Container}>
            <Header></Header>
            <Tab.Navigator
             screenOptions={{
                tabBarActiveTintColor: Colors.blue, // Set the color of the active tab to blue
                tabBarShowLabel:false,
                tabBarInactiveTintColor:Colors.Gray
              }}
        >
            {
            tabScreens.map((tab)=>{ 
                return(
                <Tab.Screen  key={tab.id} name={tab.name} component={tab.component} 
                
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <VectorIcon name={focused ? tab.activeIconName : tab.inactiveIconName} size={focused ? tab.sizeFocused : tab.sizeUnfocused} type={focused ? tab.activeIconType : tab.inactiveIconType} color={color} style={styles.tabIconContainer}  />
                    ),
                    // tabBarLabel: () => null, // Remove the tab name
                }}
                />
            )
            })
            }
            </Tab.Navigator>
            {/* <View style={{height:50, width:"100%"}}><Text>bottom of tabs</Text></View> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    main_Container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    tabIconContainer: {
        width:35,
        height:30, 
        // backgroundColor:"green", 
        justifyContent:"center",
        alignItems:"center",
    },    
})