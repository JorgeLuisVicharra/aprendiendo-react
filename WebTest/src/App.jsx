import { Fragment } from "react";
import titulo from './componentes/titulo';
import footer from './componentes/footer';
import Ciudad from "./componentes/ciudad";

function App (){

    return (
      <>
      <titulo/>
      <Ciudad
        nombre="Lima"
        descripcion="Capital del Peru"
        imagen="https://images.app.goo.gl/fwZRbnV45szKzDuv6"></Ciudad>
      <Ciudad
        nombre="Arequipa"
        descripcion="Encantadora tierra volcanica"
        imagen="https://images.app.goo.gl/k3XVXoQcapCKYZup6"></Ciudad>
      <footer/>
      </>
    );
}

export default App;
