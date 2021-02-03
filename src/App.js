import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './Character'
import Episode from './Episode';
import Header from './Header'

function App() {

  const [resource, setResource] = useState('');
  const  [items, setItems] = useState([]);

  useEffect(() => {

      fetch(`https://www.breakingbadapi.com/api/${resource}`)
      .then(res => res.json())
      .then(json => setItems(json))
    
    }, [resource]);

  return (
    
    <div className='container'>

      <Header />

      <button className='btn' onClick={ () => {setResource('Characters')}}>Characters</button>

      <button className='btn' onClick={ () => {setResource('Episodes')}}>Episodes</button>

      <h1>{resource}</h1>

      {
        resource === 'Characters' ? <Character items={items} /> : null
      }

    </div>
  );
}

export default App;
