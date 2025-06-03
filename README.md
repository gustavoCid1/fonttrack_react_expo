FontTrack es una aplicación móvil desarrollada con React Native (Expo) y TypeScript, que permite la gestión de usuarios, materiales y lugares. Forma parte del proyecto general de FontTrack.

## 📱 Funcionalidades

• CRUD completo de: usuarios, materiales, lugares

• Conexión a una API REST creada en Node.js + MySQL

• Navegación con React Navigation

• Diseño estético tipo Bonafont (ligero, limpio y amigable)

• Optimizada para Android

## 🚀 Tecnologías utilizadas

Frontend (Mobile)

• React Native (Expo Go)

• TypeScript

• Axios

• React Navigation
Backend (API)

• Node.js

• Express.js

• MySQL

## 📂 Estructura del proyecto (Frontend)

/FontTrackApp

├── assets/
|
├── components/
|   |
│   └── UsuarioCard.tsx
|   |
│   └── MaterialCard.tsx
|   |
│   └── LugarCard.tsx
|   |
├── navigation/
|
│   └── StackNavigator.tsx
|   |
│   └── TabNavigator.tsx
|   
├── screens/
|   |
│   └── UsuariosScreen.tsx
|   |
│   └── MaterialesScreen.tsx
|   |
│   └── LugaresScreen.tsx
|
├── services/
|   |
│   └── api.ts
|   |
│   └── usuarios.ts
|
├── types/
|   |
│   └── Usuario.ts
|
├── App.tsx
|
├── app.json
|
└── README.md

## ⚙️ Configuración del entorno

1.	Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/fonttrack-app.git

cd fonttrack-app
```
1. Instalar dependencias:
```bash

npm install
```
3. Iniciar el proyecto en Expo:
```bash

npx expo start

```
> Escanea el código QR con Expo Go en tu dispositivo Android.

## 🔗 Conexión con la API

Asegúrate de tener tu backend corriendo y en la misma red que tu móvil.

Edita services/api.ts:

```ts

const api = axios.create({

  baseURL: 'http://<TU_IP_LOCAL>:3000/api',

  timeout: 5000,

});
```
## 🧪 Comandos útiles

| Comando | Descripción |

|--------|-------------|

| `npx expo start` | Inicia el servidor de desarrollo |

| `npm install` | Instala las dependencias |

| `npm run android` | Corre la app en emulador Android (si no usas Expo Go) |

## 🧑‍💻 Autor

Desarrollado por [Jesus Felipe Aviles].

"# fonttrack_react_expo" 
