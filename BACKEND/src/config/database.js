import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
);

const conectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Base de datos conectada a ${process.env.DB_NAME}`);
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error}`);
        process.exit(1);
    }
  };

export default sequelize;