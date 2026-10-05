import { Component } from 'react';

export default class Comimc extends Component {
    render () {
        return (
            <div>
                <img src={this.props.comic.imagen} style={{ width: '60px', height: '100px'}} />
                <h1>{this.props.comic.titulo}</h1>
                <p> {this.props.comic.descripcion} </p>
                <button onClick={
                    () => {
                        this.props.seleccionarComic(this.props.comic)
                    }
                }>Seleccionar como favorito</button>

                <button onClick={
                    () => {
                        let index = parseInt(this.props.idex)
                        this.props.eliminarComic(index)
                    }
                }>Eliminar</button>
            </div>
        )
    }
}