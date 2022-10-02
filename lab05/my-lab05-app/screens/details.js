import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, padding: 20}}>
            <Text>{ route.params.title }</Text>
            <Text>{ route.params.rating }</Text>
            <Text>{ route.params.description }</Text>
        </View>
    );
}