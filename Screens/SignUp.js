import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button,} from 'react-native'
import React,{useState}from 'react'


const SignUp =({navigation}) => {
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
         <Button style={[styles.button,styles.color]} title="Valider" onPress={() => navigation.navigate('Login')}/>
            
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
  // },
  // wrapper:{
  //   width:'80%',
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
export default SignUp
