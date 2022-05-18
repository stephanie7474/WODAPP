import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState }from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import Button from './Button'

function SignIn({ navigation }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Se connecter</Text>
      <TextInput
      style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
      style={[styles.input, styles.inputContainer]}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
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
       onPress={() => navigation.navigate('SignUp')}
     />
    </View>
  );
}
export default SignIn

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
