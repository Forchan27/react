import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
];

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What are you doing?'},
  {id: 4, message: 'What are you doing?'},
  {id: 5, message: 'What are you doing?'},
  {id: 6, message: 'What are you doing?'},
]

let posts = [
  {id: 1, message: 'Hi, how are you?', likeCount: 0},
  {id: 2, message: 'Its my first post', likeCount: 23},
  {id: 3, message: 'Blalala', likeCount: 42},
  {id: 4, message: 'Lalala', likeCount: 1},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
