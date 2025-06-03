export interface Material {
    id_material: number;
    clave_material: string;
    descripcion: string;
    generico: string;
    clasificacion: string; // Cambia a number si manejas roles como números
    existencia: number;
    costo_promedio: number;
    id_lugar: number;
}