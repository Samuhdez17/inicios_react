import './SumarNumeros.css'

function SumarNumeros(props) {
    var a = parseInt(props.numero1)
    var b = parseInt(props.numero2)

    const sumar = () => {
        console.log(a + '+' + b + '=' + (a+b))
    }

    return (
        <div>
            <h1>SUMA DE NUMEROS { a } y { b }</h1>
            { sumar() }
        </div>
    )
}

export default SumarNumeros