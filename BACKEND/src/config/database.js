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

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`DB Conected to ${process.env.DB_NAME}`);
    } catch (error) {
        console.error(`DB Conection failed: ${error}`);
        process.exit(1);
    }
  };

export { sequelize, connectDB };
export default connectDB;