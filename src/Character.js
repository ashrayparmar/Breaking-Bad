import React from 'react'

const Character = ({items}) => {
    return (
        <div>
        <section className='cards'>
        {items.map(function(item) {
            return (
            <h1>{item.name}</h1>
           )
        })}
        </section>
        </div>
    )
}

export default Character
