import React, { useState } from 'react';
import { View, Picker } from 'react-native';

import styles from './styles';

export default function NewPost() {
    const [hand, setHand] = useState('right');
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={hand}
                onValueChange={setHand}
                // style={{ width: 160 }}
                mode="dropdown">
                <Picker.Item label="Right Hand" value="right" />
                <Picker.Item label="Left Hand" value="left" />
            </Picker>
        </View>
    );
}
