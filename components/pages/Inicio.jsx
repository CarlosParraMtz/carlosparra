import SideButton from "../elements/SideButton"
import Link from 'next/link';
import ButtonsPair from "../elements/ButtonsPair";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Inicio() {
    const variantes = {
        initialState: { x: -30, opacity: 0 },
        animateState: { x: 0, opacity: 1 },
        exitState: { x: 30, opacity: 0 }
    }
    return (
        <section id='portada' >
            <div className="cover-card" >
                <div className="foto-cover">
                    <div className="texto-cover">
                        <h1>Carlos <span>Parra</span></h1>
                        <p>Software developer</p>
                    </div>

                    <div className="img-cover-container" >
                        <Image src="/images/yo.png" alt="Carlos Parra"
                            layout="responsive"
                            objectFit="contain"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>


                <div className="buttons-cover-container">
                    <button>About me</button>
                    <button>Portfolio</button>
                    <button>Contact</button>
                    <button>Blog</button>
                </div>


            </div>

            <ButtonsPair
                right={{ link: "/portfolio", title: "Portfolio" }}
            />

        </section>
    )
}