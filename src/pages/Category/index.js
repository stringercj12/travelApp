import React, { useState } from 'react';
import { View, Text, Picker, TextInput, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Category() {
  const [hand, setHand] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Header}>
          <Picker
            selectedValue={hand}
            onValueChange={setHand}
            style={{ width: 160 }}
            mode="dropdown">
            <Picker.Item label="Right Hand" value="right" />
            <Picker.Item label="Left Hand" value="left" />
          </Picker>

          <Text style={styles.HeaderText}>
            Category
          </Text>
        </View>


        <View style={styles.Search}>
          <TextInput style={styles.SearchInput} placeholder="Search" placeholderTextColor="#fff" />
        </View>
      </View>

      <View>
        <FlatList
          style={styles.breadcrumb}
          data={[
            { key: 1, text: 'Hotel' },
            { key: 2, text: 'River' },
            { key: 3, text: 'Mountain' },
            { key: 4, text: 'Lake' },
            { key: 5, text: 'City' }
          ]}
          keyExtractor={item => String(item.key)}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.breadcrumbButton}>
              <Text style={styles.breadcrumbText}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>






      <FlatList
        style={styles.PostList}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={item => String(item)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.Destinations}>
            <Image
              style={styles.DestinationsImage}
              source={require('./../../assets/Banff-National-Park2.png')}
            />
            <MaterialCommunityIcons style={styles.DestinationsIcon} name="bookmark-plus-outline" size={32} color="#fff" />
            <View style={styles.DestinationsText}>
              <Text style={styles.DestinationsTextCity}>Banff National Park</Text>
              <Text style={styles.DestinationsTextCountry}>Canada</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
}
