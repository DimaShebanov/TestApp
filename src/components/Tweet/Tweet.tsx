import React from 'react';
import {TweetProps} from "./Tweet.interfaces";
import {Author, Content, Root, Date } from './Tweet.styled';

const Tweet: React.FC<TweetProps> = (props) => {
    const {author, content, date} = props.item;

    return (
        <Root>
            <Author>{author}</Author>
            <Content>{content}</Content>
            <Date>{date.toISOString()}</Date>
        </Root>
    );
};

export default React.memo(Tweet);
