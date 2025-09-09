import  dotenv from "dotenv"; // to load the environment variables
import express from "express"; // to create the server
import cors from "cors"; // to handle the cors policy

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});