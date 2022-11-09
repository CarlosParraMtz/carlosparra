import React from 'react'
import ButtonsPair from '../elements/ButtonsPair'
import ContactButton from '../elements/ContactButton'
import Buttons from './Buttons.json'
import { motion } from 'framer-motion'


export default function Contact() {


	return (
		<section>
			<div className="centered">
				<motion.h1
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 0.4 }}
				>Get in touch</motion.h1>

				<motion.p
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 0.9 }}
				>
					If you wanna get in touch or talk
					about a project collaboration,
					text me, or follow me in social media!
				</motion.p>



				<div className="contact-social-buttons">

					{
						Buttons.map((button, i) => <ContactButton
							key={i} i={i}
							link={button.link}
							color={button.color}
							image={button.image}
							title={button.title}
						/>)
					}

				</div>

				<motion.p
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 2 }}>
					See you in the other side!
				</motion.p>

			</div>



			<ButtonsPair
				left={{ link: "/portfolio", title: "Portfolio" }}
			/>
		</section>
	)
}
