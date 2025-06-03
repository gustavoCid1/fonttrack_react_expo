import api from '../api/api';
import { Usuario } from '../types/Usuario';

export const obtenerUsuarios = async (): Promise<Usuario[]> => {
    const response = await api.get<Usuario[]>('/usuarios');
    return response.data;
};
