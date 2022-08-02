import { useRouter } from "next/router"

export default function Menu({ setPag }) {

    const Router = useRouter();

    return (
        <div className='index-menu' >
            <button className="index-menu-item" onClick={() => Router.push('#portada')} >
                <img src='/images/icons/home.png' width='50px' alt='Sobre mí' />
                <p>Sobre mí</p>
            </button>
            
            <button className="index-menu-item" onClick={() => Router.push('#about')} >
                <img src='/images/icons/programmer.png' width='50px' alt='Sobre mí' />
                <p>Tecnologías</p>
            </button>

            <button className="index-menu-item" onClick={()=> Router.push('#portfolio') } >
                <img src='/images/icons/portfolio.png' width='50px' alt='Sobre mí' />
                <p>Portafolios</p>
            </button>

            <button className="index-menu-item" onClick={() => Router.push('#contact')} >
                <img src='/images/icons/comunicar.png' width='50px' alt='Sobre mí' />
                <p>Comunicarse conmigo</p>
            </button>
        </div>
    )
}
