import { Subreddit } from "../interfaces/subreddit.interface";
import { RESTSubreddit } from "../interfaces/RESTSubreddit.interface";

export class SubredditMapper {
    
    static mapRESTSubredditToSubreddit(item: RESTSubreddit): Subreddit{
        return{
            name: item.name,
            title: item.title,
            subscribers: item.subscribers,
            createdAt: item.createdAt,
            submit_text: item.submit_text,
            over18: item.over18,
            description: item.description,
            lang: item.lang
        }
    }

    static mapRESTSubredditArrayToSubredditArray(items: RESTSubreddit[]): Subreddit[]{
        return items.map(SubredditMapper.mapRESTSubredditToSubreddit);
    }





}