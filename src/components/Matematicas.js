function Matematicas(props) {
    const dobleNumero = props.doble
    const tripleNumero = props.triple

    return (
        <div>
            hijo no{props.hijo}
            <button onClick={ () => dobleNumero(props.numero)}>
                Hacer el doble de {props.numero}
            </button>

            <button onClick={ () => tripleNumero(props.numero)}>
                Hacer el triple de {props.numero}
            </button>
        </div>
    )
}

export default Matematicas