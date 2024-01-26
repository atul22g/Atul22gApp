import { fetch } from '@react-native-community/netinfo';
import { Linking } from 'react-native'

// On Press
const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
};

// App Reload
const reloadApp = () => {
    fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });
};

export { reloadApp, handlePress };