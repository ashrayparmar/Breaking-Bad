import React from 'react'

const Character = ({items}) => {
    return (
        <div>
            {items.map(item => (
               <h1>{item.name}</h1> 
            ))}
        </div>
    )
}

export default Character
