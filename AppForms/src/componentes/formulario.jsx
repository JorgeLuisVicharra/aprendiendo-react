import { Fragment } from "react";
import { Button,Form } from "react-bootstrap";


const Formulario = () => {

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
