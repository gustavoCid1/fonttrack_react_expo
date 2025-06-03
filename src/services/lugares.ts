import api from '../api/api';
import { Lugar } from '../types/Lugar';

export const obtenerLugares = async (): Promise<Lugar[]> => {
    const response = await api.get<Lugar[]>('/lugares');
    return response.data;
};
