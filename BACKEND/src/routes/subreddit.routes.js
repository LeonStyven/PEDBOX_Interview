import express from "express";
import { getSubreddits, updateSubreddits } from "../controllers/subreddit.controller.js";


const subredditRouter = express.Router();

subredditRouter.get("/subreddits", getSubreddits);
subredditRouter.put("/update",  updateSubreddits);


export default subredditRouter;