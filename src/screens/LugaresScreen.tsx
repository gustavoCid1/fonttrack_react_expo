import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, FlatList, ActivityIndicator, Text, StyleSheet, Button } from 'react-native';
import { obtenerLugares } from '../services/lugares';
import { Lugar } from '../types/Lugar';
import LugarCard from '../components/LugarCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define el tipo de parámetros de navegación
type RootStackParamList = {
    Materiales: undefined;
    Usuarios: undefined;
    Lugares: undefined;
};

// Define los props con React Navigation
type Props = NativeStackScreenProps<RootStackParamList, 'Lugares'>;

export default function LugaresScreen({ navigation }: Props) {
    const [lugares, setLugares] = useState<Lugar[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLugares();
    }, []);

    const fetchLugares = async () => {
        try {
            const data = await obtenerLugares();
            setLugares(data);
        } catch (err) {
            console.error(err);
            setError('Error al cargar lugares');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#000" style={styles.loader} />;
    }

    if (error) {
        return <Text style={styles.error}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={lugares}
                keyExtractor={(item) => item.id_lugar.toString()}
                renderItem={({ item }) => <LugarCard lugar={item} />}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Usuarios')}>
                    <Text style={styles.buttonText}>Ir a Usuarios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Materiales')}>
                    <Text style={styles.buttonText}>Ir a Materiales</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF8F9', // Fondo suave rosado
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: '#D6455F', // Rojo rosado suave
        textAlign: 'center',
        marginTop: 24,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'sans-serif-light',
    },

    // Estilos mejorados para los botones
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3, // Sombra en Android
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});