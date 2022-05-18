import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React,{useState}from 'react'
import Button from './Button'

function SignUp() {
  const [firstName, setFirstname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder ="Firstname" 
      onChangeText={(value) => setText(value)}
       value={firstName} 
      />
      <TextInput
      style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
      style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
      style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <Button
       text="Valider"
       buttonCustomStyles={{
         backgroundColor: "#4282F4",
         borderRadius: 8,
         marginTop: 10
       }}
       textCustomStyles={{
         color: "#3E3E3E"
       }}
      onPress={() => signIn({ name, password, firstName, email })} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
