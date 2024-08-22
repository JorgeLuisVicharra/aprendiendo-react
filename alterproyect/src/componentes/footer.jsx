import { Fragment } from "react";

function Footer(){
    const [message, setMessage] = useState("");

  // Cambiar el mensaje del footer según el día de la semana
  useEffect(() => {
    const dayOfWeek = new Date().getDay();
    const messages = [
      "Feliz Domingo!",
      "Buen inicio de semana!",
      "Sigue adelante!",
      "Mitad de semana!",
      "Casi viernes!",
      "Feliz viernes!",
      "Disfruta tu fin de semana!",
    ];
    setMessage(messages[dayOfWeek]);
  }, []);

  // Evento para cambiar el color del texto al pasar el ratón sobre el copyright
  const handleMouseEnter = (event) => {
    event.currentTarget.style.color = "orange";
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.color = "black";
  };

  // Evento para volver al inicio de la página con desplazamiento suave
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="bottem">
      <hr />
      <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Copyright &copy; 2024, todos los derechos reservados
      </p>
      <p>{message}</p>
      <button onClick={handleScrollToTop} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
        Volver al inicio
      </button>
    </footer>
  );
};

export default Footer;

