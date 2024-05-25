import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export default function DarkModeSwitch() {
    const [dark, setDark] = useState(true)

    const setDarkMode = () => {
        document.documentElement.classList.add('dark')
        setDark(true)
    }
    const setLightMode = () => {
        document.documentElement.classList.remove('dark')
        setDark(false)
    }
    const toggleDarkMode = () => {
        if (dark) setLightMode();
        else setDarkMode();
    }

    useEffect(() => { setDarkMode() }, [])

    return (
        <motion.div
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.2 }}
            className={`
                fixed right-10 top-10 
                rounded-full h-10 w-16 p-2
                dark:bg-gray-700 bg-gray-300
                cursor-pointer
                flex items-center
                transition-colors
                ${dark ? "justify-end" : "justify-start"}
            `} >
            <motion.div
                className="w-6 h-6 bg-black dark:bg-white rounded-full transition-colors"
                layout
                transition={spring}
            />
        </motion.div>
    )
}
