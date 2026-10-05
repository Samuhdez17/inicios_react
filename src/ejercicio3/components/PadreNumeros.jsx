import { Component } from 'react'
import HijoNumeros from './HijoNumeros'

export default class PadreNumeros extends Component {
    state = {
        numeros: [],
        sumaTotal: 0
    }

    metodoPadre = (numero) => {
        this.setState({ sumaTotal: this.state.sumaTotal + numero })
    }

    cargarNumeros = () => {
        for (let i = 0 ; i < 4 ; i++) {
            this.state.numeros.push(parseInt(Math.random() * 500 + 1))
        }

        this.setState({ numeros: this.state.numeros })
    }

    agregarNumero = () => {
        this.state.numeros.push(parseInt(Math.random() * 500 + 1))
        this.setState({ numeros: this.state.numeros })
    }

    render() {
        return (
            <div>
                <h1>Padre numeros</h1>
                <h2>Suma total: {this.state.sumaTotal}</h2>
                <button onClick={this.agregarNumero}>Agregar numero</button>

                {
                    this.state.numeros.map((numero, index) => {
                        return (
                            <div key={index}>
                                <HijoNumeros numero={numero} metodoPadre={this.metodoPadre} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}