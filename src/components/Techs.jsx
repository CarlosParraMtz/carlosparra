export default function Techs({ 
//  imgRoute, 
  text, 
//  colorClass = "bg-gray-200 dark:bg-gray-900" 
}) {
  return (
    <div className={`shadow rounded-full w-16 h-16 sm:h-20 sm:w-20 mx-auto border border-gray-700 dark:border-gray-200 transition-colors flex flex-col items-center justify-center p-4 transition-colors`} >
      {/* <div className={`shadow rounded-full w-full h-20 sm:h-24 flex flex-col items-center justify-center p-4 transition-colors ${colorClass}`} > */}
      {/* <img src={imgRoute} alt={imgRoute} className=" w-6 h-6 sm:w-10 sm:h-10 object-contain" /> */}
      <h4 className="text-center font-bold text-xs sm:text-md" >{text}</h4>
    </div>
  )
}
