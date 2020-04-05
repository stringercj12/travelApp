import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { LinearGradient } from 'react-native-linear-gradient';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

import { Config } from './Config/tab';

function MainTabNavigator() {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#F38000',
            inactiveTintColor: '#777',
            showLabel: false,
        }}>
            <Tab.Screen name='Home' component={Home} options={Config.HomeIcon} />
            <Tab.Screen name='Post' component={NewPost} options={Config.PostIcon} />
            <Tab.Screen
                name="NewPost"
                component={NewPost}
                options={() => ({
                    tabBarIcon: ({ tintColor }) => ( //colors={['#D500F9', '#4A148C']}
                        <View>
                            <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#F38000']}>
                                <Ionicons name="ios-add" size={26} color='#FFF' />
                            </LinearGradient>
                        </View>
                    ),
                })}
            />

            <Tab.Screen name='Category' component={Category} options={Config.CategoryIcon} />
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
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
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