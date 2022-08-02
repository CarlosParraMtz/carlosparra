import React from 'react'

export default function NuevoMenu() {
    return (
        <header id='header' >
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li>
                        <a href="#portada" className="nav-link">
                            <div>
                                <img src='/images/icons/home.png' width='30px' alt='Home' />
                            </div>
                            <span>Inicio</span>

                        </a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">
                            <div>
                                <img src='/images/icons/programmer.png' width='30px' alt='Sobre mí' />
                            </div>
                            <span>Sobre mí</span>
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="nav-link">
                            <div>
                                <img src='/images/icons/portfolio.png' width='30px' alt='Sobre mí' />
                            </div>
                            <span>Portafolios</span>
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="nav-link">
                            <div>
                                <img src='/images/icons/comunicar.png' width='30px' alt='Sobre mí' />
                            </div>
                            <span>Comunicarse conmigo</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
