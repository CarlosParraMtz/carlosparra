import React from 'react'
import SideButton from './SideButton'
import { motion } from 'framer-motion'

export default function ButtonsPair({ left = null, right = null }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5 }}>
			{
				left &&
				<div className="animated-button-container left" >
					<SideButton link={left.link} title={left.title} left />
				</div>
			}

			{
				right &&
				<div className="animated-button-container right" >
					<SideButton link={right.link} title={right.title} right />
				</div>
			}






		</motion.div>
	)
}
