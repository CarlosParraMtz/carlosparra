import { motion } from "framer-motion"
import animProps from "../config/animationProps"

export default function Experience({ date, title, description }) {
    
    return <motion.div {...animProps} className="relative my-4 ml-12">
        <div className="bg-white dark:bg-black border transition-colors border-white shadow-lg w-full rounded-lg p-4">
            <span className="text-gray-400 dark:text-gray-500">{date}</span>
            <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-white">{description}</p>
        </div>
        <div className="absolute bg-gray-400 dark:bg-gray-700 transition-colors rounded-full w-5 h-5 -left-9 top-10"></div>
    </motion.div>
}
