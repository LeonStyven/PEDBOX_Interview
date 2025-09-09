import dotenv from "dotenv";
import axios from "axios";
import Subreddit from "../models/subreddit.model.js";

dotenv.config();

export const getSubreddits = async (req, res) => {
    try {
        const subreddits = await Subreddit.findAll()
        res.json(subreddits)

    } catch (error) {
        console.log(`Could not get subreddits: ${error}: ${error.message}`)
    }
}