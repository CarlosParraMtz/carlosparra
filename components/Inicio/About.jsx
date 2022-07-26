import { Grid } from '@mui/material'

export default function About() {
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
					Soy desarrollador front-end con un año de experiencia en framew,
					y estoy enfocado en la creación de páginas e interfaces de usuario
					atractivas, simples y funcionales.
				</p>

				
			</div>

		</section>
	)
}
