import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DogDetailsScreen from './screens/DogDetailsScreen';
import AdoptionFormScreen from './screens/AdoptionFormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f7b731' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Adopta una mascota' }} />
        <Stack.Screen name="DogDetails" component={DogDetailsScreen} options={{ title: 'Detalles de la mascota' }} />
        <Stack.Screen name="AdoptionForm" component={AdoptionFormScreen} options={{ title: 'Formulario de Adopción' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
