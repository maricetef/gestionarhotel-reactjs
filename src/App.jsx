import React, {useState}from "react";
import Navbar from "./components/Navbar"
import ListHabitacion from "./components/ListHabitacion"
import FormHabitacion from "./components/FormHabitacion"
import ListPersona from "./components/ListPersona";
import FormPersona from "./components/FormPersona";
import ListReserva from "./components/ListReserva";
import FormReserva from "./components/FormReserva";


const ESTADO_INICIAL_HAB={
  habitacion_piso:1,
  habitacion_num:2,
  cant_camas:1,
  tv:0,
  frigobar:1
};

const ESTADO_INICIAL_PERS={
  
  nombre_completo:"Juan Perez",
  cedula:12345,
  correo:"juan@hotmail.com",
  telefono:1235667787
  
};
const ESTADO_INICIAL_RES={
  
  fechareserva: "2023/01/26",
  fechaentrada:"2023/02/21",
  fechasalida:"2023/02/30",
  montoreserva: 260000,
  idhabitacion: 0,
  idpersona: 0
  
};
function App() {
  const [habitacion,setHabitacion]=useState(ESTADO_INICIAL_HAB);
  const [persona,setPersona]=useState(ESTADO_INICIAL_PERS);
  const [reserva,setReserva]=useState(ESTADO_INICIAL_RES);

  return (
    <div className="App">
      <Navbar brand ='Gestion de Hotel'/>
      <div className="container">
      <div className="row mt-4 ">
          <div className="col-6 mx-4">
            <h2 style={{textAlign: 'center'}}>Listado de Personas</h2>
            <ListPersona />
          </div>
          <div className="col-4">
          <h2 style={{textAlign: 'center'}}>Adicionar una Persona</h2>
            <FormPersona persona={persona} setPersona={setPersona}/>
          </div>

        </div>



        <div className="row mt-5">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Listado de Habitaciones</h2>
            <ListHabitacion habitacion={habitacion}/>
          </div>
          <div className="col-5">
          <h2 style={{textAlign: 'center'}}>Adicionar una Habitacion</h2>
            <FormHabitacion habitacion={habitacion} setHabitacion={setHabitacion}/>
          </div>

        </div>
        
        <div className="row mt-5">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Listado de Reservaciones</h2>
            <ListReserva reserva={reserva}/>
          </div>
          <div className="col-5">
          <h2 style={{textAlign: 'center'}}>Adicionar una Habitacion</h2>
            <FormReserva reserva={reserva} setHabitacion={setReserva}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
