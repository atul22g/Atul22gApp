import React from 'react'
import Main from './src/components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewContainer from './src/components/WebViewContainer';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="WebView" component={WebViewContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}