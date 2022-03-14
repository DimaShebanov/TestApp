import React, {useState} from 'react';
import {NewTweetProps} from "./NewTweet.interfaces";
import {AUTHOR, TWEET_TOP_CAP} from "./contants";
import {v4 as uuidV4} from "uuid";
import moment from "moment";
import {Counter, Footer, Input, Root, SubmitButton } from './NewTweet.styled';

const NewTweet: React.FC<NewTweetProps> = (props) => {
    const {onSubmit} = props;
    const [content, setContent] = useState("");
    const charsLeft = TWEET_TOP_CAP - content.length;
    const isButtonDisabled = charsLeft < 0 || content.length < 1;

    const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const {value} = e.target;
        setContent(value);
    } 
    
    const onTweet: React.MouseEventHandler = () => {
        onSubmit({
            id: uuidV4(),
            content,
            author: AUTHOR,
            date: moment()
        });

        setContent("");
    };
    
    return (
        <Root>
            <div>{AUTHOR}</div>
            <Input onChange={onChange} value={content}/>

            <Footer>
                <Counter error={charsLeft < 0}>{charsLeft}</Counter>
                <SubmitButton disabled={isButtonDisabled} onClick={onTweet}>Tweet</SubmitButton>
            </Footer>
        </Root>
    );
};

export default NewTweet;
