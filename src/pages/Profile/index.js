import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import imagePost from './../../assets/Banff-National-Park2.png';
// StatusBar.setTranslucent(true)

export default function Profile() {
    return (
        <View style={styles.container}>
            {/* <StatusBar translucent={true} backgrounColor={'red'} barStyle='light-content' /> */}
            <View style={styles.boxImage}>
                <Image style={styles.image} source={require('./../../assets/Banff-National-Park2.png')} />
                {/* <TouchableOpacity style={styles.headerIcon} onPress={() => {}}>
                    <Ionicons name="ios-arrow-back" size={32} color="#fff" />
                </TouchableOpacity> */}
                <View>
                    <Image style={styles.avatar} source={require('./../../assets/Elipse244.png')} />
                    <View style={styles.camera}>
                        <Ionicons name="ios-camera" size={22} color="#3b3b3b" />
                    </View>
                </View>
            </View>

            <View style={styles.detailsProfile}>
                <Text style={styles.detailsProfileName}>Michelle Garrett</Text>
                <Text style={styles.detailsProfileEmail}>joe.lawson@mail.com</Text>
            </View>
            <View style={styles.detailsProfileStatus}>
                <View style={styles.detailsProfileStatusFollowing}>
                    <Text style={styles.FollowingNumber}>
                        320
                    </Text>
                    <Text style={styles.FollowingText}>
                        Following
                    </Text>
                </View>
                <View style={styles.detailsProfileStatusFollowers}>
                    <Text style={styles.FollowingNumber}>
                        320
                    </Text>
                    <Text style={styles.FollowingText}>
                        Followers
                    </Text>
                </View>
            </View>

            <ScrollView style={{ paddingHorizontal: 24 }}>
                <View>
                    <View style={styles.showPost}>
                        <Text style={styles.showPostText}>Your Post</Text>
                        <TouchableOpacity style={styles.showPostButton} onPress={() => { }}>
                            <Text style={styles.showPostButtonText}>View All</Text>
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
                            <View style={styles.posts}>
                                <View style={styles.postsImages}>
                                    <Image
                                        style={styles.postsImage}
                                        source={imagePost}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>

                <View>
                    <View style={styles.showPost}>
                        <Text style={styles.showPostText}>Add To Favorite</Text>
                        <TouchableOpacity style={styles.showPostButton} onPress={() => { }}>
                            <Text style={styles.showPostButtonText}>View All</Text>
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
                            <View style={styles.posts}>
                                <View style={styles.postsImages}>
                                    <Image
                                        style={styles.postsImage}
                                        source={imagePost}
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View >
    );
}
