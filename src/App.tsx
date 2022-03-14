import React, {useCallback, useState} from 'react';
import './App.css';
import { Container } from './App.styled';
import NewTweet from "./components/NewTweet/NewTweet";
import Tweet from './components/Tweet/Tweet';
import {TweetItem} from "./interfaces";

function App() {
      const [tweets, setTweets] = useState<Array<TweetItem>>([]);

      const onSubmit = useCallback((newTweet: TweetItem) => {
        setTweets((oldTweets) => [...oldTweets, newTweet]);
      }, []);

      return (
        <Container>
          <NewTweet onSubmit={onSubmit}/>

          {tweets.map((tweet) => (
              <Tweet key={tweet.id} item={tweet}/>
          ))}
        </Container>
      );
}

export default App;
