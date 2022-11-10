import Link from 'next/link';
import { motion } from 'framer-motion';
export default function NavLink({ to, text, delay }) {
    return (
        <Link href={to} passHref>
            <motion.a
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ delay: (delay) }}
                className='nav-link'
            >
                {text}
            </motion.a>
        </Link>
    )
}