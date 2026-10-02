import { useState } from "react";

function Contador() {
    const [numero, setNumero] = useState(0)

    return (
        <div>
            <h1>Estado contador { numero } </h1>
            
            <button onClick={ () => {
                setNumero(numero + 1)
            }}>
                incrementar contador
            </button>

            <button onClick={ () => {
                setNumero(numero - 1)
            }}>
                decrementar contador
            </button>

        </div>
    )
}

export default Contador
