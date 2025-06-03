import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Material } from '../types/Material';

interface Props {
    material: Material;
    search: string;
}

// Función para resaltar coincidencias
const highlight = (text: string | number, search: string) => {
    const texto = String(text);
    if (!search) return <Text>{texto}</Text>;

    const regex = new RegExp(`(${search})`, 'gi');
    const parts = texto.split(regex);

    return (
        <Text>
            {parts.map((part, index) =>
                part.toLowerCase() === search.toLowerCase() ? (
                    <Text key={index} style={styles.highlight}>
                        {part}
                    </Text>
                ) : (
                    <Text key={index}>{part}</Text>
                )
            )}
        </Text>
    );
};

export default function MaterialCard({ material, search }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{highlight(material.clave_material, search)}</Text>
            <Text>Descripción: {highlight(material.descripcion, search)}</Text>
            <Text>Génerico: {highlight(material.generico, search)}</Text>
            <Text>Clasificación: {highlight(material.clasificacion, search)}</Text>
            <Text>Existencia: {highlight(material.existencia, search)}</Text>
            <Text>Costo ($): {highlight(material.costo_promedio, search)}</Text>
            <Text>Lugar: {highlight(material.id_lugar, search)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FDF6F8',
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#EFC8D7',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#FADDE1',
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        color: '#C0567B',
        marginBottom: 6,
        fontFamily: 'sans-serif-light',
    },
    subtitle: {
        fontSize: 14,
        color: '#7A6C6C',
        fontFamily: 'sans-serif',
    },
    highlight: {
        backgroundColor: '#FFE082',
        color: '#000',
    },
});
