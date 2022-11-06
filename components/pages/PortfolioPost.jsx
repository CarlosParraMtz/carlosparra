import React from 'react'
import SideButton from '../elements/SideButton'

export default function PortfolioPost({ data }) {
    return (
        <>
            <div className="centered">
                <h1> {data.projectName} </h1>
            </div>


            <SideButton link="/portfolio" title="Portfolio" left />

        </>
    )
}
