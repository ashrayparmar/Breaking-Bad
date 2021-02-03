import React from 'react'

const Episode = ({items}) => {
    return (
        <div>
            {items.map(item => (
            <div>
               <h1>{item.title}</h1>
               <h2>{item.air_date}</h2> 
            </div>
            ))}
        </div>
    )
}

export default Episode
