import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import globalStyles from './../../Config/globalStyles';
import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
    const [followStatus, setFollowStatus] = useState('')
    const navigation = useNavigation();

    function navigateToback() {
        navigation.goBack();
    }

    function navigateToFollows() {
        navigation.navigate('Follows');
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
                <Text style={styles.headerText}>My Favorites</Text>
            </View>

            <View style={styles.follow}>
                <Text style={styles.followText}>Follow requests</Text>
                <TouchableOpacity style={styles.followButton} onPress={navigateToFollows}>
                    <Text style={styles.followButtonText}>
                        120
                    </Text>
                    <View style={[styles.followButtonIcon, styles.followSuccess]}></View>
                </TouchableOpacity>
            </View>

            <View style={styles.boxDestinations}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={item => String(item)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={globalStyles.destinations}>
                            <Image
                                style={globalStyles.destinationsImage}
                                source={require('./../../assets/Banff-National-Park2.png')}
                            />
                            <MaterialCommunityIcons style={globalStyles.destinationsIcon} name="bookmark-plus-outline" size={32} color="#fff" />
                            <View style={globalStyles.destinationsText}>
                                <View>
                                    <Text style={globalStyles.destinationsTextCity}>Banff National Park</Text>
                                    <Text style={globalStyles.destinationsTextCountry}>Canada</Text>
                                </View>
                                <TouchableOpacity style={globalStyles.destinationsButton} onPress={navigateToDetailsPost}>
                                    <Text style={globalStyles.destinationsButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View >
    );
}
