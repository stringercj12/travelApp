import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToback}>
                    <Ionicons name="ios-arrow-back" size={32} color="#312DA4" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Post</Text>
            </View>

            <View style={styles.boxDestinations}>
                <FlatList
                    style={styles.postList}
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
    );
}
