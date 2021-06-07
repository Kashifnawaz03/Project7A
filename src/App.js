import React from 'react';
import {initNotificaton} from './services/firebaseService';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
     <button onClick={initNotificaton}>Configure Notification</button>
    </div>
  );
}

export default App;
