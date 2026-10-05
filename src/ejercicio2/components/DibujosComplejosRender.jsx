import { Component } from 'react'

class DibujosComplejosRender extends Component {
    state = {
        nombres: ['Lucas', 'Juan', 'Pedro'],
    }

    generarNombre = () => {
        this.state.nombres.push('nuevo')

        this.setState({
            nombres: this.state.nombres
        })

    }

    render () {
        return(
            <div>
                <h1>Dibujos complejos render</h1>
                <button onClick={this.generarNombre}>Generar Nombre</button>

                {
                    this.state.nombres.map((nombre, index) => {
                        return (
                            <h4 key={index}>{nombre}</h4>
                        )
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender