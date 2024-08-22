import { Fragment } from "react";

function Cursos(){
    // Evento para cambiar la opacidad de la imagen al pasar el ratón
  const handleImageMouseEnter = (event) => {
    event.currentTarget.style.opacity = "0.8";
  };

  const handleImageMouseLeave = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  // Evento para manejar el clic en el botón "Apply Now"
  const handleApplyNowClick = () => {
    alert("¡Aplicando al curso!");
    // Aquí podrías redirigir a otra página o realizar alguna otra acción
  };

  // Evento para manejar el clic en el botón "Ver todos los cursos"
  const handleViewAllCoursesClick = () => {
    alert("Mostrando todos los cursos.");
    // Aquí podrías redirigir a la sección de todos los cursos
  };

  return (
    <section id="courses">
      <h1>Los cursos más solicitados</h1>
      <div id="courses-section">
        <div className="box-1">
          <img
            src="./images/course-1.jpg"
            alt="Fotografía"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Fotografía</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>

        <div className="box-1">
          <img
            src="./images/course-2.jpg"
            alt="Programación en Python"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Programación en Python</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>

        <div className="box-1">
          <img
            src="./images/course-3.jpg"
            alt="Programación en Java"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Programación en Java</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>
      </div>

      <div id="courses-section1">
        <div className="box-1">
          <img
            src="./images/course-6.jpg"
            alt="Desarrollo de Páginas Web"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Desarrollo de Páginas Web</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>

        <div className="box-1">
          <img
            src="./images/course-5.jpg"
            alt="Marketing"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>

        <div className="box-1">
          <img
            src="./images/course-4.jpg"
            alt="Data Science"
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{ width: "100%", transition: "opacity 0.3s ease" }}
          />
          <div className="overlay">
            <div className="text">
              <button className="btn2" onClick={handleApplyNowClick}>
                <a href="contact.html">Apply Now</a>
              </button>
            </div>
          </div>
          <h2>Data Science</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sapiente autem nulla doloribus animi
            maxime aliquid quae totam cum quia.
          </p>
        </div>
      </div>

      <button className="btn3" onClick={handleViewAllCoursesClick}>
        <a href="#all-courses">Ver todos los cursos</a>
      </button>
    </section>
  );
};

export default Courses;
