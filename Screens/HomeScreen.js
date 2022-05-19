import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'


export default function HomeScreen(props) {
 const {Login}= useNavigation
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>WODAPP</Text>
    <Text style={styles.welcome}>Bienvenue</Text>
    <Button style={styles.button} title="Mes WOD"onPress={() => navigation.navigate('Login')} />

   
  </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
  button:{
    justifyContent:'center',
    padding: 10,
    marginTop: 1,
    marginBottom: 50,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#4282F4',
    borderRadius:10,
    color:'#3E3E3E',
  },
 
});