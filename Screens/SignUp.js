import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button, Pressable} from 'react-native'
import React,{useState}from 'react'


const SignUp =({navigation},props) => {
  const [firstName, setFirstname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onPress, title = 'Valider' } = props;

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
        placeholder="Enter name"
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
       <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
    <Text style={styles.text}>{title}</Text>
    </Pressable> 
    
            
         <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have on account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
export default SignUp
