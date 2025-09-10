import express from "express";
import { getSubreddits, updateSubreddits, getSubredditById } from "../controllers/subreddit.controller.js";


const subredditRouter = express.Router();

subredditRouter.get("/subreddits", getSubreddits);
subredditRouter.get("/subreddits/:id", getSubredditById);

subredditRouter.put("/update",  updateSubreddits);


export default subredditRouter;