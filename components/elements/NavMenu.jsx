import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import NavLink from './NavLink';

export default function NavMenu() {

    const [open, setOpen] = useState(false);







    return (
        <>
            <button className="nav-menu-btn" onClick={() => setOpen(!open)} >
                •••
            </button>

            <AnimatePresence>
                {open &&
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="nav-menu-screen"
                        />

                        <motion.div
                            initial={{ maxWidth: 0, opacity: 0 }}
                            animate={{ maxWidth: "400px", opacity: 1 }}
                            exit={{ maxWidth: 0, opacity: 0 }}
                            transition={{delay:0.5}}
                            className="nav-menu"
                            onClick={() => setOpen(false)}
                            >


                            <NavLink to="/" text="Home" delay={0.2} />
                            <NavLink to="/portfolio" text="Portfolio" delay={0.6} />
                            <NavLink to="/contact" text="Contact" delay={1} />
                            
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}
