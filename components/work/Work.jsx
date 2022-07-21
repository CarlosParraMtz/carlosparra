import { useEffect } from 'react';
import SkillCard from './SkillCard';
import AOS from 'aos'
import "aos/dist/aos.css";

export default function Work() {

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, [])

	return (
		<div className='work-container'>

			<section id='about' >
				<h1 className='work-title' data-aos="fade-down" >CARLOS <span>PARRA</span></h1>

				<div className='work-text-container' >
					<h2
						data-aos="fade-right"
						data-aos-delay="500"
						data-aos-duration="1000"
					>Sobre mí</h2>

					<p className='work-about-p' data-aos="zoom-in-left" data-aos-duration="1000" >
						Con un trabajo de años en diseño gráfico y una afición enorme por la tecnología, encontré en la programación las
						herramientas necesarias que me permiten hacer lo que más me gusta: <span className='work-p-red' ><b>resolver problemas </b></span> y <span className='work-p-blue' ><b>crear
							cosas nuevas</b></span>.
					</p>
					<p data-aos="zoom-in-right" data-aos-duration="500" >
						Como desarrollador front-end estoy enfocado en la creación de interfaces de usuario <b><span className='work-p-blue'>atractivas</span>,
							<span className='work-p-blue' >simples</span>, <span className='work-p-blue' >intuitivas</span></b> y <b><span className='work-p-red' >funcionales</span></b>.
					</p>
				</div>
			</section>

			<section id='skills' >
				<h2>Mis herramientas:</h2>
				<div className='skills-container' >
					<SkillCard file='node.png' titulo='Node JS' />
					<SkillCard file='physics.png' titulo='React JS' />
					<SkillCard file='next.png' titulo='Next JS' />
					<SkillCard file='firebase.svg' titulo='Firebase' />
					<SkillCard file='recoil.png' titulo='Recoil JS' />
					<SkillCard file='mui.png' titulo='Material UI' />
					<SkillCard file='mdx.png' titulo='Markdown X' />
				</div>
			</section>

			<section id='soft-skills'>
				<div className='work-text-container' >
					<h2>Soft-skills</h2>
				</div>
			</section>

		</div>
	)
}
