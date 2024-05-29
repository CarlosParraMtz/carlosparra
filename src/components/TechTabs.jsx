import { useState } from 'react'
import Techs from './Techs'
import { AnimatePresence, motion } from 'framer-motion'

const allTabs = [
    { icon: <i className="fa-solid fa-desktop"></i>, label: "Frontend" },
    { icon: <i className="fa-solid fa-network-wired"></i>, label: "Backend" },
]

export default function TechTabs() {


    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <div className="pt-10 max-w-xs w-full mx-auto">
            <div className="flex gap-5 items-center mb-5">
                <i className="fa-solid fa-gears text-2xl"></i>
                <h4 className="text-2xl" >Desarrollo</h4>
            </div>

            <div className='rounded-xl shadow-sm bg-white dark:bg-black dark:border-white border transition-colors' >
                <nav className='p-1 rounded-md ' >
                    <ul className="flex w-full border-b border-gray-200 dark:border-gray-700 transition-colors" >
                        {
                            allTabs.map((item, index) =>
                                <li
                                    key={item.label}
                                    className={`
                                        flex justify-center items-center gap-4 flex-1 relative cursor-pointer py-2 rounded-t-lg
                                        ${index === selectedTab
                                            ? "bg-[#00000010] dark:bg-[#ffffff30] transition-colors"
                                            : ""
                                        }`
                                    }
                                    onClick={() => setSelectedTab(index)}
                                >
                                    {item.icon}
                                    {`${item.label}`}
                                    {index === selectedTab
                                        ? <motion.div
                                            className="absolute -bottom-0.5 h-0.5 w-full bg-blue-400" layoutId="underline"
                                        ></motion.div>
                                        : null}
                                </li>
                            )
                        }
                    </ul>
                </nav>

                <div className="">
                    <AnimatePresence mode="wait" >

                        <motion.div
                            key={selectedTab}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='grid grid-cols-3 grid-rows-3 gap-1 w-full p-5'
                        >
                            {
                                selectedTab === 0 && <>
                                    <Techs imgRoute='/img/html.png' text="HTML" />
                                    <Techs imgRoute='/img/css.png' text="CSS" />
                                    <Techs imgRoute='/img/js.png' text="Javascript" />
                                    <Techs imgRoute='/img/react.png' text="React" />
                                    <Techs imgRoute='/img/next.png' text="Next.js" colorClass='bg-white text-black' />
                                    <Techs imgRoute='/img/vue.png' text="Vue" />
                                    <Techs imgRoute='/img/motion.png' text="Framer motion" />
                                    <Techs imgRoute='/img/tailwind.png' text="Tailwind CSS" />
                                    <Techs imgRoute='/img/mui.png' text="Material UI" colorClass='bg-blue-900 text-white' />
                                </>
                            }
                            {
                                selectedTab === 1 && <>
                                    <Techs imgRoute='/img/nodejs.png' text="Node.js" colorClass='bg-green-300 text-black' />
                                    <Techs text="Express" />
                                    <Techs text="Jest.js" />
                                    <Techs imgRoute='/img/firebase.png' text="Firebase" />
                                    <Techs imgRoute='/img/mongodb.png' text="MongoDB" />
                                    <Techs text="Postgres" />
                                    <Techs text="Typescript" />
                                    <Techs text="C#" />
                                    <Techs text="ASP.NET" />
                                </>
                            }
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    )
}
