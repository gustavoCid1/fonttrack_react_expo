import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { obtenerUsuarios } from '../services/usuarios';
import { Usuario } from '../types/Usuario';
import UsuarioCard from '../components/UsuarioCard';

export default function UsuariosScreen() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const data = await obtenerUsuarios();
            setUsuarios(data);
        } catch (err) {
            console.error(err);
            setError('Error al cargar usuarios');
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
                data={usuarios}
                keyExtractor={(item) => item.id_usuario.toString()}
                renderItem={({ item }) => <UsuarioCard usuario={item} />}
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
