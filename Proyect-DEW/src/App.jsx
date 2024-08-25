import { useState } from 'react'
import { Fragment } from 'react'
import navbar from './componentes/navbar';
import carrusel from './componentes/carrusel';
import cards from './componentes/cards';
import acordeon from './componentes/acordeon';

function App(){
  return(
    <>
      <navbar/>
      <carrusel/>
      <cards/>
      <acordeon/>
      
      </>
  );
}

export default App;
