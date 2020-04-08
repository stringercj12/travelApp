import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { LinearGradient } from 'react-native-linear-gradient';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// import { Container } from './styles';

import Login from './pages/Login';
import Start from './pages/Start';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import VerificationCode from './pages/VerificationCode';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Category from './pages/Category';
import Post from './pages/Post';
import DetailPost from './pages/DetailPost';
import NewPost from './pages/NewPost';
import Favorites from './pages/Favorites';
import Follows from './pages/Follows';
import Settings from './pages/Settings';
import Hotels from './pages/Hotels';

import { Config } from './Config/tab';

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Settings">
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{ drawerLabel: 'Home' }}
            />
        </Drawer.Navigator>
    );
}


function MainTabNavigator() {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#463EC9',
            inactiveTintColor: '#777',
            showLabel: false,
        }}>
            <Tab.Screen name='Home' component={Home} options={Config.HomeIcon} />
            <Tab.Screen name='Category' component={Category} options={Config.GridIcon} />
            <Tab.Screen
                name="NewPost"
                component={NewPost}
                options={Config.NewPostIcon}
            />
            <Tab.Screen name='Favorites' component={Favorites} options={Config.FavoriteIcon} />
            <Tab.Screen name='Profile' component={Profile} options={Config.ProfileIcon} />
        </Tab.Navigator>
    );
}


export default function Routes() {
    return (

        <Stack.Navigator initialRouteName="Start">
            {/* <StatusBar backgroundColor="transparent"/> */}
            <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="VerificationCode" component={VerificationCode} />
            <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="DetailPost" component={DetailPost} options={{ headerShown: false }} />
            <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
            <Stack.Screen name="Follows" component={Follows} options={{ headerShown: false }} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Hotels" component={Hotels} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

