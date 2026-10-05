import { Component } from "react";

class DibujosComplejosArray extends Component {
    dibujarNumeros = () => {
        let lista = []

        for (let i = 0 ; i < 6 ; i++) {
            const num = parseInt(Math.random() * 120 + 1)
            lista.push(<li key={i}>{ num }</li>)
        }

        return lista
    }
    render () {
        return (
            <div>
                <h1>Dibujos complejos array</h1>

                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}

export default DibujosComplejosArray