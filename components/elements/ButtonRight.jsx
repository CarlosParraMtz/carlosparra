import React from 'react'

export default function ButtonRight({link, title}) {
    return (
        <a href={link} className="button-animated ba-right fixed-right" >

            <span className="button-animated-hover" > {title} </span>
            <span className="button-animated-text" >
                {">"}
            </span>
        </a>
    )
}
