import React from 'react';
import {Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
  <Stack.Navigator>
   
    <Stack.Screen name="Login" component={SignIn}options={{headerShown: false}}/>
    <Stack.Screen name="Register" component={SignUp}options={{headerShown: false}}/>  

    <Stack.Screen name="WODAPP" component={HomeScreen}options={{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
