export default function Input({ id, label, textarea = false, ...props }) {

    const inputProps = { ...props }
    delete inputProps.label;
    delete inputProps.textarea;

    const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors resize-none"

    return (
        <div>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white transition-colors">{label}</label>
            {
                textarea 
                ? <textarea className={inputClass} {...inputProps} rows={5}   />
                : <input className={inputClass} {...inputProps} />
            }
        </div>
    )
}
