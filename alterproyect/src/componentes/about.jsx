import { Fragment } from "react";

function About(){
    const handleButtonClick = () => {
        alert("¡Explora más sobre nosotros!");
        // Aquí podrías redirigir a otra página o realizar alguna otra acción
      };
    
      // Evento para cambiar la opacidad de la imagen al pasar el ratón
      const handleImageMouseEnter = (event) => {
        event.currentTarget.style.opacity = "0.8";
      };
    
      const handleImageMouseLeave = (event) => {
        event.currentTarget.style.opacity = "1";
      };
    
      return (
        <section id="about">
          <div className="about-section">
            <h1>Nosotros</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, magnam. Rem, id vero! Reiciendis soluta non
              distinctio asperiores fugiat voluptatum. Ad, veritatis nihil consequuntur totam voluptatem, atque dolore cum
              perferendis dicta earum aut velit vitae officiis labore hic dignissimos dolor modi! Doloremque est ad cum
              adipisci minima laudantium, ipsam molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              modi quasi similique accusamus vero, magni soluta itaque eum ut temporibus.
            </p>
          </div>
          <img
            src="./images/about-us.jpg"
            alt="Nosotros"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }} // Estilo para suavizar la transición de opacidad
          />
          <button className="btn1" onClick={handleButtonClick}>
            <a href="#more-info">Más Información</a>
          </button>
        </section>
      );
    };
    
    export default About;
    