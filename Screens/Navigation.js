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
    <Stack.Screen name="WODAPP" component={HomeScreen}/>
    <Stack.Screen name="Se Connecter" component={SignIn}/>
    <Stack.Screen name="Creer Compte" component={SignUp}/>
  </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
