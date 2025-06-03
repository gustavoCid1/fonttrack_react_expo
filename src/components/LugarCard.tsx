import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Lugar } from '../types/Lugar';

interface Props {
    lugar: Lugar;
}

export default function LugarCard({ lugar }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{lugar.nombre}</Text>
            <Text>Estado: {lugar.estado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FDF6F8', // fondo rosado suave
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#EFC8D7', // sombra rosada tenue
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#FADDE1',
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        color: '#C0567B', // tono rosado elegante
        marginBottom: 6,
        fontFamily: 'sans-serif-light', // o alguna que refleje ligereza si estás en web/mobile
    },
    subtitle: {
        fontSize: 14,
        color: '#7A6C6C',
        fontFamily: 'sans-serif',
    },
});

