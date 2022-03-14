import {TweetItem} from "../../interfaces";

export interface NewTweetProps {
    onSubmit: (newTweet: TweetItem) => void;
}