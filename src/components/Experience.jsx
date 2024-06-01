export default function Experience({ date, title, description }) {
    /* return (
        <div className='flex items-center gap-3 p-5 bg-[#212529] rounded-xl shadow'>
            
            <span className='rounded-full p-2 border-4 border-white w-10 h-10 flex items-center justify-center '>
                <div className='h-full w-full bg-white rounded-full' ></div>
            </span>
            <div className='flex flex-col gap-1 w-4/5' >
                <h5 className='font-bold text-xs text-gray-400' >{date}</h5>
                <h4 className='text-xl font-bold'>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    ) */
    return <div className="relative my-4 ml-12">
        <div className="bg-white dark:bg-black border transition-colors border-white shadow-lg w-full rounded-lg p-4">
            <span className="text-gray-400 dark:text-gray-500">{date}</span>
            <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
            <p className="text-gray-700 dark:text-white">{description}</p>
        </div>
        <div className="absolute bg-gray-400 dark:bg-gray-700 transition-colors rounded-full w-5 h-5 -left-9 top-10"></div>
    </div>
}
