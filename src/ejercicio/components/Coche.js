import { useState } from "react"

function Coche(props) {
    const [estado, setEstado] = useState(false)
    const [velocidad, setVelocidad] = useState(0)
    const [msgBoton, setMsg] = useState('Arrancar')

    const coche = {
        marca: props.marca,
        modelo: props.modelo,
        velMax: props.velMax,
        aceleracion: parseInt(props.aceleracion)
    }

    const comprobarestado = () => {
        if (estado) {
            return (<h1 style={{color: 'green'}}> Arrancado </h1>)


        } else {
            return (<h1 style={{color: 'red'}}> Apagado </h1>)
        }

    }

    const alternarEstado = () => {
        if (estado) {
            setEstado(false)
            setMsg('Arrancar')
            
        } else {
            setEstado(true)
            setMsg('Apagar')
        }
        
    }

    const acelerar = () => {
        if(!estado) {
            alert('El coche no esta arrancado')

        } else {
            setVelocidad(velocidad + coche.aceleracion)

            if (velocidad >= coche.velMax) 
                setVelocidad(coche.velMax)
        }
    }

    const frenar = () => {
        setVelocidad(velocidad - coche.aceleracion)

        if (velocidad <= 0) 
            setVelocidad(0)
    }

    return (
        <div>
            <h1> { coche.marca }  { coche.modelo } </h1>
            {comprobarestado()}

            <h2>Velocidad: { velocidad }</h2>
            <button onClick={() => alternarEstado()}>
                {msgBoton} coche
            </button>

            <button onClick={ () => acelerar() }>
                Acelerar
            </button>

            <button onClick={ () => frenar() }>
                Frenar
            </button>
        </div>
    )
}

export default Coche