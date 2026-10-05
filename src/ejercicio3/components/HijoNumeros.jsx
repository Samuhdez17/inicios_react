import { Component } from 'react'

export default class HijoNumeros extends Component {    
    sumarNumero = () => {
        this.props.metodoPadre(this.props.numero)
    }

    render() {
        return (
            <div>
                <h2>Numero: {this.props.numero}</h2>
                <button onClick={this.sumarNumero}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}