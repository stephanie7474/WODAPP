import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./HomeScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="SignIn" component={SignIn}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
  </Stack.Navigator>
);

export default Routes;
