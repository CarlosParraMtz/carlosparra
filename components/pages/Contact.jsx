import React from 'react'
import ButtonsPair from '../elements/ButtonsPair'
import ContactButton from '../elements/ContactButton'
export default function Contact() {
	return (
		<section>
			<div className="centered">
				<h1>Get in touch</h1>

				<p>
					If you wanna get in touch or talk
					about a project collaboration,
					text me, or follow me in social media!
				</p>



				<div className="contact-social-buttons">


					<ContactButton link="https://wa.me/522281259898"
						color="#15c356" image="whatsapp" title="Whatsapp"
					/>
					<ContactButton link="https://t.me/CarlosParraMtz"
						color="#4277bd" image="telegram" title="Telegram"
					/>
					<ContactButton link="https://twitter.com/devCarlosParra"
						color="#1DA1F2" image="twitter" title="Twitter"
					/>
					<ContactButton link="https://www.linkedin.com/in/carlosparramtz/"
						color="#0077b5" image="linkedin" title="LinkedIn"
					/>
					<ContactButton link="https://github.com/CarlosParraMtz"
						color="#171515" image="github" title="Github"
					/>


				</div>

				<p>
					See you in the other side!
				</p>

			</div>



			<ButtonsPair
				left={{ link: "/portfolio", title: "Portfolio" }}
			/>
		</section>
	)
}
