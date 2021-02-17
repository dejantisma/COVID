import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import World from './World';
import WorldDetails from './WorldDetails';

export default function WorldStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="World" component={World} />
            <Stack.Screen name="Details" component={WorldDetails} options={({ route }) => ({ title: route.params.title })} />
        </Stack.Navigator>
    )
}