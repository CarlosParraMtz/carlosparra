import { useState, forwardRef } from 'react';
import { Grid, Dialog, Stack, Slide, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import skills from './skills.json';

export default function About() {

	const [open, setOpen] = useState(false)



	return (
		<section id='about' >

			<h2>
				Sobre mí
			</h2>

			<div className="container-content">
				<Grid container justifyContent='center' alignItems='center' >
					<Grid item xs={9} sm={6} md={6} lg={6} >
						<div className="img-circle">
							<img src="images/carlosparra.png" alt="Carlos Parra" />
						</div>
					</Grid>
					<Grid item xs={12} md={10} lg={6}>
						<p>
							Soy un enorme fan de la tecnología y la programación.
							Esto, mezclado con una experiencia de 9 años en diseño
							gráfico, me han permitido crecer haciendo las cosas con
							las que más cómodo me siento:
						</p>

						<h3><span>Resolver problemas</span> y <span>crear cosas nuevas.</span></h3>
					</Grid>
				</Grid>
			</div>

			<div className="container-text">

				<p>
					Soy desarrollador front-end con un año de experiencia en frameworks
					como ReactJS y NextJS, y estoy enfocado en la creación de páginas e
					interfaces de usuario atractivas, simples y funcionales.
				</p>
				<p>
					Mi forma de trabajo, individual o en equipo, está enfocada en resultados,
					lo cual me ha permitido trabajar con usuarios de forma muy positiva.
				</p>

				<button
					className='bttn-unite bttn-md'
					onClick={() => setOpen(true)}
				>
					<b>Mostrar mis herramientas</b>
				</button>

			</div>

			<Dialog open={open} fullScreen >
				<div className="dialog-fullscreen">
					<div className="btn-dialog-container">
						<IconButton
							onClick={() => setOpen(false)}
							sx={{
								background: '#0f8cc6	',
								"&:hover": { background: "#1f9cd6" }
							}}
						>
							<ArrowBackIcon />
						</IconButton>
					</div>

					<h2>Mis herramientas</h2>

					{
						skills.map((skill, index) => {
							const par = index % 2
							return (
								<div className={`skill-section skill-color-${par}`} key={index}>
									<div className="container-content">
										<Grid container alignItems='center' >
											<Grid item md={4} xs={12} >
												<div className='skill-img-container' >
													<img className='skill-img' src={skill.img} alt={skill.title} />
												</div>
											</Grid>
											<Grid item md={8} xs={12} >
												<h3>{skill.title} </h3>
												<p> {skill.description} </p>
											</Grid>
										</Grid>
									</div>
								</div>
							)
						})
					}



				</div>
			</Dialog>

		</section>
	)
}
