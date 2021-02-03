import React from 'react'
import CharacterItem from './CharacterItem';

const Character = ({items}) => {
    return (
        <div>
        <section className='cards'>
        {items.map(function(item) {
            return (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            
           )
        })}
        </section>
        </div>
    )
}

export default Character
