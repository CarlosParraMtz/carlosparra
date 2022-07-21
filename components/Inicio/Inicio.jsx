import { useState, forwardRef } from 'react'
import 'animate.css'
import Menu from '../Menu'
import { Dialog, IconButton, Slide } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Inicio() {

    const [pag, setPag] = useState(null)

    return (
        <div className="container-index">
            <h1 className='index-title' >CARLOS <span>PARRA</span></h1>
            <h4 className='index-subtitle animate__animated animate__bounceIn' >DISEÑO WEB / UX</h4>
            <Menu setPag={setPag} />

            <Dialog
                open={pag !== null}
                fullScreen
                onClose={() => setPag(null)}
                TransitionComponent={Transition}
            >
                <div className='dialog-container' >
                    <div className="bar-dialog">
                        <IconButton onClick={() => setPag(null)} >
                            <ArrowBackIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </div>
                    <div className='dialog-body' >
                        Aquí la pag
                    </div>
                </div>
            </Dialog>

        </div>
    )
}