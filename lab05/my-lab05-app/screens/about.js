import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, padding: 20}}>
            <Text>{ 'This application lists movies and movie reviews.' }</Text>
        </View>
    );
}