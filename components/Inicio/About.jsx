import { useState, useEffect } from 'react';
import {
	Card,
	CardContent,
	Collapse,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Slide,
	Stack,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import skills from './skills.json';

export default function About() {

	const [open, setOpen] = useState(false)
	const [skillTitle, setSkillTitle] = useState('')
	const [skillDescription, setSkillDescription] = useState('')
	const [collapseOpen, setCollapseOpen] = useState(false)


	useEffect(() => {
		if (skillTitle != '') {
			setCollapseOpen(true)
		}
	}, [skillTitle])


	const cerrarDialog =()=>{
		setOpen(false)
		setSkillTitle('')
		setSkillDescription('')
		setCollapseOpen(false)
	}

	return (
		<section id='about' >
			<h2> Sobre mí </h2>



			<div className="container-content">
				<Grid container justifyContent='center' alignItems='center' >
					<Grid item xs={9} sm={6} md={6} lg={6} >
						<div className="img-circle" data-aos='fade-up' data-aos-delay='300' >
							<img src="images/carlosparra.png" alt="Carlos Parra" />
						</div>
					</Grid>
					<Grid item xs={12} md={10} lg={6}>
						<p data-aos='fade-left' data-aos-delay='300' >
							Soy un enorme fan de la tecnología y la programación.
							Esto, mezclado con una experiencia de 9 años en diseño
							gráfico, me han permitido crecer haciendo las cosas con
							las que más cómodo me siento:
						</p>

						<h3 data-aos='fade-up' data-aos-delay='300'>
							<span>Resolver problemas</span> y <span>crear cosas nuevas.</span>
						</h3>
					</Grid>
				</Grid>
			</div>

			<div className="container-text">

				<p data-aos='fade-up' data-aos-delay='300' >
					Soy desarrollador front-end con un año de experiencia en frameworks
					como React.js y Next.js, y estoy enfocado en la creación de páginas e
					interfaces de usuario atractivas, simples y funcionales.
				</p>
				<p data-aos='fade-up' data-aos-delay='300' >
					Mi forma de trabajo, individual o en equipo, está enfocada en resultados,
					lo cual me ha permitido trabajar con usuarios de forma muy positiva.
				</p>

				<button
					className='bttn-unite bttn-md'
					onClick={() => setOpen(true)}
					data-aos='fade-up' data-aos-delay='300'
				>
					<b>Mostrar mis herramientas</b>
				</button>

			</div>

















			<Dialog
				open={open}
				fullWidth
				onClose={cerrarDialog} >
				<DialogTitle sx={{ background: "#2e2e3f" }} >
					<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
						<h2 id='tools' style={{ fontSize: "1.6em" }} >Mis principales herramientas</h2>
						<IconButton
							onClick={cerrarDialog}
							sx={{
								ml: "auto",
								position: "sticky", top: 0,
								background: '#0f8cc6	',
								"&:hover": { background: "#1f9cd6" }
							}}
						>
							<CloseIcon />
						</IconButton>
					</div>
				</DialogTitle>
				<DialogContent sx={{ background: "#2e2e3f", color: "white" }}>
					<Stack flexWrap="wrap" spacing={2} direction="row" justifyContent="center">

						{
							skills.map((skill, index) => {
								return (
									<Card key={index}
										sx={{
											background: "#145c80",
											width: "100px",
											height: "100px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											cursor:'pointer',
											"&:hover": {
												background: "#1f9cd6",
												transition: "500ms"
											}
										}}
										onClick={() => {
											setSkillTitle(skill.title)
											setSkillDescription(skill.description)
										}}
									>
										<img className='skill-img' src={skill.img} alt={skill.title} />
									</Card>
								)
							})
						}



					</Stack>

					<Collapse in={collapseOpen} sx={{ mt: 2 }} >
						<h2 style={{ fontSize: "1.5em" }}> {skillTitle} </h2>
						<p style={{ fontSize: "1.3em" }} > {skillDescription} </p>
					</Collapse>
				</DialogContent>
			</Dialog>

		</section>
	)
}
