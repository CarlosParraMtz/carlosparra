import carlos from '../assets/carlos.png'
import Experience from '../components/Experience.jsx'
import Techs from '../components/Techs.jsx'
import ProjectLink from '../components/ProjectLink.jsx'
import MeshGradient from '../components/MeshGradient.jsx'
import { motion } from 'framer-motion'

export default function Index() {
    return (
        <>
            <main className='mx-auto dark:bg-black bg-blue-300 dark:text-white transition-colors max-w-screen overflow-x-hidden relative' >
                <header className="w-screen overflow-hidden h-screen" >
                    <MeshGradient />
                    <div className='relative flex flex-col justify-center items-center gap-2 h-full ' >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, }}
                            transition={{ duration: 2 }}
                            className='rounded-full h-20 w-20 overflow-hidden border-4 border-black dark:border-gray-100 transition-colors'
                        >
                            <img src={carlos} alt="Carlos Parra" className='dark:bg-blue-900 bg-blue-200 transition-colors' />
                        </motion.div>
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: 1.5 }}
                            className='text-4xl font-bold text-center'
                        >
                            Carlos Parra
                        </motion.h1>
                        <motion.h3
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: 2 }}
                            className='text-center'
                        >
                            Desarrollador de sofware
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1.5 }}
                            className='dark:bg-gray-300 bg-black rounded-full text-white dark:text-black px-8 py-1 text-xs hover:dark:bg-gray-200 hover:bg-gray-600 cursor-default transition-colors'
                        >
                            Disponible para trabajar
                        </motion.div>
                    </div>
                </header>

                <section
                    className='w-full p-10 relative bg-fixed bg-cover bg-center'
                    style={{
                        backgroundImage: "url('/img/compu.jpg')",
                    }}
                >
                    <motion.div
                        
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{delay: 0, type: "spring"}}
                        className=" backdrop-blur-sm w-full rounded-xl border bg-[#ffffff77] dark:bg-[#00000047] text-black p-2 transition-colors max-w-6xl mx-auto "
                    >
                        <h2 className="text-4xl text-black dark:text-white text-center mb-5 transition-colors" >Lo que hago</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3" >

                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fas fa-code text-6xl"></i>
                                <h3 className="text-2xl text-center">Desarrollo web</h3>
                            </div>
                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fa-solid fa-pen-nib text-6xl"></i>
                                <h3 className="text-2xl text-center">Diseño UI</h3>
                            </div>
                            <div className='flex flex-col items-center text-black dark:text-white p-5 transition-colors' >
                                <i className="fa-solid fa-fingerprint text-center text-6xl"></i>
                                <h3 className="text-2xl text-center">Diseño de experiencia de usuario</h3>
                            </div>
                        </div>

                    </motion.div>

                </section>
                <section className='px-5 py-10 w-full relative' >
                    <h3 className='text-xl'><b>Mis herramientas</b></h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mt-5">
                        <Techs imgRoute='/img/html.png' text="HTML" />
                        <Techs imgRoute='/img/css.png' text="CSS" />
                        <Techs imgRoute='/img/js.png' text="Javascript" />
                        <Techs imgRoute='/img/react.png' text="React" />
                        <Techs imgRoute='/img/next.png' text="Next.js" colorClass='bg-white text-black' />
                        <Techs imgRoute='/img/vue.png' text="Vue" />
                        <Techs imgRoute='/img/motion.png' text="Framer motion" />
                        <Techs imgRoute='/img/mui.png' text="Material UI" colorClass='bg-blue-900' />
                        <Techs imgRoute='/img/tailwind.png' text="Tailwind CSS" />
                        <Techs imgRoute='/img/mongodb.png' text="MongoDB" />
                        <Techs imgRoute='/img/firebase.png' text="Firebase" />
                        <Techs imgRoute='/img/nodejs.png' text="Node.js" colorClass='bg-green-300 text-black' />
                    </div>
                </section>

                <section>
                    <h3 className='text-xl'><b>Experiencia</b></h3>
                    <div className='flex flex-col gap-2 py-5' >
                        <Experience
                            date="Oct/2023 - Actualidad" title="Jcoding"
                            description="Desarrollo frontend con frameworks de javascript como React.js, Next.js y Vue, Desarrollo de backend javascript y ASP.NET. Diseño UX / UI, y manejo de bases de datos."
                        />
                        <Experience
                            date="Oct/2021 - Oct/2023" title="Smartware"
                            description="Desarrollo frontend con Next.js firebase y Diseño UX / UI. Enfocado principalmente en el mantenimiento de un Saas para coaching de nicho."
                        />
                    </div>
                </section>

                <section className='px-5 py-10 w-full' >
                    <h3 className='text-xl'><b>Algunos de mis proyectos</b></h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3' >
                        <ProjectLink />
                    </div>
                </section>

            </main>

        </>
    )
}
