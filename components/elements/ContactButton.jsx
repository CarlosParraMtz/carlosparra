import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ContactButton({ i, link, color = "#333", image, title }) {
    return (
        <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6 + (0.2 * i) }}
            href={link} target="_blank" rel="noreferrer" >
            <button style={{ background: color }} >
                <div className="social-button-image">
                    <Image src={`/images/icons/${image}.svg`} alt="whatsapp" layout='fill' />
                </div>
                <span>
                    <strong> {title} </strong>
                </span>
            </button>
        </motion.a>
    )
}
