import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, padding: 20}}>
            <Text>{ route.params.emailaddress }</Text>
            <Text>{ 'ID: ' + route.params.id }</Text>
            <Text>{ 'Aka: ' + route.params.name }</Text>
        </View>
    );
}