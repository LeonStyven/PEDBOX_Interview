import dotenv from "dotenv";
import axios from "axios";
import Subreddit from "../models/subreddit.model.js";

dotenv.config();

let subredditsCache = [];


export const getSubreddits = async (req, res) => {
    try {
        const subreddits = await Subreddit.findAll()
        subredditsCache = subreddits
        res.json(subreddits)

    } catch (error) {
        res.status(500).json({ message: `Could not get subreddits ${error}: ${error.message}` })
    }
}

export const getSubredditById = async (req, res) => {
    try {
        const { id } = req.params;
        const subreddit = await Subreddit.findByPk(id);

        if (!subreddit) {
            return res.status(404).json({ message: `Subreddit not founded` });
        }

        res.json(subreddit);
    } catch (error) {
        res.status(500).json({ message: `Could not get subreddit by ID ${error}: ${error.message}` });
    }
}

export const updateSubreddits = async (req, res) => {
    try {
        const answer = await axios.get(`${process.env.REDDIT_API}`);
        const subreddits = answer.data.data.children.map((child) => child.data);

        let newSubredditsCount = 0;
        let existingSubredditsCount = 0;

        //Compare API answer with the backendCache to improve BD performance and reduce costs
        for (const element of subreddits) {
            // Check if element exists in cache by subreddit_id
            const existsInCache = subredditsCache.some(cached => cached.subreddit_id === element.id);
            
            if (!existsInCache) {
                // TODO: Element not in cache, add to database
                await Subreddit.create({
                    subreddit_id: element.id,
                    display_name: element.display_name,
                    title: element.title,
                    subscribers: element.subscribers,
                    createdAt: element.created_utc,
                    submit_text: element.submit_text,
                    over18: element.over18,
                    description: element.description,
                    lang: element.lang
                });
                newSubredditsCount++;
            } else {
                // Element exists in cache
                existingSubredditsCount++;
            }
        }

        // Update cache with new data
        const updatedSubreddits = await Subreddit.findAll();
        subredditsCache = updatedSubreddits;

        res.json({
            isSuccess: true, 
            message: `Subreddits updated`,
            newSubreddits: newSubredditsCount,
            existingSubreddits: existingSubredditsCount
        });

    } catch (error) {
        res.status(500).json({ message: `Subreddits update failed. ${error}: ${error.message}` });
    }
}