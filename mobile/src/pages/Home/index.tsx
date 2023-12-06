import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { List } from 'phosphor-react-native';

import styles from './styles';
import glabalStyles from '../../Config/globalStyles';

export default function Home() {

    const navigation = useNavigation();


    function navigateToPost() {
        navigation.navigate('Post');
    }

    function navigateToDrawer() {
        // DrawerActions.openDrawer();
        // navigation.openDrawer();
        Alert.alert('Este menu ainda não foi implementado');
    }

    function navigateToDetailsPost() {
        navigation.navigate('DetailPost');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToDrawer}>
                    <List size={32} color="#312DA4" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff" />
                <Feather style={styles.searchInputIcon} name="search" size={18} color="#000" />
            </View>

            <View>
                <View style={styles.showPost}>
                    <Text>Show Post</Text>
                    <TouchableOpacity onPress={navigateToPost}>
                        <MaterialIcons style={styles.headerIcon} name="keyboard-arrow-right" size={32} color="#312DA4" />
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={styles.lugarList}
                    data={[1, 2, 3, 4, 5]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => String(item)}
                    // onEndReached={loadIncidents}
                    // onEndReachedThreshold={0.2}
                    renderItem={({ item }) => (
                        <View style={styles.paises}>
                            <View style={styles.paisesItem}>
                                <Image
                                    style={styles.paisesImage}
                                    // style={{ width: 66, height: 58 }}
                                    source={require('./../../assets/canada.png')}
                                />
                                <Text style={styles.paisesText}>Canada</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={styles.boxDestinations}>
                <View style={styles.showPost}>
                    <Text>Popular Destination</Text>
                    <TouchableOpacity style={styles.showPostButton} onPress={navigateToPost}>
                        <Text style={styles.showPostButtonText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.postList}
                    data={[1, 2, 3, 4, 5]}
                    keyExtractor={item => String(item)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={[styles.destinations, glabalStyles.shadow]}>
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
