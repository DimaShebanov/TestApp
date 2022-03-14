import React from 'react';
import {TweetProps} from "./Tweet.interfaces";

const Tweet: React.FC<TweetProps> = (props) => {
    const {author, content, date} = props.item;


    return (
        <div>
            <div><strong>{author}</strong></div>
            <div>{content}</div>
            <div><pre>{date.toISOString()}</pre></div>
        </div>
    );
};

export default React.memo(Tweet);
