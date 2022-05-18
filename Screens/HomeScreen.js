import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

export default function HomeScreen(props) {
 
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Bienvenue !</Text>
    <Button
         text="Se Connecter !"
       buttonCustomStyles={{
         backgroundColor: "#4282F4",
         borderRadius: 8,
         marginTop: 10
       }}
       textCustomStyles={{
         color: "#3E3E3E"
       }}
       onPress={() =>navigation.navigate('SignIn')}
     />
     <Button
       text="Creer un compte !"
       buttonCustomStyles={{
         backgroundColor: "#4282F4",
         borderRadius: 8,
         marginTop: 10
       }}
       textCustomStyles={{
         color: "#3E3E3E"
       }}
       onPress={() => navigation.navigate('SignUp')}
     />
   
  </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  }
});