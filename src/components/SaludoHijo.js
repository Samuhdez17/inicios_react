function SaludoHijo(props) {
    let metodoHijo = props.comHP
    let nombre = props.nombre

    return(
        <div>
            <h1>SLAUDO HIJO</h1>
            <button onClick={ () => metodoHijo('Llamada desde el hijo ' + nombre) }> Llamar al padre </button>
            
            <button onClick={ () => {
                nombre = 'lucas'
            }}> cambiar nombre </button>

            <button onClick={ () => {
                nombre = props.nombre
            }}> volver a nombre original </button>

        </div>
    )
}

export default SaludoHijo