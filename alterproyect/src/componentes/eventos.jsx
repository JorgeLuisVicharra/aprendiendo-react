import { Fragment } from "react";

function Eventos (){
    // Evento para cambiar la opacidad de la imagen al pasar el ratón
  const handleImageMouseEnter = (event) => {
    event.currentTarget.style.opacity = "0.8";
  };

  const handleImageMouseLeave = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  // Evento para manejar el clic en una caja de evento
  const handleEventClick = (eventDetails) => {
    alert(`Detalles del evento: ${eventDetails}`);
    // Aquí podrías redirigir a una página con más información sobre el evento
  };

  return (
    <section id="events">
      <h1>Próximos eventos</h1>
      <div id="events-section">
        <div
          className="box-2"
          onClick={() => handleEventClick("23 de Agosto: Evento de Fotografía")}
        >
          <img
            src="./images/event-1.jpg"
            alt="event1"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <h2>23 de Agosto</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div
          className="box-2"
          onClick={() => handleEventClick("06 de Septiembre: Taller de Programación")}
        >
          <img
            src="./images/event-2.jpg"
            alt="event2"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <h2>06 de Septiembre</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div
          className="box-2"
          onClick={() => handleEventClick("04 de Octubre: Conferencia de Data Science")}
        >
          <img
            src="./images/event-3.jpg"
            alt="event3"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <h2>04 de Octubre</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;

