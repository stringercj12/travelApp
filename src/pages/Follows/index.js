import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Post() {
    const navigation = useNavigation();

    function navigateToback() {
        navigation.goBack();
    }

    function navigateToDetailsPost() {
        navigation.navigate('DetailPost');
    }

    function notFollow() {
        alert("Não seguindo")
    }

    function confirmFollow() {
        alert("Confirmado seguindo")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToback}>
                    <Ionicons name="ios-arrow-back" size={32} color="#312DA4" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Follow requests</Text>
            </View>

            <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff" />
                <Feather style={styles.searchInputIcon} name="search" size={18} color="#000" />
            </View>

            <View style={styles.boxFallows}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={item => String(item)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.follows}>
                            <Image
                                style={styles.followAvatar}
                                source={require('./../../assets/Elipse244.png')}
                            />
                            <View style={styles.followData}>
                                <Text style={styles.followName}>Jessica Stanley</Text>

                                <TouchableOpacity style={styles.followButtonConfirm} onPress={confirmFollow}>
                                    <Text style={styles.followButtonText}>Confirm</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.followButtonCancel} onPress={notFollow}>
                                    <Feather name="x" size={18} color="#D50000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
