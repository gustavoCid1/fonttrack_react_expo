import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsuariosScreen from '../screens/UsuariosScreen';
import LugaresScreen from '../screens/LugaresScreen';
import MaterialesScreen from '../screens/MaterialesScreen';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
    Login: undefined;
    Usuarios: undefined;
    Lugares: undefined;
    Materiales: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Usuarios" component={UsuariosScreen} />
            <Stack.Screen name='Lugares' component={LugaresScreen} />
            <Stack.Screen name="Materiales" component={MaterialesScreen} />
        </Stack.Navigator>
    );
}
//