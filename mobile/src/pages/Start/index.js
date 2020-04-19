import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from "./styles";
import image from './../../assets/fundo.png';

export default function Start({ navigation }) {

    function navigateToLogin() {
        navigation.navigate('Login');
    }
    function navigateToRegister() {
        navigation.navigate('Register');
    }

	
	useEffect(() => {
    AsyncStorage.getItem('id').then(id => {
      if (id) {
        navigation.navigate('Home', { id });
      }
    });
  }, []);
	
    return (
        <ImageBackground source={image} style={styles.image}>
            <View style={styles.Container}>
                {/* <Text style={styles.Texto}>Start</Text> */}

                {/* <View style={styles.ButtonArea}>
                </View> */}

                <TouchableOpacity style={styles.Button} onPress={navigateToLogin}>
                    <Text style={styles.Texto}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={navigateToRegister}>
                    <Text style={styles.Texto}>Create account</Text>
                </TouchableOpacity>
            </View >
        </ImageBackground>
    );
}
