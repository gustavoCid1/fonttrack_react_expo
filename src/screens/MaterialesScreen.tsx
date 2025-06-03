import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';
import { obtenerMateriales } from '../services/materiales';
import { Material } from '../types/Material';
import MaterialCard from '../components/MaterialCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define el tipo de parámetros de navegación
type RootStackParamList = {
    Materiales: undefined;
    Usuarios: undefined;
    Lugares: undefined;
};

// Define los props con React Navigation
type Props = NativeStackScreenProps<RootStackParamList, 'Materiales'>;

export default function MaterialesScreen({ navigation }: Props) {
    const [materiales, setMateriales] = useState<Material[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;

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

    const filteredMateriales = materiales.filter((mat) =>
        [
            mat.id_material,
            mat.clave_material,
            mat.descripcion,
            mat.generico,
            mat.clasificacion,
            mat.existencia,
            mat.costo_promedio,
            mat.id_lugar
        ].some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    );

    const paginatedMateriales = filteredMateriales.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#000" style={styles.loader} />;
    }

    if (error) {
        return <Text style={styles.error}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar material..."
                value={search}
                onChangeText={(text) => {
                    setSearch(text);
                    setPage(1); // reiniciar página al buscar
                }}
            />

            <FlatList
                data={paginatedMateriales}
                keyExtractor={(item) => item.id_material.toString()}
                renderItem={({ item }) => (
                    <MaterialCard material={item} search={search} />
                )}
            />

            <View style={styles.pagination}>
                <Button
                    title="Anterior"
                    onPress={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                />
                <Text style={styles.pageText}>Página {page}</Text>
                <Button
                    title="Siguiente"
                    onPress={() =>
                        setPage((p) =>
                            p < Math.ceil(filteredMateriales.length / itemsPerPage)
                                ? p + 1
                                : p
                        )
                    }
                    disabled={page >= Math.ceil(filteredMateriales.length / itemsPerPage)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Usuarios')}>
                    <Text style={styles.buttonText}>Ir a Usuarios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lugares')}>
                    <Text style={styles.buttonText}>Ir a Lugares</Text>
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
    searchInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    pageText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
