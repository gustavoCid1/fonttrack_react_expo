import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsuariosScreen from '../screens/UsuariosScreen';
import LugaresScreen from '../screens/LugaresScreen';
import MaterialesScreen from '../screens/MaterialesScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Usuarios') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Lugares') {
                        iconName = focused ? 'location' : 'location-outline';
                    } else if (route.name === 'Materiales') {
                        iconName = focused ? 'cube' : 'cube-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Usuarios" component={UsuariosScreen} />
            <Tab.Screen name="Lugares" component={LugaresScreen} />
            <Tab.Screen name="Materiales" component={MaterialesScreen} />
        </Tab.Navigator>
    );
}
