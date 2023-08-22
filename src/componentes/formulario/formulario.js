import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../lista-opciones"
import Boton from "../boton"
import { v4 as uuid } from 'uuid' 

const Formulario = (props) => {

    const [nombre,setNombre] = useState("");
    const [puesto,setPuesto] = useState("");
    const [foto,setFoto] = useState("");
    const [equipo,setEquipo] = useState("");

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const { crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
            id: uuid(), 
            fav: false
        }

       props.registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo: titulo,colorPrimario: color})
    }

    return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    valor={nombre} 
                    actualizarValor={setNombre} 
                    required
                />
                <Campo
                    titulo="Puesto" 
                    placeholder="Ingresar puesto"
                    valor={puesto} 
                    actualizarValor={setPuesto}  
                    required
                />
                <Campo
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    valor={foto} 
                    actualizarValor={setFoto} 
                    required
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarValor={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo
                    titulo="Titulo" 
                    placeholder="Ingresar titulo" 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo} 
                    required
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar color en Hex"
                    valor={color} 
                    actualizarValor={actualizarColor}  
                    required
                    type="color"
                />
                <Boton>Registrar equipo</Boton>
            </form>
           </section>
}

export default Formulario