import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsuariosScreen from '../screens/UsuariosScreen';
//import LugaresScreen from '../screens/LugaresScreen';
import MaterialesScreen from '../screens/MaterialesScreen';

export type RootStackParamList = {
    Usuarios: undefined;
    Lugares: undefined;
    Materiales: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Usuarios">
            <Stack.Screen name="Usuarios" component={UsuariosScreen} />
            
            <Stack.Screen name="Materiales" component={MaterialesScreen} />
        </Stack.Navigator>
    );
}
//