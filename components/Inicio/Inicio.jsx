//* Módulos
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

//* Componentes
import Menu from '../Menu';
import NuevoMenu from '../NuevoMenu';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


export default function Inicio() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="container-index">

            <Menu />
            <NuevoMenu />

            <section id='portada' >
                <div >
                    <h1
                        className='index-title'
                        data-aos='zoom-in'
                        data-aos-delay='800'
                    >
                        CARLOS <span>PARRA</span>
                    </h1>
                    <h4
                        className='index-subtitle'
                        data-aos='zoom-in'
                        data-aos-delay='1500'
                    >
                        DISEÑO WEB / UX
                    </h4>
                </div>
            </section>


            <About />
            <Portfolio />
            <Contact />


        </div>
    )
}