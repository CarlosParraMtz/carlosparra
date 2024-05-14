import carlos from './assets/carlos.png'
import dev from './assets/dev.jpg'
import Experience from './components/Experience.tsx'

function App() {

  return (
    <main className='max-w-xl mx-auto bg-white' >
      <header className="w-full flex flex-col items-center gap-2 py-10 px-5" >
        <div className='rounded-full h-20 w-20 overflow-hidden border-2 border-gray-300' >
          <img src={carlos} />
        </div>
        <h1 className='text-4xl font-bold text-center'>Carlos Parra</h1>
        <h3 className='text-center' >Desarrollador de sofware</h3>
        <div className='bg-gray-800 rounded-full text-white px-8 py-1 text-xs hover:bg-gray-700 cursor-default'>
          Disponible para trabajar
        </div>
      </header>
      <div className='w-full h-[240px] md:h-[320px]'>
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
      <section className='px-5 py-10' >
        <h3 className='text-xl'><b>Tecnologías</b></h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          
        </div>
      </section>



    </main>
  )
}

export default App
