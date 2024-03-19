import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import { useState,useEffect } from 'react';
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import Firebase from '../firebase';

export default function Login({navigation}) {

const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const [user,setUser] = useState('');


const app = initializeApp(Firebase);
const auth = getAuth(app);


function login(){
  signInWithEmailAndPassword(auth,email,senha).catch(
    function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode + '' + errorMessage);
    }
  )
}

useEffect(()=>{
     onAuthStateChanged(auth,function(user){
         setUser(user);
         if(Initializing) setInitializing(false);
     });
},[])

useEffect(() => {
  if (user) {

      navigation.navigate('Home');
  }
}, [user, navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem Vindo ao seu Diario</Text>
    <ImageBackground source={'./assets/download.png'}>
      <Text style={styles.txt}>Login</Text>
      
      <TextInput
      style={styles.input}
      placeholder=':) digite seu email'
      onChangeText={(email)=>setEmail(email)}
      value={email}
      />
 
      <Text style={styles.txt}>Senha</Text>
      <TextInput
      style={styles.input}
      placeholder=':( digite sua senha'
      onChangeText={(senha)=>setSenha(senha)}
      value={senha}
      />

      <TouchableOpacity style={styles.botao}
      onPress={()=>{
        login();
      }}>
        <Text style={styles.botaotexto}>Logar</Text>
      </TouchableOpacity>
</ImageBackground>
      

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000',
  },
  input:{
    marginTop:20,
    backgroundColor:'#DCDCDC',
    width:250,
    height:30,
    color:'#DCDCDC',
  },
  txt:{
   color:'#DCDCDC',
  },
  titulo:{
    fontSize:40,
    color:'#DCDCDC',
  },
  botao:{
    width:250,
    backgroundColor:'#DCDCDC',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    borderRadius:150
  },
  botaotexto:{
    color: '#000000',
    fontSize:30
  }
});
