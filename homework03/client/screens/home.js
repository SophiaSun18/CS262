import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global'

export default function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPlayers = async () => {
        try {
        const response = await fetch('https://frozen-falls-21593.herokuapp.com/players')
        const json = await response.json();
        setData(json);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getPlayers();
      }, []);

    return (
        <View style={{ flex: 1, padding: 20}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList data={data} keyExtractor={({id}, index) => id} renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <View style={globalStyles.container}>
                        <Text>{'Player ' + item.id + ': ' + item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )}/>
            )}
        </View>
    );
}