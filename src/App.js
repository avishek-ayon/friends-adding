import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import FriendList from './Components/FriendList/FriendList';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <FriendList></FriendList>
    </div>
  );
}

export default App;
