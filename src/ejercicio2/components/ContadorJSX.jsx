import { Component } from "react";

class ContadorJSX extends Component {
    state = {
        contador: this.props.valInicial
    }

    incrementar = () => {
        /* EJEMPLO DE ARRAY
        const array = [];
        array.push(<h1>Hola</h1>);
        */

        this.setState({
            contador: this.state.contador + 1
        })
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Contador JSX: { this.state.contador }</h1>
                <button onClick={this.incrementar}>incrementar</button>
                <button onClick={this.decrementar}>decrementar</button>
            </div>
        )
    }
}

export default ContadorJSX