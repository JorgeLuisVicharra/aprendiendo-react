import { Fragment } from "react";

function Navbar(){
    // Función para manejar el clic en los enlaces
    const handleClick = (event) => {
      event.preventDefault(); // Previene la acción por defecto del enlace
      console.log(`Has hecho clic en el enlace: ${event.target.textContent}`);
      // Aquí puedes agregar más lógica, como cambiar el estado o redirigir
    };
  
    return (
      <ul>
        <li className="item">
          <a href="index1.html" onClick={handleClick}>Home</a>
        </li>
        <li className="item">
          <a href="#about" onClick={handleClick}>Nosotros</a>
        </li>
        <li className="item">
          <a href="#courses" onClick={handleClick}>Cursos</a>
        </li>
        <li className="item">
          <a href="#events" onClick={handleClick}>Eventos</a>
        </li>
        <li className="item">
          <a
            href="contact.html"
            style={{ backgroundColor: "white", color: "black", borderRadius: "20px" }}
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  };
  
  export default Navbar;