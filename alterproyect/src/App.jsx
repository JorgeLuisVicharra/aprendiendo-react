import { Fragment } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style1.css'
import Header from './componentes/header'
import Navbar from './componentes/navbar'
import About from './componentes/about'
import Cursos from './componentes/cursos'
import Eventos from './componentes/eventos'
import Footer from './componentes/footer'

function App() {
  
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Cursos />
      <Eventos />
      <Footer />
    </div>
    
  )
}

export default App
