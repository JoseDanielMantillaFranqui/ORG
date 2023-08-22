import "./colaborador.css"
import { RiDeleteBack2Fill } from "react-icons/ri"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {

    const { nombre, puesto, foto, id, fav} = props.datos

    const { colorPrimario, eliminarColaborador, like } = props
    
    return <div className="colaborador">
        <RiDeleteBack2Fill onClick={() => eliminarColaborador(id)} className="iconoEliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> :
            <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador