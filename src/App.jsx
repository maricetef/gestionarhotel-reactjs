import React, {useState}from "react";
import Navbar from "./components/Navbar"
import ListHabitacion from "./components/ListHabitacion"
import FormHabitacion from "./components/FormHabitacion"


const ESTADO_INICIAL={
  habitacion_piso:1,
  habitacion_num:2,
  cant_camas:1,
  tv:0,
  frigobar:1
};
function App() {
  const [habitacion,setHabitacion]=useState(ESTADO_INICIAL);

  return (
    <div className="App">
      <Navbar brand ='Gestion de Hotel'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Listado de Habitaciones</h2>
            <ListHabitacion habitacion={habitacion}/>
          </div>
          <div className="col-5">
          <h2 style={{textAlign: 'center'}}>Adicionar una Habitacion</h2>
            <FormHabitacion habitacion={habitacion} setHabitacion={setHabitacion}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
