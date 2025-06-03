import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/Navigatios';

import LoginScreen from './src/screens/LoginScreen';
import MaterialesScreen from './src/screens/MaterialesScreen';
import UsuariosScreen from './src/screens/UsuariosScreen';
import LugaresScreen from './src/screens/LugaresScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Materiales" component={MaterialesScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
        <Stack.Screen name="Lugares" component={LugaresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
