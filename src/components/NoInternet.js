import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import style from '../styles/style'
import { reloadApp } from './allFunc';

export default function NoInternet() {
    return (
        <View style={style.NoInternetContainer}>
            <Text style={style.NoInternetText}>No Internet Connection</Text>
            <Button mode="contained" style={style.NoInternetBtn} onPress={reloadApp}>
                Try Again
            </Button>
        </View>
    )
}
