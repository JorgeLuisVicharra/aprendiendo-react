import { Fragment } from "react";

function Header (){
    // Evento para manejar el clic en el botón
    const handleButtonClick = () => {
      alert("¡Gracias por tu interés! Pronto tendrás más información.");
      // Aquí puedes agregar más lógica, como redirigir a otra página o cambiar el estado
    };
  
    // Evento para manejar el mouse sobre las cajas
    const handleBoxMouseEnter = (event) => {
      event.currentTarget.style.backgroundColor = "#f0f0f0"; // Cambia el color de fondo al pasar el ratón
    };
  
    const handleBoxMouseLeave = (event) => {
      event.currentTarget.style.backgroundColor = ""; // Restaura el color de fondo original
    };
  
    return (
      <>
        {/* Sección Home */}
        <section id="home">
          <marquee behavior="slide" direction="up">
            <h1>CHIBERTEC | EDUCACIÓN EN LÍNEA</h1>
            <h1>DESCUENTOS EN TODOS NUESTROS CURSOS</h1>
          </marquee>
          <button className="btn" onClick={handleButtonClick}>
            <a href="contact.html">Más Información</a>
          </button>
        </section>
  
        {/* Sección Servicios */}
        <section id="home1">
          <div id="services">
            <div
              className="box"
              onMouseEnter={handleBoxMouseEnter}
              onMouseLeave={handleBoxMouseLeave}
            >
              <i
                className="fa-solid fa-book-open"
                style={{ fontSize: "50px", paddingLeft: "80px", paddingBottom: "20px" }}
              ></i>
              <h2 className="h-secondary center">Cursos Actualizados</h2>
              <p className="center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit et, quo rem totam voluptatum veritatis
                architecto fuga voluptatem illo blanditiis, quod molestiae facilis! Reprehenderit dicta repudiandae
                quisquam iure. Eveniet consequuntur hic quibusdam laudantium doloremque!
              </p>
            </div>
  
            <div
              className="box"
              onMouseEnter={handleBoxMouseEnter}
              onMouseLeave={handleBoxMouseLeave}
            >
              <i
                className="fa-sharp fa-solid fa-chalkboard-user"
                style={{ fontSize: "50px", paddingLeft: "80px", paddingBottom: "20px" }}
              ></i>
              <h2 className="h-secondary center">Las mejores plataformas digitales</h2>
              <p className="center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit et, quo rem totam voluptatum veritatis
                architecto fuga voluptatem illo blanditiis, quod molestiae facilis! Reprehenderit dicta repudiandae
                quisquam iure. Eveniet consequuntur hic quibusdam laudantium doloremque!
              </p>
            </div>
  
            <div
              className="box"
              onMouseEnter={handleBoxMouseEnter}
              onMouseLeave={handleBoxMouseLeave}
            >
              <i
                className="fa-sharp fa-solid fa-star"
                style={{ fontSize: "50px", paddingLeft: "80px", paddingBottom: "20px" }}
              ></i>
              <h2 className="h-secondary center">Certifícate con nosotros</h2>
              <p className="center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit et, quo rem totam voluptatum veritatis
                architecto fuga voluptatem illo blanditiis, quod molestiae facilis! Reprehenderit dicta repudiandae
                quisquam iure. Eveniet consequuntur hic quibusdam laudantium doloremque!
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Header;