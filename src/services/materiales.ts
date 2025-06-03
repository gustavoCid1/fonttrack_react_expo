import api from '../api/api';
import { Material } from '../types/Material';

export const obtenerMateriales = async (): Promise<Material[]> => {
    const response = await api.get<Material[]>('/materiales');
    return response.data;
};
