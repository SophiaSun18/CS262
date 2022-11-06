import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global'

export default function DetailsScreen({ route, navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPlayerScore = async () => {
        try {
        const response = await fetch('https://frozen-falls-21593.herokuapp.com/playersScore/' + route.params.id)
        const json = await response.json();
        setData(json);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getPlayerScore();
      }, []);

    return (
        <View style={{ flex: 1, padding: 20}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList data={data} keyExtractor={({id}, index) => id} renderItem={({ item }) => (
                    <View style={globalStyles.container}>
                        <Text>{ item.score }</Text>
                    </View>
                )}/>
            )}
        </View>
    );
}