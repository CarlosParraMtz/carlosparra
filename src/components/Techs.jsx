export default function Techs({ imgRoute, text, colorClass = "bg-[#212529]" }) {
  return (
    <div className={`shadow-lg rounded-xl w-full flex flex-col items-center justify-center p-4 ${colorClass}`} >
      <img src={imgRoute} alt={imgRoute} className="w-16 h-16 object-contain" />
      <h4 className="text-center font-bold" >{text}</h4>
    </div>
  )
}
