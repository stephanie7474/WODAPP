import React, { useState } from 'react';
import { Text, View,Button, StyleSheet } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 
import {Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WodSelect from './screens/WodSelect'
import WodCindy from './screens/WodCindy'
import WodGrace from './screens/WodGrace';
import WodDetails from './screens/WodDetails';
import WodSaveConfirmation from './screens/WodSaveConfirmation';
import UserProfile from './screens/UserProfile';
import Header from './components/Header.js'
import Home from './screens/Home';
import LandingScreen from './screens/LandingScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import WodHistory from './screens/WodHistory';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'Home') {
            iconName = 'ios-navigate';
          } else if (route.name == 'MesWod') {
            iconName = 'ios-chatbubbles';
          } else if (route.name == 'MesStats') {
            iconName = 'ios-chatbubbles';
          } else if (route.name == 'Friends') {
            iconName = 'ios-chatbubbles';
          }
  
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        })}
      tabBarOptions={{
        activeTintColor: '#eb4d4b',
        inactiveTintColor: '#EDEDED',
        style: {
          backgroundColor: '#ffff',
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MesStats" component={MesStats} />
      <Tab.Screen name="Friends" component={Friends} />
    </Tab.Navigator>
  );
}



export default function App() {

return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="WodCindy" component={WodCindy} />
            <Stack.Screen name="WodGrace" component={WodGrace} />
            <Stack.Screen name="WodSaveConfirmation" component={WodSaveConfirmation} />
            <Stack.Screen name="WodSelect" component={WodSelect} />
            <Stack.Screen name="WodHistory" component={WodHistory} />
            <Stack.Screen name="WodDetails" component={WodDetails} />
            <Stack.Screen name="Header" component={Header} />
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
) 
}



// {/* <View>
// {/* {<Home/>} */}
// {/* <WodSelect/> */}
// {/* <UserProfile/> */}
// {/* <WodDetails/> */}
//  <WodCindy/> 
// {/* <WodGrace/> */}
// {/* <WodSaveConfirmation/> */}
// {/* <Header/> */}

// </View> */}