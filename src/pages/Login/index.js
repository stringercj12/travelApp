import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import image from './../../assets/fundo.png';

export default function Login({ navigation }) {

  function navigateToForgot() {
    navigation.navigate('Forgot');
  }

  function navigateToHome() {
    navigation.navigate('Home');
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
          />

          <TextInput
            style={styles.FormInput}
            placeholder="Password"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
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
