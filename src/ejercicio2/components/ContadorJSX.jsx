import { Component } from "react";

class ContadorJSX extends Component {
    state = {
        contador: '0'
    }

    incrementar = () => {
        this.setState(this.state.contador, parseInt(this.state.contador) + 1)
    }

    decrementar = () => {
        this.setState(this.state.contador, parseInt(this.state.contador) - 1)
    }

    render() {
        return (
            <div>
                <h1>Contador JSX: { this.state.contador }</h1>
                <button onClick={this.incrementar}>incrementar</button>
                <button onClick={this.incrementar}>decrementar</button>
            </div>
        )
    }
}

export default ContadorJSX