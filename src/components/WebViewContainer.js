import React from 'react'
// import { Text, View, } from 'react-native'
import { WebView } from 'react-native-webview';

const WebViewContainer = ({route}) => {
    const { url } = route.params;
    return (
        <WebView
            source={{ uri: url }}
            style={{ flex:1 }}
        />
    )
}

export default WebViewContainer
