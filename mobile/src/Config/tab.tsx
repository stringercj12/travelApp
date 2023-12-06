import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
interface tabBarIconProps {
    focused: boolean;
    color: string;
    size: number;
}

interface Config {
    [key: string]: BottomTabNavigationOptions;
}



export const Config: Config = {
    HomeIcon: {
        headerShown: false,
        tabBarIcon: ({ color, size }: tabBarIconProps) => <Ionicons name='ios-home' color={color} size={size} />
    },
    GridIcon: {
        tabBarIcon: ({ color, size }: tabBarIconProps) => <Feather name='grid' color={color} size={size} />

    },
    NewPostIcon: {
        tabBarIcon: ({ size }: tabBarIconProps) => ( //colors={['#D500F9', '#4A148C']}
            <View>
                <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#F38000', '#F38000']}>
                    <Ionicons name="ios-add" size={size} color='#FFF' />
                </LinearGradient>
            </View>
        ),
    },
    FavoriteIcon: {
        tabBarIcon: ({ color, size }: tabBarIconProps) => <MaterialCommunityIcons name='bookmark-plus-outline' color={color} size={size} />
    },
    ProfileIcon: {
        tabBarIcon: ({ color, size }: tabBarIconProps) => <AntDesign name='user' color={color} size={size} />
    },
    PlusIcon: {
        tabBarIcon: ({ color, size }: tabBarIconProps) => <Feather name='plus' color={color} size={size} />
    },
}



const styles = StyleSheet.create({
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#F38000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});