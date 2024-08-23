import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style1.css'
import Header from './componentes/header'
import Navbar from './componentes/navbar'
import About from './componentes/about'
import Cursos from './componentes/cursos'
import Eventos from './componentes/eventos'
import Footer from './componentes/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
