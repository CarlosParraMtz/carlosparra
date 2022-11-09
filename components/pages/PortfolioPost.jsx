import React from 'react';
import SideButton from '../elements/SideButton';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import Chip from '../elements/Chip';
import ButtonsPair from '../elements/ButtonsPair';
import { motion } from 'framer-motion';

export default function PortfolioPost({ data }) {
    return (
        <>
            <div className="centered">

                <motion.h1
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                > {data.projectName}
                </motion.h1>

                <div className="chips-container">
                    {
                        data.skills.map((skill, index) => <Chip key={index} i={index} label={skill} />)
                    }
                </div>

                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.8 }}
                    className="cover-img-container">
                    <Image src={`/portfolio/${data.thumbnail}`} layout="fill" alt={data.projectName} />
                </motion.div>


                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    className="portfolio-markdown">
                    <ReactMarkdown>
                        {data.content}
                    </ReactMarkdown>
                </motion.div>
            </div>

            <ButtonsPair left={{ link: "/portfolio", title: "Portfolio" }} />

        </>
    )
}
