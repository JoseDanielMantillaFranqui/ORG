import "./miORG.css"

const MiORG = (props) => {

    //Estado - hooks
    //useState
    // const [nombreDeLaVariable,funcionActualiza] = useState(Valorinicial)
    //const [nombre,actualizarNombre] = useState("Harland")

    //ejemplo:

//const [mostrar,actualizarMostrar] = useState(true)

 //   const manejarClick = () => {
 //       actualizarMostrar(!mostrar)
 //   }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.svg" alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiORG