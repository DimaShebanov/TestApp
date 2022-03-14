import {Moment} from "moment";


export interface TweetItem {
    id: string;
    content: string;
    date: Moment;
    author: string;
}