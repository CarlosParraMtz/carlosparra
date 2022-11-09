//* Components
import SideButton from "../elements/SideButton";
import PortfolioCard from "../elements/PortfolioCard";
import Link from 'next/link';
import Image from 'next/image';
import ButtonsPair from "../elements/ButtonsPair";
import { motion } from "framer-motion";

/* 
<div className="chips">
<Chip label="react" />
<Chip label="next" />
<Chip label="firebase" />
<Chip label="react" />
</div>
*/
export default function Portfolio({ data }) {

    return (
        <section id='portfolio'>
            <div className="centered">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 5, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5
                    }}
                >
                    <h1>Web developer portfolio</h1>
                </motion.div>


                <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 5, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 0.8,
                        duration: 0.5
                    }}>
                    {"Showing all my finished projects and the ones I'm working on."}
                </motion.p>


                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 1.3,
                        duration: 0.5
                    }}
                    className="portfolio-container" >
                    {
                        data.map((d, i) => (

                            <PortfolioCard data={d} i={i} key={i} />

                        ))
                    }
                </motion.div>

            </div>




            <ButtonsPair
                left={{ link: "/", title: "Home" }}
                right={{ link: "/contact", title: "Contact" }}
            />


        </section>
    )
}
