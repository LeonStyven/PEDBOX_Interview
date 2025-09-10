import dotenv from "dotenv"; // to load the environment variables
import express from "express"; // to create the server
import cors from "cors"; // to handle the cors policy
import connectDB from "./config/database.js";
import subredditRouter from "./routes/subreddit.routes.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());
app.use("/api", subredditRouter);

const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error(`API initialize error: `, error);
        process.exit(1);
    }
};

startServer();