type ExperienceProps = {
    date: string,
    title: string,
    description: string
}

export default function Experience({ date, title, description }: ExperienceProps) {
    return (
        <div className='flex items-center gap-3 p-5 bg-gray-100'>
            <span className='rounded-full p-2 border-4 border-gray-800 w-10 h-10 flex items-center justify-center '>
                <div className='h-full w-full bg-gray-800 rounded-full' ></div>
            </span>
            <div className='flex flex-col gap-1 w-4/5' >
                <h5 className='font-bold text-xs text-gray-600' >{date}</h5>
                <h4 className='text-xl font-bold'>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}
