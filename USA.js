import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Button, View, Alert } from 'react-native';
import ListStateItem from './ListStateItem';

export default function USA({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const sortByCases = (ascOrDesc) => {
        if (ascOrDesc == "ascending") {
            console.log("Sorting by cases ascending")
            countries.sort(function (a, b) {
                return a.total - b.total
            })
    
    
        } else {
            console.log("Sorting by cases descending")
            countries.sort(function (a, b) {
                return b.total - a.total
            })
        }

    }
    
    const sortByStates = (ascOrDesc) => {
        if (ascOrDesc == "ascending") {
            console.log("Sorting by states ascending")
            countries.sort(function (a, b) {
                return (a.state > b.state) ? 1 : ((b.state > a.state) ? -1 : 0);
            })
    
        } else {
            console.log("Sorting by states descending")
            countries.sort(function (a, b) {
                return (b.state > a.state) ? 1 : ((a.state > b.state) ? -1 : 0);
            })
    
        }

    }


    useEffect(() => {
        fetch('https://covidtracking.com/api/v1/states/current.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])


    countries = data.slice(0);

    navigation.setOptions({
        headerRight: () => (
            <Button title="Sort" onPress={() => Alert.alert('Sort', '',
                [{ text: "By cases (descending)", onPress: () => { sortByCases("descending") } },
                { text: "By cases (ascending)", onPress: () => { sortByCases("ascending") } },
                { text: "By states (A-Z)", onPress: () => { sortByStates("ascending") } },
                { text: "By states (Z-A)", onPress: () => { sortByStates("descending") } },
                { text: "Cancel", onPress: () => console.log("Canceling"), style: 'cancel' }
                ])} />
        ),
    });

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" style={styles.center} /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ state }) => state}
                    renderItem={({ item }) => (
                        <ListStateItem item={item} navigation={navigation}></ListStateItem>
                    )}
                />
            )}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    center: {
        flexDirection: "row"

    }
});