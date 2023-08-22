import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid' 
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiORG from './componentes/miORG';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';



function App() {

  // Obtener colaboradores desde el localStorage al inicio
const colaboradoresGuardados = localStorage.getItem('colaboradores');
const colaboradoresIniciales = colaboradoresGuardados ? JSON.parse(colaboradoresGuardados) : [];
// Obtener equipos desde el localStorage al inicio
const equiposGuardados = localStorage.getItem('equipos');
const equiposIniciales = equiposGuardados ? JSON.parse(equiposGuardados) : [];

  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaborador] = useState(colaboradoresIniciales);
  const [equipos,actualizarEquipos] =useState(equiposIniciales);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Lista de Equipos 



  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread Operator
    actualizarColaborador([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
   actualizarColaborador(nuevosColaboradores)
  }


  // Función para guardar colaboradores en el localStorage
const guardarColaboradoresEnLocalStorage = (colaboradores) => {
  localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
};

// Función para guardar equipos en el localStorage
const guardarEquiposEnLocalStorage = (equipos) => {
  localStorage.setItem('equipos', JSON.stringify(equipos));
};


// Efecto para guardar colaboradores en el localStorage cuando cambien
useEffect(() => {
  guardarColaboradoresEnLocalStorage(colaboradores);
}, [colaboradores]);

// Efecto para guardar equipos en el localStorage cuando cambien
useEffect(() => {
  guardarEquiposEnLocalStorage(equipos);
}, [equipos]);


//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario= color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//Crear equipo
const crearEquipo = (nuevoEquipo) => {
  actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
}

//Eliminar equipo 
const eliminarEquipo = (id) => {
  const nuevosEquipos = equipos.filter((equipo) => equipo.id !== id)
 actualizarEquipos(nuevosEquipos)
}

//Like al colaborador
const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id) {
      colaborador.fav = !colaborador.fav;
    }
    return colaborador
  })

  actualizarColaborador(colaboradoresActualizados)
}

  //Ternario --> condicion ? seMuestra : noSeMuestra

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <></>}
      <MiORG cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} eliminarEquipo={eliminarEquipo} like={like}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
