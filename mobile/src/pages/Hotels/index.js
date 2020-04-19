import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function Hotels() {
    const navigation = useNavigation();

    function navigateToback() {
        navigation.goBack();
    }

    function navigateToDetailsPost() {
        navigation.navigate('DetailPost');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToback}>
                    <Ionicons name="ios-arrow-back" size={32} color="#312DA4" />
                </TouchableOpacity>
                <View style={styles.search}>
                    <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff" />
                    <Feather style={styles.searchInputIcon} name="search" size={18} color="#000" />
                </View>
            </View>

            <View style={styles.boxDestinations}>
                <Text style={{ fontSize: 18, color: '#321da4', marginTop: 15, marginBottom: 15, fontWeight: 'bold' }}>Best Hotel in Bali</Text>
                <View
                    style={styles.postList}>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        keyExtractor={item => String(item)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.destinations}>
                                <Image
                                    style={styles.destinationsImage}
                                    source={require('./../../assets/Banff-National-Park2.png')}
                                />
                                <MaterialCommunityIcons style={styles.destinationsIcon} name="bookmark-plus-outline" size={32} color="#fff" />
                                <View style={styles.destinationsText}>
                                    <View>
                                        <Text style={styles.destinationsTextCity}>Banff National Park</Text>
                                        <Text style={styles.destinationsTextCountry}>Canada</Text>
                                    </View>
                                    <TouchableOpacity onPress={navigateToDetailsPost}>
                                        <Text style={styles.destinationsButtonText}>Visitar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}
