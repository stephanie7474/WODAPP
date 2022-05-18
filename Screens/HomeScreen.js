import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
 
  return (
    <View style={styles.container}>
    <Text>Bienvenue !</Text>
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
       onPress={() =>navigation.navigate('')}
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
})
export default HomeScreen