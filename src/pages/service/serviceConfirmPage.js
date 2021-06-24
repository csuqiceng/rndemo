import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function  ServiceConfirmPage({ route, navigation }) {
    /* 2. Get the param */
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}