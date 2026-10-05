import { Component } from 'react';
import HijoDeporte from './HijoDeporte';

export default class PadreDeporte extends Component { 
    deportes = ['petanca', 'padel', 'futbol', 'biciclismo']

    state = {
        favorito: ''
    }

    metodoPadre = (nombreDeporte) => {
        this.setState({
            favorito: nombreDeporte
        })
    }

    render() {
        return (
            <div>
                <h1> Padre deporte </h1>
                <h3>Deporte favorito del padre: {this.state.favorito}</h3>

                {
                    this.deportes.map((deporte, index) => {
                        return (
                            <HijoDeporte key={index} nombreDeporte={deporte} metodoPadre={this.metodoPadre} />
                        )
                    })
                }
            </div>
        )
    }
}