import Matematicas from "./Matematicas";

function PadreMatematicas() {
    const dobleNumero = (numero) => {
        console.log(numero + ' * 2 = ' + (numero*2));
    }

    const tripleNumero = (numero) => {
        console.log(numero + ' * 3 = ' + (numero*3));
    }

    return(
        <div>
            <Matematicas hijo = '1' numero = '5' doble = { dobleNumero } triple = { tripleNumero } />
            <Matematicas hijo = '2' numero = '20' doble = { dobleNumero } triple = { tripleNumero } />
            <Matematicas hijo = '3' numero = '100' doble = { dobleNumero } triple = { tripleNumero } />
            <Matematicas hijo = '4' numero = '50' doble = { dobleNumero } triple = { tripleNumero } />
        </div>
    )
}

export default PadreMatematicas