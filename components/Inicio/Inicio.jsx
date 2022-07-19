import { useState } from 'react'
import 'animate.css'
import Menu from '../Menu'
import { Dialog } from '@mui/material'


export default function Inicio() {

    const [pag, setPag] = useState(null)

    return (
        <div className="container-index">
            <h1 className='index-title' >CARLOS <span>PARRA</span></h1>
            <h4 className='index-subtitle animate__animated animate__bounceIn' >DISEÑO WEB / UX</h4>
            <Menu setPag={setPag} />

            <Dialog open={pag !== null} fullWidth >
                Prueba
            </Dialog>

        </div>
    )
}