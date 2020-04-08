import React, { useState, useEffect } from 'react';
import { View, Picker, TextInput, Image, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Input from './../../Config/inputs';
import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

export default function NewPost() {
    const [hand, setHand] = useState('');
    const [picture, setPicture] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        permissionsCamera();
    }, []);


    // async function permissionsCamera() {
    //     if (Constants.platform.ios) {
    //         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //         if (status !== 'granted') {
    //             console.log('Sorry, we need camera roll permissions to make this work!');
    //         }
    //     }
    // }
    // async function pickImage() {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setPreviewImage(result.uri);
    //     }
    // };


    function navigateToback() {
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToback}>
                    <Ionicons name="ios-arrow-back" size={32} color="#312DA4" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Post</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View
                    style={styles.picker}>
                    <Picker
                        // itemStyle={{ color: '#fff' }}
                        selectedValue={hand}
                        onValueChange={setHand}
                        // style={{ width: 160 }}
                        placeholder="Country"
                        mode="dropdown">
                        <Picker.Item label="Country" value="" />
                        <Picker.Item label="Right Hand" value="right" />
                        <Picker.Item label="Left Hand" value="left" />
                    </Picker>
                </View>
                <View>
                    <View style={styles.picture}>
                        {/* <TouchableOpacity onPress={pickImage} >
                            <Text>Clique</Text>
                        </TouchableOpacity> */}
                        {/* {previewImage && (
                            <Image source={previewImage} style={{ width: 200, height: 200 }} />)} */}
                        {/* <TextInput
                            onChangeText={setPicture}
                            value={picture}
                            placeholder="Choose Picture"
                            placeholderTextColor="#3b3b3b"
                        /> */}
                        <Text>Choose Picture</Text>
                        <Ionicons name="md-images" size={22} color="#3b3b3b" />
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPicture}
                        value={picture}
                        placeholder="Place"
                        placeholderTextColor="#3b3b3b"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPicture}
                        value={picture}
                        placeholder="About Photo"
                        placeholderTextColor="#3b3b3b"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
