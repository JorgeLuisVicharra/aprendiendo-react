import { Fragment } from "react";
import { Button,Form } from "react-bootstrap";


const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [celular, setCelular] = useState('');
    const [lugar, setLugar] = useState('');

    const realizarEnvio = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!nombre) newErrors.nombre = 'El nombre es obligatorio';
        if(!apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
        if(!celular) newErrors.celular = 'El celular es obligatorio';
        if(!lugar) newErrors.lugar = 'El lugar es obligatorio';
        
    }

    return(
        <>
        <Form>
            <Form.group>
                <Form.Label>Formulario de Datos</Form.Label>
                <Form.Control type='text' placeholder="ingrese nombres"></Form.Control>
                <Form.Control type='text' placeholder="ingrese apellidos"></Form.Control>
                <Form.Control type='text' placeholder="ingrese celular"></Form.Control>
                <Form.Control type='text' placeholder="ingrese lugar de procedencia"></Form.Control>
            </Form.group>
            <button>Enviar datos</button>
        </Form>
        </>
    );
}

export default Formulario;
