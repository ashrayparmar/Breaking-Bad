import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './Character'

function App() {

  const  [items, setItems] = useState([]);

  useEffect(() => {

    const getCharacters = async () => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters`);
      setItems(result.data);
    };
    
    getCharacters();

  }, []);

  function clickHandler() {
    
  }

  return (
    <div className="App">
    <Character items={items} />

    </div>
  );
}

export default App;
