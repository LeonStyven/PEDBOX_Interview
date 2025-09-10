# 🚀 Prueba Técnica PEDBOX - FullStack Developer

Este repositorio contiene la solución para la prueba técnica de PEDBOX, desarrollada para el cargo de **Desarrollador FullStack**. El sistema está compuesto por dos aplicaciones independientes:

- **Backend:** API REST con Node.js, Express y Sequelize.
- **Frontend:** Aplicación Angular moderna con TailwindCSS y DaisyUI.

El objetivo principal es gestionar usuarios y subreddits, incluyendo autenticación con **JWT** y consumo de datos desde la API pública de Reddit.

---

## 📦 Estructura del Proyecto

```
PEDBOX_Interview/
│
├── BACKEND/
│   └── ... (API REST, modelos, rutas, controladores)
│
└── Frontend/
    └── ... (Angular, componentes, servicios)
```

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (>= 20.x)
- **npm** (>= 10.x)
- **Angular CLI** (>= 18.x)
- **MySQL**

---

## 🛠 Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/LeonStyven/PEDBOX_Interview
cd PEDBOX_Interview
```

### 2. Backend

1. Entra al directorio del backend:

    ```bash
    cd BACKEND
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea el archivo `.env` en la raíz de `BACKEND` con la configuración de tu entorno:

    ```env
    PORT=4000
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASS=tu_password
    DB_NAME=reddit_db
    JWT_SECRET=PEDBOX_INTERVIEW_JWT_SECRET
    JWT_EXPIRES_IN=1h
    REDDIT_API=https://www.reddit.com/subreddits/popular.json
    ```
    "Para fin de la prueba, la contraseña es: 18121927a"

4. Inicia el servidor:

    ```bash
    npm start
    ```

El backend estará disponible en `http://localhost:4000`.

---

### 3. Frontend

1. Entra al directorio del frontend:

    ```bash
    cd ../Frontend
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia la aplicación Angular:

    ```bash
    ng serve -o
    ```

El frontend estará disponible en `http://localhost:4200`.

---

## 🔐 Autenticación

- El sistema utiliza **JWT** para autenticar usuarios.
- El token se almacena en el `localStorage` del navegador tras iniciar sesión.

---

## 📚 Endpoints Principales

- `POST /auth/signin` — Registro de usuario
- `POST /auth/login` — Inicio de sesión (devuelve JWT)
- `GET /api/subreddits` — Listado de subreddits
- `PUT /api/update` — Actualiza subreddits desde Reddit
- `GET /api/subreddits/:id` — Detalle de un subreddit

---

## 📝 Notas

- La base de datos debe estar creada y accesible antes de iniciar el backend.
- Puedes modificar los valores del archivo `.env` según tu entorno local.
- El frontend y backend están desacoplados y pueden ejecutarse por separado.

---

## 📖 Recursos

- [Angular](https://angular.dev/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
