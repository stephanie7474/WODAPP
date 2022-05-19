import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState }from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native'


function SignIn({ navigation }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>WODAPP</Text>
    <Text style={styles.welcome}>Bienvenue</Text>
   <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
      style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
     <Button style={styles.button} title="Valider"onPress={() => navigation.navigate('WODAPP')} />

     <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>S'enregister</Text>
          </TouchableOpacity>
        </View>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
    paddingHorizontal: 14,
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
  link:{
    color:'#4282F4',
  }
})
export default SignIn
