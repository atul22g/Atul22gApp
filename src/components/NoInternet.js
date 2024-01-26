import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import { fetch } from '@react-native-community/netinfo';
import style from '../styles/style'

export default function NoInternet() {
    const reloadApp = () => {
        fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
        });
    };

    return (
        <View style={style.NoInternetContainer}>
            <Text style={style.NoInternetText}>No Internet Connection</Text>
            <Button mode="contained" style={style.NoInternetBtn} onPress={reloadApp}>
                Try Again
            </Button>
        </View>
    )
}
