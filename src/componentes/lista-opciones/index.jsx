import "./lista-opciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map ( (equipo,index) => {
    //  return <option></option>
    //})

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo,index) => {
                return <option className="opciones" key={index} value={equipo}>{equipo}</option>
            }) }
        </select>
    </div>
}

export default ListaOpciones