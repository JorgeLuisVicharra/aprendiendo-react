import { Fragment, useState } from "react";

function Contador(){
    const [contar, setContar] = useState(0);
    const hacerClic = () => {
        setContar(contar + 1);
    }

    return(
        <>
        <p>El numero de clics realizados es: {contar}</p>
        <button onClick={hacerClic}>Click aqui</button>
        </>
    );
}

export default Contador;