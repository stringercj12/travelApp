import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import api from './../../services/api';

export default function Post() {
    const [posts, setPosts] = useState([]);
    const navigation = useNavigation();

    function navigateToback() {
        navigation.goBack();
    }

    function navigateToDetailsPost() {
        navigation.navigate('DetailPost');
    }
    async function loadPost() {
        const response = await api.get('post/all');

        const posts = response.data;

        setPosts(posts);
    }

    useEffect(() => {
        loadPost();
    }, []);

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
                    data={posts}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.destinations}>
                            <Image
                                style={styles.destinationsImage}
                                source={item.image}
                            />
                            <MaterialCommunityIcons style={styles.destinationsIcon} name="bookmark-plus-outline" size={32} color="#fff" />
                            <View style={styles.destinationsText}>
                                <View>
                                    <Text style={styles.destinationsTextCity}>{item.name}</Text>
                                    <Text style={styles.destinationsTextCountry}>{item.country}</Text>
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
