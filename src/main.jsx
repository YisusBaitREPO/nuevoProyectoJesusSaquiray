
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Saludo from './assets/components/Saludo.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App />
  <Saludo/>
  </>
)
