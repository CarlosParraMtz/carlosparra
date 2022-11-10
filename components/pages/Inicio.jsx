import SideButton from "../elements/SideButton"
import Link from 'next/link';
import ButtonsPair from "../elements/ButtonsPair";
import { motion } from "framer-motion";

export default function Inicio() {
    const variantes = {
        initialState: { x: -30, opacity: 0 },
        animateState: { x: 0, opacity: 1 },
        exitState: { x: 30, opacity: 0 }
    }
    return (
        <section id='portada' >
            <div style={{ maxWidth: "420px" }} >
                <motion.h1
                    initial="initialState"
                    animate="animateState"
                    exit={{ opacity: 0 }}
                    variants={variantes}
                    transition={{
                        delay: 0.3, duration: 0.3
                    }}
                >
                    <b>Hello! My name is Carlos Parra</b>.
                </motion.h1>

                <motion.p
                    initial="initialState"
                    animate="animateState"
                    exit={{ opacity: 0 }}
                    variants={variantes}
                    transition={{
                        delay: 0.6, duration: 0.3
                    }}
                >
                    {"I'm "} a frontend web developer, graphic designer and
                    UI / UX specialist. Feel free to take a look at my
                    latest projects on the
                    <Link href="/portfolio" passHref>
                        <a><b>{" web portfolio page."}</b></a>
                    </Link>
                </motion.p>

                <motion.p
                    initial="initialState"
                    animate="animateState"
                    exit={{ opacity: 0 }}
                    variants={variantes}
                    transition={{
                        delay: 0.9, duration: 0.3
                    }}
                >
                    Remotely avaliable at UTC-6.
                </motion.p>
            </div>

            <ButtonsPair
                right={{ link: "/portfolio", title: "Portfolio" }}
            />

        </section>
    )
}