import React from 'react';
import './App.css';
import Card from './card';
import List from './list';


function App(props) {
  return (
     <List header={"A List!"} cards={[{id: 123, title: 'King', content:"of SPads"}]}/>
  );
}

export default App;
