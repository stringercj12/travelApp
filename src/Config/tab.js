import React from 'react';

import {
    Ionicons,
    AntDesign,
    Feather,
    MaterialCommunityIcons
} from '@expo/vector-icons';
export const Config = {
    HomeIcon: {
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' color={color} size={size} />
        )
    },
    PostIcon: {
        tabBarIcon: ({ color, size }) => (
            <Feather name='grid' color={color} size={size} />
        ),
        
    },
    PlusIcon: {
        tabBarIcon: ({ color, size }) => (
            <Feather name='plus' color={color} size={size} />
        )
    },
    CategoryIcon: {
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bookmark-plus-outline' color={color} size={size} />
        )
    },
    ProfileIcon: {
        tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
        )
    },
}