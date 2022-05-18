import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState }from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button} from 'react-native'


function SignIn({ navigation }) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
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
    <Button text="Valider" onPress={() => navigation.goBack()} />
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
