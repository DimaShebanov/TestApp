import React, {useCallback, useState} from 'react';
import { Container, TweetsWrapper } from './App.styled';
import NewTweet from "./components/NewTweet/NewTweet";
import Tweet from './components/Tweet/Tweet';
import {TweetItem} from "./interfaces";
import moment from "moment";

function App() {
      const [tweets, setTweets] = useState<Array<TweetItem>>([
          {author: "Me", id: "22", date: moment(), content: "aaaaa"}
      ]);

      const onSubmit = useCallback((newTweet: TweetItem) => {
        setTweets((oldTweets) => [...oldTweets, newTweet]);
      }, []);



      return (
        <Container>
          <NewTweet onSubmit={onSubmit}/>
          <TweetsWrapper>
              {tweets.map((tweet) => (
                  <Tweet key={tweet.id} item={tweet}/>
              ))}
          </TweetsWrapper>
        </Container>
      );
}

export default App;
