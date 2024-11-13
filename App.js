import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import Dashboard from './screens/Dashboard';
import Diesel from './screens/Diesel';
import Gas from './screens/Gas';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DashBoard" component={Dashboard} />
          <Stack.Screen name="Diesel" component={Diesel} />
          <Stack.Screen name="Gas" component={Gas} />
   

        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
