import SaludoHijo from "./SaludoHijo"

function SaludoPadre() {
    const metodoPadre = (mensaje) => {
        console.log(mensaje)
    }

    return(
        <div>
            <h1>SLAUDO PADRE</h1>
            <SaludoHijo comHP = { metodoPadre } nombre = 'alan' />
            <SaludoHijo comHP = { metodoPadre } nombre = 'lexus' />
        </div>
    )
}

export default SaludoPadre