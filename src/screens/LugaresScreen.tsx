import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { obtenerLugares } from '../services/lugares';
import { Lugar } from '../types/Lugar';
import LugarCard from '../components/LugarCard';

export default function LugaresScreen() {
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF8F9', // fondo suave rosado
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: '#D6455F', // rojo rosado suave
        textAlign: 'center',
        marginTop: 24,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'sans-serif-light',
    },
});
