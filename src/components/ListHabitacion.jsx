import React, {useState,useEffect}from "react";

const ListHabitacion = ({habitacion}) =>{
    const [habit,setHabit]=useState([]);
    const [actualizar,setActualizar]=useState(false);

    useEffect(()=>{
        const habitaciones = ()=>{
            fetch('http://localhost:5000/api/habitaciones')
            .then(res => res.json())
            .then(res=>setHabit(res))
        };

        habitaciones();
        setActualizar(false);
    },[actualizar]);

    const handleEliminar=(id)=>{
        const requestInit={
            method: 'DELETE',
            
        };
        fetch('http://localhost:5000/api/habitaciones/'+id,requestInit)
        .then(res => res.text())
        .then(res=>setActualizar(true))
    }

    const handleEditar=(id)=>{
     /*   const requestInit={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(habitacion)
            
        };
        fetch('http://localhost:5000/api/habitaciones/'+id,requestInit)
        .then(res => res.text())
        .then(res=>console.log(res))*/
    }
    return (
     <table className="table">
        <thead>
            <tr>
                <td>Piso de la Habitacion</td>
                <td>Numero de la Habitacion</td>
                <td>Cantidad de camas</td>
                <td>Tiene TV</td>
                <td>Tiene Frigobar</td>
            </tr>
        </thead>
        <tbody>
            {habit.map(hab=>(
                <tr key = {hab.idhab}>
                    <td>{hab.habitacion_piso}</td>
                    <td>{hab.habitacion_num}</td>
                    <td>{hab.cant_camas}</td>
                    <td>{(hab.tv)? "Si" : "No"}</td>
                    <td>{(hab.frigobar)? "Si" : "No"}</td>
                    <td>
                        <div className="mb-3">
                            <button onClick={()=>handleEliminar(hab.idhab)} className="btn btn-danger">Eliminar</button>
                        
                        
                            <button onClick={()=>handleEditar(hab.idhab)} className="btn btn-dark">Editar</button>
                        </div>
                    </td>
            </tr>
            ))}
        
        </tbody>
     </table>
    );
   }
   
   export default ListHabitacion;