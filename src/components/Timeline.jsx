import Experience from './Experience';

const Timeline = () => {
    return (
        <div className="relative flex items-start w-full border-b-2 mt-10 border-gray-900 dark:border-gray-600 transition-colors">
            {/* Línea vertical */}
            <div className="absolute w-1 h-full bg-gray-400 left-5 dark:bg-gray-700 transition-colors"></div>

            {/* Tarjetas */}
            <div className="flex-1 flex flex-col items-start">
                <Experience
                    date="Oct/2023 - Actualidad" title="Jcoding"
                    description="Desarrollo frontend con frameworks de javascript como React.js, Next.js y Vue, Desarrollo de backend javascript y ASP.NET. Diseño UX / UI, y manejo de bases de datos."
                />
                <Experience
                    date="Oct/2021 - Oct/2023" title="Smartware"
                    description="Desarrollo frontend con Next.js firebase y Diseño UX / UI. Enfocado principalmente en el mantenimiento de un Saas para coaching de nicho."
                />
            </div>
        </div>
    );
}

export default Timeline;