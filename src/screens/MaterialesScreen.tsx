import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { obtenerMateriales } from '../services/materiales';
import { Material } from '../types/Material';
import MaterialCard from '../components/MaterialCard';

export default function MaterialesScreen() {
    const [materiales, setMateriales] = useState<Material[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMateriales();
    }, []);

    const fetchMateriales = async () => {
        try {
            const data = await obtenerMateriales();
            setMateriales(data);
        } catch (err) {
            console.error(err);
            setError('Error al cargar materiales');
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
                data={materiales}
                keyExtractor={(item) => item.id_material.toString()}
                renderItem={({ item }) => <MaterialCard material={item} />}
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
