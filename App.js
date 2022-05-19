
import { StatusBar } from 'expo-status-bar';
import {  TextInput, Text, View } from 'react-native';
// import { NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 
 import HomeScreen from './Screens/HomeScreen';
 import SignIn from './Screens/SignIn';
 import SignUp from './Screens/SignUp';
 import Navigation from './Screens/Navigation';

export default function App (){
  return(
<View style={{flex:1}}>
 {/* <HomeScreen />  
 <SignIn/>
 <SignUp />     */}
 <Navigation /> 
</View>
  )
}
