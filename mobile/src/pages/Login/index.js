import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import image from './../../assets/fundo.png';

import api from './../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('jefferson14489@gmail.com');
  const [password, setPassword] = useState('');


  useEffect(() => {
    AsyncStorage.getItem('id').then(id => {
      if (id) {
        navigation.navigate('Home', { id });
      }
    });
  }, []);


  function navigateToForgot() {
    navigation.navigate('Forgot');
  }

  async function navigateToHome() {
    try {
      const response = await api.post('auth', { email });

      console.log(response.data);
      // Alert.alert(email)
      const { id } = response.data;

      await AsyncStorage.setItem('id', JSON.stringify(id));

      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Algo deu errado, tente novamente');
      console.log(error)
    }
  }


  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <View style={styles.ContainerText}>
          <Text style={styles.Titulo}>Login</Text>
        </View>

        <View style={styles.FormContainer}>
          <TextInput
            style={styles.FormInput}
            placeholder="Email"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChange={setEmail}
          />

          <TextInput
            style={styles.FormInput}
            placeholder="Password"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={e => setPassword(e.target.value)}
          />
          <TouchableOpacity onPress={navigateToForgot} style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot password ?</Text>
          </TouchableOpacity>
          <View style={styles.Form}>
            <TouchableOpacity style={styles.FormButtom} onPress={navigateToHome}>
              <Text style={styles.FormButtomText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
