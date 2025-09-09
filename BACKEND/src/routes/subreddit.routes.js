import express from "express";
import { getSubreddits } from "../controllers/subreddit.controller.js";


const subredditRouter = express.Router();

subredditRouter.get("/subreddits", getSubreddits);


export default subredditRouter;