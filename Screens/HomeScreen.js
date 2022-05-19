import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Button, Pressable} from 'react-native'
import React from 'react'


export default function HomeScreen(props) {
 const {Login}= useNavigation
 const { onPress, title = 'Mes Wod' } = props;
  return (
    <View style={styles.container}>
    <Text style={styles.wodapp}>WODAPP</Text>
    <Text style={styles.welcome}>Bienvenue !</Text>
    <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
    <Text style={styles.text}>{title}</Text>
    </Pressable> 

   
  </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wodapp:{
    fontSize: 20,
    marginBottom: 15,
    color:'#3E3E3E',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 15,
    color:'#3E3E3E',
  },
  button:{
    alignSelf: 'center',
    backgroundColor:'#4282F4',
    paddingHorizontal: '25%',
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color:'#3E3E3E',
  },
 
});