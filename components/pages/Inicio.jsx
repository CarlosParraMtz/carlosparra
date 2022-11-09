import SideButton from "../elements/SideButton"
import Link from 'next/link';
import ButtonsPair from "../elements/ButtonsPair";
import { motion } from "framer-motion";

export default function Inicio() {
    return (
        <section id='portada' >
            <motion.div
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 1,
                    duration: 1
                }}
                style={{ maxWidth: "420px" }} >
                <h1>
                    <b>Hello! My name is Carlos Parra</b>.
                </h1>
                <p>
                    {"I'm "} a frontend web developer, graphic designer and
                    UI / UX specialist. Feel free to take a look at my
                    latest projects on the
                    <Link href="/portfolio" passHref>
                        <a><b>{" web portfolio page."}</b></a>
                    </Link>
                </p>
                <p>
                    Remotely avaliable at UTC-6.
                </p>
            </motion.div>

            <ButtonsPair
                right={{ link: "/portfolio", title: "Portfolio" }}
            />

        </section>
    )
}