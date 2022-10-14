import React, { useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global'

export default function HomeScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPlayers = async () => {
        try {
        const response = await fetch('https://github.com/calvin-cs262-organization/monopoly-service/blob/master/sql/monopoly.sql');
        const json = await response.json();
        setData(json.Player);
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
                        <Text>{item.email}</Text>
                    </View>
                    </TouchableOpacity>
                )}/>
            )}
        </View>
    );
}