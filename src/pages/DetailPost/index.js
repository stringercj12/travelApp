import React from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
// StatusBar.setTranslucent(true)
// import { Container } from './styles';

export default function DetailPost() {
    const navigation = useNavigation();

    function navigateToback() {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            {/* <StatusBar translucent={true} backgrounColor={'red'} barStyle='light-content' /> */}
            <View style={styles.boxImage}>
                <Image style={styles.image} source={require('./../../assets/Banff-National-Park2.png')} />
                <TouchableOpacity style={styles.headerIcon} onPress={navigateToback}>
                    <Ionicons name="ios-arrow-back" size={32} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.boxText}>
                <View style={styles.boxHeader}>
                    <Text style={styles.boxHeaderText}>Bali, Indonesia</Text>
                    <MaterialCommunityIcons name="bookmark-plus-outline" size={28} color="#fff" />
                </View>

                <View>
                    <Text style={styles.postText}>Etiam facilisis ligula nec velit posuere egestas.
                    Nunc dictum lectus sem, vel dignissim purus l
                    uctus quis. Vestibulum et ligula suscipit, hendre
                    rit erat a, ultricies velit. Praesent convallis in lore
                    m nec blandit. Phasellus a porta tellus. Suspend
                    isse sagittis metus enim.</Text>
                </View>

                <View>
                    <View style={styles.boxHeader}>
                        <Text>Bali, Indonesia</Text>
                        <Text>View all</Text>
                    </View>
                    <View>
                        <View style={styles.hotelCard}>
                            <View style={styles.hotelCardImage}>
                                {/* <Image source={require('./../../assets/Banff-National-Park2.png')} /> */}
                            </View>
                            <View style={styles.hotelCardInfo}>
                                <Text style={styles.hotelCardInfoTitulo}>Ramada Encore</Text>
                                <Text style={styles.hotelCardInfoTexto}>
                                    Etiam facilisis ligula nec velit posuere egestas.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
