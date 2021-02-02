import React from 'react'

const Character = ({items}) => {
    return (
        <div>
            {items.map(item => (
            <div>
               <h1>{item.title}</h1>
               <h2>{item.season}</h2> 
            </div>
            ))}
        </div>
    )
}

export default Character
