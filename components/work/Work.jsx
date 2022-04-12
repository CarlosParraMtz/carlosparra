import React from 'react'
import SkillCard from './SkillCard';

export default function Work() {
	return (
		<div className='work-container'>

			<section id='about' >
				<h1 className='work-title' >CARLOS <span>PARRA</span></h1>

				<div className='work-text-container' >
					<h2>Sobre mí</h2>

					<p className='work-about-p' >
						Con un trabajo de años en diseño gráfico y una afición enorme por la tecnología, encontré en la programación las
						herramientas necesarias que me permiten hacer lo que más me gusta: <span className='work-p-red' ><b>resolver problemas </b></span> y <span className='work-p-blue' ><b>crear
							cosas nuevas</b></span>.
					</p>
					<p>
						Como desarrollador front-end estoy enfocado en la creación de interfaces de usuario <b><span className='work-p-blue'>atractivas</span>,
							<span className='work-p-blue' > simples</span>, <span className='work-p-blue' >intuitivas</span></b> y <b><span className='work-p-red' >funcionales</span></b>.
					</p>
				</div>
			</section>
			<section id='skills' >
				<h2>Mis herramientas:</h2>
				<div className='skills-container' >
					<SkillCard file='html-5' titulo='HTML' />
					<SkillCard file='css-3' titulo='CSS' />
					<SkillCard file='js' titulo='JavaScript' />
					<SkillCard file='physics' titulo='React JS' />

				</div>
			</section>
		</div>
	)
}
