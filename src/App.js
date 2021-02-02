import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './Character'

function App() {

  const [resource, setResource] = useState('');
  const  [items, setItems] = useState([]);

  useEffect(() => {

      fetch(`https://www.breakingbadapi.com/api/${resource}`)
      .then(res => res.json())
      .then(json => setItems(json))





    // const getCharacters = async () => {

    //   // const result = await axios(`https://www.breakingbadapi.com/api/episodes`);
    //   // console.log(result.data);
    //   // setItems(result.data);
    // };
    
    // getCharacters();

  }, [resource]);

  function clickHandler() {
  
  }

  return (
    <div className="App">

    <button onClick={ () => {setResource('characters')}}>Characters</button>

    <button onClick={ () => {setResource('episodes')}}>Episodes</button>

    <h1>{resource}</h1>

      {items.map(item => {
        return (
          <pre>{JSON.stringify(item)}</pre>
        )
      })}

    </div>
  );
}

export default App;
