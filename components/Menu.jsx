import { Tooltip } from '@mui/material';

export default function Menu() {
    return (
        <div className='index-menu' >
            <button className="index-menu-item">
                <img src='/images/icons/programmer.png' width='50px' alt='Sobre mí' />
                <p>Sobre mí</p>
            </button>
            <button className="index-menu-item">
                <img src='/images/icons/technology.png' width='50px' alt='Sobre mí' />
                <p>Tecnologías</p>
            </button>
            <button className="index-menu-item">
                <img src='/images/icons/artificial-intelligence.png' width='50px' alt='Sobre mí' />
                <p>Habilidades blandas</p>
            </button>
            <button className="index-menu-item">
                <img src='/images/icons/portfolio.png' width='50px' alt='Sobre mí' />
                <p>Portafolios</p>
            </button>
            <button className="index-menu-item">
                <img src='/images/icons/comunicar.png' width='50px' alt='Sobre mí' />
                <p>Comunicarse conmigo</p>
            </button>
        </div>
    )
}
