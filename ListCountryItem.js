import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export default function ListCountryItem({ item, navigation }) {  

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.item}>
                <Text style={{ fontSize: 24 }} >{item.title}</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>{item.total_cases}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});