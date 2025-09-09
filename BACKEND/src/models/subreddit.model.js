import { DataTypes } from "sequelize";

const Subreddit = sequelize.define("Subreddit", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    reddit_id: {type: DataTypes.STRING, unique: true},
    display_name_prefixed: {type: DataTypes.STRING},
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