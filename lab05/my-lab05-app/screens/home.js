import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global'

export default function HomeScreen({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: "Fellowship of the Ring", rating: 8.8, key: '1',
            description: "Some hobbits begin a quest."},
        { title: "Two Towers", rating: 8.7, key: '2',
            description: 'Some dark lords try to take over the world.'},
        { title: "Return of the King", rating: 8.9, key: '3',
            description: 'The dark lords are defeated, to much rejoicing.'},
    ]);
  
    return (
        <View style={{ flex: 1, padding: 20}}>
            <FlatList data={reviews} renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                  <View style={globalStyles.container}>
                    <Text>{ item.title }</Text>
                  </View>
                </TouchableOpacity>
            )} />
        </View>
    );
}