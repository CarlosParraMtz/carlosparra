import React from 'react';
import SideButton from '../elements/SideButton';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import Chip from '../elements/Chip';

export default function PortfolioPost({ data }) {
    return (
        <>
            <div className="centered">

                <h1> {data.projectName} </h1>
                <div className="chips-container">
                    {
                        data.skills.map((skill, index) => <Chip key={index} label={skill} />)
                    }
                </div>
                <div className="cover-img-container">
                    <Image src={`/portfolio/${data.thumbnail}`} layout="fill" alt={data.projectName} />
                </div>

                <ReactMarkdown>
                    {data.content}
                </ReactMarkdown>
            </div>

            <SideButton link="/portfolio" title="Portfolio" left />

        </>
    )
}
