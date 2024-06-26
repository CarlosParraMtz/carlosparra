import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import toast from 'react-hot-toast'

import Input from './elements/Input'
import Checkbox from './elements/Checkbox'
import PolicyPrivacy from './PolicyPrivacy'

import sendMail from '../controllers/sendmail'
import animProps from '../config/animationProps'

export default function SendMailForm() {

    const defaultFormData = {
        from: '',
        email: '',
        text: ''
    }

    const [policy, setPolicy] = useState(false)
    const [formData, setFormData] = useState(defaultFormData)
    const [checkAccept, setCheckAccept] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const ok = await sendMail(formData)
        if (ok) {
            toast.success("Correo enviado")
            emptyForm()
        }
        else toast.error("Ha habido un error. Favor de intentar más tarde.");
        setLoading(false)
    }

    const onChangeFD = (data, value) => {
        setFormData({ ...formData, [data]: value })
    }

    const openPolicy = () => { setPolicy(true) }
    const closePolicy = () => { setPolicy(false) }
    const acceptAndClose = () => {
        setCheckAccept(true)
        setPolicy(false)
    }


    const emptyForm = () => {
        setFormData(defaultFormData)
        setCheckAccept(false)
    }

    return (
        <>
            <motion.form {...animProps} onSubmit={onSubmit}
                className="flex flex-col gap-5"
            >
                <Input label="Nombre" required
                    value={formData.from} onChange={e => onChangeFD("from", e.target.value)}
                />
                <Input label="Email" type="email" required
                    value={formData.email} onChange={e => onChangeFD("email", e.target.value)}
                />
                <Input required textarea label="Cuéntame sobre tu proyecto. Si lo deseas, incluye un número de teléfono (Solo disponible para México)"
                    value={formData.text} onChange={e => onChangeFD("text", e.target.value)}
                />
                <Checkbox
                    label={<>He leído y acepto la <span className="text-blue-500 cursor-pointer" onClick={openPolicy}>política de privacidad</span></>}
                    required
                    checked={checkAccept}
                    onChange={e => setCheckAccept(e.target.checked)}
                />
                <div className='flex items-center justify-end gap-5' >
                    <button type="submit"
                        disabled={loading}
                        className={`${loading
                            ? "bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                            : "bg-blue-500 hover:bg-blue-400 text-white"} 
                            px-5 py-2 rounded-xl transition-colors`}
                    >
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {
                        !loading &&
                        <button type="button"
                            onClick={emptyForm}
                            className="bg-red-500 hover:bg-red-400 text-white px-5 py-2 rounded-xl transition-colors">
                            Reiniciar formulario
                        </button>
                    }
                </div>

            </motion.form>
            <AnimatePresence>
                {policy &&
                    <motion.div
                        key="modal-policy-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 h-screen w-screen bg-[#00000070] p-3 pt-20 lg:p-10"
                    >
                        <motion.div
                            key="modal-policy"
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            exit={{ y: -50 }}
                            className="w-full max-w-2xl mx-auto h-full bg-white dark:bg-gray-700 p-5 rounded-2xl flex flex-col shadow transition-colors"
                        >
                            <div className="flex justify-between mb-5">
                                <h3 className="text-2xl lg:text-4xl font-bold">Política de privacidad</h3>
                                <button onClick={closePolicy} className="bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 h-10 w-10 rounded-full transition-colors" >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <PolicyPrivacy />

                            <div className='flex items-center justify-center mt-5'>
                                <button
                                    onClick={acceptAndClose}
                                    className='px-5 py-2 rounded-xl bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors'
                                >
                                    Aceptar y cerrar
                                </button>
                            </div>

                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>

        </>
    )
}
