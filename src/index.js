import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const testTweet = {
  message: "Blabliblablub.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
}

function Tweet({ tweet }) {
  return (
      <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author}/>
          <Message text={tweet.message}/>
          <Time time={tweet.timestamp}/>
          <div className="buttons">

          </div>
        </div>
      </div>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return(
    <img src={url} className="avatar" alt="avatar" />
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithHandle({ author }) {
  return (
    <span className="name-with-handle">
      <span className="name">
        {author.name}
      </span>
      <span className="handle">
        @{author.handle}
      </span>
    </span>
  )
}

function Time({ time }) {
  return (
    <div>
      { time }
    </div>
  )
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
