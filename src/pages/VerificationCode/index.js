import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

import styles from './styles';
import image from './../../assets/fundo.png';

export default function VerificationCode() {
    return (
        <ImageBackground source={image} style={styles.image}>
            <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
                <View style={styles.ContainerText}>
                    <Text style={styles.Titulo}>Verification code</Text>
                </View>

                <View style={styles.FormContainer}>
                    <TextInput
                        style={styles.FormInput}
                        placeholder="Enter Your Verification Code"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={styles.Form}>
                        <TouchableOpacity style={styles.FormButtom}>
                            <Text style={styles.FormButtomText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
