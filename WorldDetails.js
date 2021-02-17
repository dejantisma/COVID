import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet,Text, View } from 'react-native';
export default function WorldDetails({ navigation, route }) {
    return (
      <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{ padding: 16, fontSize: 38, textAlign: "center" }}>Total cases</Text>
                <Text style={{ fontSize: 30, textAlign: "center", color: '#000' }}>{route.params.total_cases}</Text>
            </View>

            <View style={styles.card}>
                <Text style={{ padding: 16, fontSize: 38, textAlign: "center", color: "red" }}>Total deaths</Text>
                <Text style={{ fontSize: 30, textAlign: "center", color: 'red' }}>{route.params.total_deaths}</Text>
            </View>

            <View style={styles.card}>
                <Text style={{ padding: 16, fontSize: 38, textAlign: "center", color: "green" }}>Total recovered</Text>
                <Text style={{ fontSize: 30, textAlign: "center", color: 'green' }}>{route.params.total_recovered}</Text>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // backgroundColor:'#'

    },
    card: {
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: .3,
        height: 150
    }

});