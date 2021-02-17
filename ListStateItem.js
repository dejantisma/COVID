import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export default function ListStateItem({ item, navigation }) {  

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.item}>
                <Text style={{ fontSize: 24 }} >{item.state}</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={(item.state == 'NY' || item.state == 'CA') ? require('./assets/greenUp.png') : null}>
                    </Image>
                    <Image style={{ width: 20, height: 20 }}
                        source={(item.state == 'ME' ) ? require('./assets/redDown.png') : null}>
                    </Image>
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }} >{item.total}</Text>
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
})