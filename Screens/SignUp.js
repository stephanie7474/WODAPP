import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React,{useState}from 'react'

function SignUp() {
  const [firstName, setFirstname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <View style={styles.container}>
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
      <Button title="Sign in" onPress={() => signIn({ name, password, firstName, email })} />
    </View>
  );
}


export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#4282F4',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#4282F4',
    borderWidth: 2,
  },
  buttonText: {
    color: '#3E3E3E',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#3E3E3E',
    fontWeight: '700',
    fontSize: 16,
  },
})