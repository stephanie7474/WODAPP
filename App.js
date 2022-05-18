import React, {useState }from 'react'
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View, TouchableOpacity, Keyboard, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Button from './components/Button'; 
  //import HomeScreen from './Screens/HomeScreen';
  //import SignIn from './Screens/SignIn';
  //import SignUp from './Screens/SignUp';


 function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue !</Text>
      <Button
        text="Se Connecter !"
        buttonCustomStyles={{
         backgroundColor: "#4282F4",
         borderRadius: 10,
         marginTop: 10
       }}
       textCustomStyles={{
         color: "#3E3E3E"
       }}
        onPress={() => navigation.navigate('Details')}
      />
      
       <Button
        text="Creer un Compte"
        buttonCustomStyles={{
         backgroundColor: "#4282F4",
         borderRadius: 10,
         marginTop: 10
       }}
       textCustomStyles={{
         color: "#3E3E3E"
       }}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SignIn({ navigation }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Se connecter</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
    <Button text="Valider" onPress={() => navigation.navigate('Home')} />
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SignUp({ navigation }) {
  const [firstName, setFirstname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>creer compte</Text>
      <TextInput 
      placeholder ="Firstname" 
      onChangeText={(value) => setText(value)}
       value={firstName} 
      />
       <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
    />
       <Button title="Creer" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <SignIn /> 
     <SignUp />
   
     {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="WODAPP " component={HomeScreen} />
        <Stack.Screen name="Valider" component={SignIn} />
        <Stack.Screen name="Creer" component={SignUp} />
      </Stack.Navigator>  */}
    </NavigationContainer>
  );
}

export default App;