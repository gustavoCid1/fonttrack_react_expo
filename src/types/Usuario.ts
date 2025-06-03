export interface Usuario {
  id_usuario: number;
  nombre: string;
  correo: string;
  password: string;
  tipo_usuario: string; // Cambia a number si manejas roles como números
  foto_usuario: string;
  id_lugar: number;
}
