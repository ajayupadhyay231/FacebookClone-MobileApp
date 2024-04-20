import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/stack_screens/LoginScreen'
import { Colors } from './src/utils/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/stack_screens/RegisterScreen';
import MainScreen from './src/screens/stack_screens/MainScreen';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <View style={styles.mainAppContainer}>
        <StatusBar backgroundColor={Colors.white} barStyle='dark-content'></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
  }
})