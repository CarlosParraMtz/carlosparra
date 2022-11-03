import React from 'react'

export default function ButtonLeft({link, title}) {
    return (
        <a href={link} className="button-animated ba-left fixed-left" >

            <span className="button-animated-text" >
                {"<"}
            </span>
            <span className="button-animated-hover" > {title} </span>
        </a>
    )
}
