import NuevoMenu from '../NuevoMenu';
import About from './About';


export default function Inicio() {
    return (
        <div className="container-index">

            {/* <Menu setPag={setPag} /> */}

            <NuevoMenu />

            <section id='portada' >
                <div>
                    <h1 className='index-title' >CARLOS <span>PARRA</span></h1>
                    <h4 className='index-subtitle' >DISEÑO WEB / UX</h4>
                </div>
            </section>


            <About />



        </div>
    )
}