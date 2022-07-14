import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.scss';
import Body from './Body';

function App() {
  
  return (

    <div className="App">
      <h2 className="title">Persons list swapi.dev (https://swapi.dev/api/people)</h2>
      <Body />
    </div>
  );
}

export default App;
