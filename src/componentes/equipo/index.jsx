import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';
import { RiDeleteBack2Fill } from "react-icons/ri"

const Equipo = (props) => {

    const { colaboradores, eliminarColaborador, actualizarColor, eliminarEquipo, like } = props

    const colorPrimario = props.datos.colorPrimario;

    const colorFondo = {
        backgroundColor: hexToRgba(colorPrimario,0.6)
    }

    const colorSubrayadoTitulo = {
        borderColor: props.datos.colorPrimario
    }

    
    const id = props.datos.id;

    const valorTitulo = props.datos.titulo;

    return <>
    { colaboradores.length > 0 &&
    <section className="equipo" style={colorFondo}>
        <RiDeleteBack2Fill onClick={() => eliminarEquipo(id)} className="iconoEliminarEquipo"/>
        <input type='color' className="input__color" value={colorPrimario} onChange={(evento) => {actualizarColor(evento.target.value,id)}}/>
        <h3 style={colorSubrayadoTitulo}>{valorTitulo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador,index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} like={like}/>)}
        </div>
    </section> 
    }</>
}

export default Equipo