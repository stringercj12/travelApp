import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';
import image from './../../assets/fundo.png';

export default function Forgot({ navigation }) {

    function navigateToVerificationCode() {
        navigation.navigate('VerificationCode');
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
                        placeholder="Informe seu e-mail"
                        autoCapitalize="none"
                        autoFocus={false}
                        autoCorrect={false}
                    />

                    <View style={styles.Form}>
                        <TouchableOpacity style={styles.FormButtom} onPress={navigateToVerificationCode}>
                            <Text style={styles.FormButtomText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
