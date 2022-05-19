import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState }from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Pressable} from 'react-native'


function SignIn({ navigation },props) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { onPress, title = 'Valider' } = props;
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
       <Pressable style={styles.button} onPress={() => navigation.navigate('WODAPP')}>
    <Text style={styles.text}>{title}</Text>
    </Pressable> 
    
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
    alignSelf: 'center',
    backgroundColor:'#4282F4',
    paddingHorizontal: '25%',
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color:'#3E3E3E',
  },
  link:{
    color:'#4282F4',
  }
})
export default SignIn
