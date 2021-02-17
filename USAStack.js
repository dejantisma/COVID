import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';
import USA from './USA';

export default function USAStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="USA" component={USA} />
            <Stack.Screen name="Details" component={Details} options={({ route }) => ({ title: route.params.state })} />
        </Stack.Navigator>
    )
}