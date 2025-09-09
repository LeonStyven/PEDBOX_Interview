import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


const Subreddit = sequelize.define("Subreddit", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    subreddit_id: {type: DataTypes.STRING, unique: true},
    display_name: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    subscribers: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.INTEGER},
    submit_text: {type: DataTypes.TEXT},
    over18: {type: DataTypes.BOOLEAN},
    description: {type: DataTypes.TEXT},
    lang: {type: DataTypes.STRING},
}, {
    tableName: 'subreddits',
    timestamps: false
});

export default Subreddit;