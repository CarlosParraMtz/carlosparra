import React from 'react'
import { motion } from 'framer-motion'

export default function Chip({ label, i }) {
    return (
        <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6 + (0.1 * i) }}
            className='chip' >
            <p><b> {label} </b></p>
        </motion.div>
    )
}
