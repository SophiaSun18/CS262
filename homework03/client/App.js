import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from "./screens/about.js";
import Header from './shared/header.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Players">
        <Stack.Screen name="Players" component={HomeScreen}
          options={({ navigation }) => ({headerRight: () => (<Header navigation={navigation}/>)})}/>
        <Stack.Screen name="Details" component={DetailsScreen}
          options={({ navigation }) => ({headerRight: () => (<Header navigation={navigation}/>)})}/>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
