import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import titleImage from './assets/title.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={titleImage} style={styles.titleImage} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.rememberMeContainer}>
          <Text style={styles.rememberMeText}>Lembre de mim</Text>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <View style={[styles.checkbox, rememberMe && styles.checked]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87C4FF'
  },
  box: {
    backgroundColor: '#FFFFF0',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center'
  },
  titleImage: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20 // Aumentando o espaçamento entre 'Lembre de mim' e o botão
  },
  rememberMeText: {
    marginRight: 10,
    color: 'black'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000080'
  },
  checked: {
    backgroundColor: '#00008B'
  },
  loginButton: {
    backgroundColor: '#5464bf',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default LoginScreen;
