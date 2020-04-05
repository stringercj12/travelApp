import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import image from './../../assets/fundo.png';

export default function Register() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <View style={styles.ContainerText}>
          <Text style={styles.Titulo}>Create Account</Text>
        </View>

        <View style={styles.FormContainer}>
          <TextInput
            style={styles.FormInput}
            placeholder="Nome"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
          />

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


          <TextInput
            style={styles.FormInput}
            placeholder="Confim Password"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.Form}>
            <TouchableOpacity style={styles.FormButtom}>
              <Text style={styles.FormButtomText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
