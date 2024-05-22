import carlos from '../assets/carlos.png'
import dev from '../assets/dev.jpg'
import Experience from '../components/Experience.jsx'
import Techs from '../components/Techs.jsx'

export default function Index() {
    return (
        <main className='max-w-xl mx-auto bg-[#2a2e32] text-white' >
            <header className="w-full flex flex-col items-center gap-2 py-10 px-5" >
                <div className='rounded-full h-20 w-20 overflow-hidden border-2 border-gray-300' >
                    <img src={carlos} alt="Carlos Parra" className='bg-gray-600' />
                </div>
                <h1 className='text-4xl font-bold text-center'>Carlos Parra</h1>
                <h3 className='text-center' >Desarrollador de sofware</h3>
                <div className='bg-gray-300 rounded-full text-black px-8 py-1 text-xs hover:bg-gray-200 cursor-default'>
                    Disponible para trabajar
                </div>
            </header>
            <div className='w-full h-[240px] sm:h-[320px]'>
                <img src={dev} className='w-full h-full object-cover' />
            </div>
            <section className='px-5 py-10'>
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

            <section className='px-5 py-10 w-full' >
                <h3 className='text-xl'><b>Algunos de mis proyectos</b></h3>

            </section>

        </main>
    )
}
