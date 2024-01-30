import { fetch } from '@react-native-community/netinfo';
// import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();


// On Press
const handlePress = (url) => {
    console.log(url);
    // Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
    // const { url } = route.params;
    navigation.navigate('WebView',{url})
};

// App Reload
const reloadApp = () => {
    fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });
};

export { reloadApp, handlePress };