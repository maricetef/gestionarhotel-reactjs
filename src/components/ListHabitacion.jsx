import React, {useState,useEffect}from "react";

const ListHabitacion = ({habitacion}) =>{
    const [habit,setHabit]=useState([{
        idhab:0,
        habitacion_piso:1,
        habitacion_num:2,
        cant_camas:1,
        tv:0,
        frigobar:1
    }
    ]);
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
     <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>Piso de la Habitacion</th>
                <th>Numero de la Habitacion</th>
                <th>Cantidad de camas</th>
                <th>Tiene TV</th>
                <th>Tiene Frigobar</th>
                <th>Acciones</th>
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
                        <div className="mb-3 btn-group">
                            <button onClick={()=>handleEliminar(hab.idhab)} className="btn btn-danger me-1">Eliminar</button>
                        
                        
                            <button onClick={()=>handleEditar(hab.idhab)} className="btn btn-secondary">Editar</button>
                        </div>
                    </td>
            </tr>
            ))}
        
        </tbody>
     </table>
    );
   }
   
   export default ListHabitacion;