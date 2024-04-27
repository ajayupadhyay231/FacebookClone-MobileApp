import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './src/screens/stack_screens/LoginScreen'
import { Colors } from './src/utils/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/stack_screens/RegisterScreen';
import MainScreen from './src/screens/stack_screens/MainScreen';
import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();



const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  console.log("user on app", user)

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.mainAppContainer}>
        {initializing ? <ActivityIndicator></ActivityIndicator> :
          <>
            <StatusBar backgroundColor={Colors.white} barStyle='dark-content'></StatusBar>
            <Stack.Navigator>
              {user ? ( // If user exists, navigate to MainScreen
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
              ) : ( // If user does not exist, navigate to LoginScreen
                <>
                  <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                </>
              )}
            </Stack.Navigator>
          </>
        }
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