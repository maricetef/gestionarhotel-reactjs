import React from "react";
const ESTADO_INICIAL={
    nombre_completo:"Juan Perez",
    cedula:12345,
    correo:"juan@hotmail.com",
    telefono:1235667787
    
};
const FormReserva = ({reserva,setReserva}) =>{
    

    const handleChange = (evt)=>{
        setReserva({
            ...reserva,
            [evt.target.name ]: evt.target.value
        });
      
    }

    const handleSubmit=(evt) =>{
        evt.preventDefault();
        if(reserva.nombrecompleto==="" || reserva.cedula==="" || reserva.correo==="" || reserva.telefono){
            alert('Todos los campos son obligatorios');
            return;
        }
        
        const requestInit={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reserva)
        };
        fetch('http://localhost:5000/api/reservas',requestInit)
        .then(res => res.json())
        .then(res=>console.log(res))

        setReserva(ESTADO_INICIAL);
    }


    return(
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
             
              <input onChange={handleChange} type="text" name="nombre_completo"  className="form-control" placeholder="Nombre y apellido"/>
            </div>
            <div className="mb-3">
             
              <input onChange={handleChange} type="number" name="cedula"  className="form-control" placeholder="Entre su numero de cedula"/>
            </div>
            <div className="mb-3">
             
              <input onChange={handleChange} type="text" name="correo"  className="form-control" placeholder="Entre un correo: ejemplo@correo.com"/>
            </div>
            <div className="mb-3">
             
              <input onChange={handleChange} type="number" name="telefono"  className="form-control" placeholder="Entre su numero de telefono"/>
            </div>
           <div>
            <button className="btn btn-primary">Adicionar</button>
            </div>
        </form>
       
    );
}
   
export default FormReserva;