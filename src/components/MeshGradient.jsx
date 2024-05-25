const MeshGradient = () => (
    <div className={`overflow-hidden`}>
        <div className="w-[800px] h-[800px] absolute top-[0px] left-[0px] bg-red-400 dark:bg-red-600 opacity-20 filter blur-3xl animate-[first_15s_ease-in-out_infinite] rounded-full transition-colors" />
        <div className="w-[800px] h-[800px] absolute top-56 left-64 bg-purple-400 dark:bg-purple-400 opacity-20 filter blur-3xl animate-[one_12s_ease-in-out_infinite] rounded-full transition-colors" />
        <div className="w-[660px] h-[660px] absolute top-0 right-0 bg-blue-300 dark:bg-blue-600 opacity-30 filter blur-3xl animate-[two_14s_ease-in-out_infinite] rounded-full transition-colors" />
        <div className="w-[860px] h-[860px] absolute top-[400px] left-[700px] bg-cyan-300 dark:bg-cyan-800 opacity-40 filter blur-3xl animate-[three_12s_ease-in-out_infinite] rounded-full transition-colors" />
    </div>
);

export default MeshGradient;