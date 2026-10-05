import { Component } from 'react';

export default class HijoDeporte extends Component {
    seleccionarFavorito = () => {
        this.props.metodoPadre(this.props.nombreDeporte)
    }

    render() {
        return (
            <div>
                <h3> Deporte: { this.props.nombreDeporte } </h3>
                <button onClick={this.seleccionarFavorito}>Seleccionar como favorito</button>
            </div>
        )
    }
}