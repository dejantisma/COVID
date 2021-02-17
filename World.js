import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, ActivityIndicator, FlatList, Button, Alert, View } from 'react-native';
import ListCountryItem from './ListCountryItem';

export default function World({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [result, setResult] = useState([]);
    var countries=[];

    const sortByCases = (ascOrDesc) => {
        if (ascOrDesc == "ascending") {
            console.log("Sorting by cases ascending")
            countries.sort(function (a, b) {
                return a.total_cases - b.total_cases
            })
    
    
        } else {
            console.log("Sorting by cases descending")
            countries.sort(function (a, b) {
                return b.total_cases - a.total_cases
            })
        }
    
    }
    
    const sortByCountries = (ascOrDesc) => {
        if (ascOrDesc == "ascending") {
            console.log("Sorting by states ascending")
            countries.sort(function (a, b) {
                return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
            })
    
        } else {
            console.log("Sorting by states descending")
            countries.sort(function (a, b) {
                return (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0);
            })
    
        }
    }


    useEffect(() => {
        fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL.json')
            .then((response) => response.json())
            .then((json) => setResult(json.countryitems[0]))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])

    


    for (index = 0; index < Object.entries(result).length; index++) { 
        countries.push(Object.entries(result)[index][1]);
    } //api didn't return a list of objects.. it was messy


    navigation.setOptions({
        headerRight: () => (
            <Button title="Sort" onPress={() => Alert.alert('Sort', '',
                [{ text: "By cases (descending)", onPress: () => { sortByCases("descending") } },
                { text: "By cases (ascending)", onPress: () => { sortByCases("ascending") } },
                { text: "By countries (A-Z)", onPress: () => { sortByCountries("ascending") } },
                { text: "By countries (Z-A)", onPress: () => { sortByCountries("descending") } },
                { text: "Cancel", onPress: () => console.log("Canceling"), style: 'cancel' }
                ])} />
        ),
    });

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" style={styles.center} /> : (
                <FlatList
                    data={countries}
                    keyExtractor={({ ourid }) => ""+ourid}
                    renderItem={({ item }) => (
                        <ListCountryItem item={item} navigation={navigation}></ListCountryItem>
                    )}
                />
            )}
        </View>
    )
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