import Router from './router/router.jsx'
import { Toaster } from 'react-hot-toast'
import toastOptions from './config/toastOptions.js'

function App() {
  return <>
    <Router />
    <Toaster
      position="bottom-right"
      toastOptions={toastOptions} />
  </>
}

export default App
