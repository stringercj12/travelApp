import React, { useState } from 'react';
import { View, Text, Picker, TextInput, FlatList, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons';
import styles from './styles';
import glabalStyles from './../../Config/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Category() {
  const [hand, setHand] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Header}>
          <View style={styles.headerPicker}>
            <Picker
              selectedValue={hand}
              onValueChange={setHand}
              mode="dropdown"
              style={styles.headerPickerText}>
              <Picker.Item label="Country" value="" />
              <Picker.Item label="Brasil" value="Brasil" />
              <Picker.Item label="EUA" value="EUA" />
              <Picker.Item label="Alemanha" value="Alemanha" />
              <Picker.Item label="Japão" value="Japão" />
              <Picker.Item label="Itália" value="Itália" />
              <Picker.Item label="Espanha" value="Espanha" />
            </Picker>
          </View>

          <Text style={styles.HeaderText}>
            Category
          </Text>
        </View>


        <View style={styles.search}>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff" />
          <Feather style={styles.searchInputIcon} name="search" size={18} color="#000" />
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
          <View style={[styles.Destinations, glabalStyles.shadow]}>
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
