import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import image from './../../assets/fundo.png';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigation()


  function create() {

    if (password != confirmPassword) {
      return Alert.alert('As senhas não combinam');
    }

    try {
      const response = api.post('create', {
        nome,
        email,
        password
      });

      if (response) {
        return navigate.navigate('home');
      }

    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente');
      console.log(error)
    }
  }


  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <View style={styles.ContainerText}>
          <Text style={styles.Titulo}>Create Account</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.FormContainer}>
            <TextInput
              style={styles.FormInput}
              placeholder="Nome"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.FormInput}
              placeholder="Email"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />


            <TextInput
              style={styles.FormInput}
              placeholder="Password"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />


            <TextInput
              style={styles.FormInput}
              placeholder="Confim Password"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />


            <View style={styles.Form}>
              <TouchableOpacity style={styles.FormButtom} onPress={create}>
                <Text style={styles.FormButtomText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
