import { Fragment, useState } from "react";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Contador(){
    const [contar, setContar] = useState(0);
    const hacerClic = () => {
        setContar(contar + 1);
    }

    return(
        <>
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-auto">
                    <p className="display-6 text-center">El numero de clics realizados es: {contar}</p>
                    <button type='button' className='btn btn-success' onClick={hacerClic}>Click aqui</button>    
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Contador;