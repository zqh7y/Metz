import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Create from './src/screens/Create';
import Confirm from './src/screens/Confirm';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Kan': require('./fonts/Kan.ttf'),
    'Pac': require('./fonts/Pac.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} navigation={navigation} />
        <Stack.Screen name="Create" component={Create} navigation={navigation} />
        <Stack.Screen name="Confirm" component={Confirm} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}