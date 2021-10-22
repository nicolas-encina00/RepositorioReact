import React from 'react'

export const Welcome = ({title, text}) => {

    return (
        <div>
            <h1>{title ?? 'hola clase'}</h1>
            {text && <p>{text}</p>}
        </div>
    )
}

export default Welcome;
