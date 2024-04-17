import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import { Colors } from './src/utils/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';


const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <View style={styles.mainAppContainer}>
        <StatusBar backgroundColor={Colors.white} barStyle='dark-content'></StatusBar>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} ></Stack.Screen>
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