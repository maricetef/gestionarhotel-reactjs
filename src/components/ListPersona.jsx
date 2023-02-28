import React, {useState,useEffect} from "react";

const ListPersona = ({persona,setPersona}) =>{
    const [listpersona,setListPersona]=useState([{
        id_persona:0,
        nombre_completo:"Juan Perez",
        cedula:12345,
        correo:"juan@hotmail.com",
        telefono:1235667787
        
    }
    ]);
    const [actualizar,setActualizar]=useState(false);

    useEffect(()=>{
        const personas = ()=>{
            fetch('http://localhost:5000/api/personas')
            .then(res => res.json())
            .then(res=>setListPersona(res))
        };

        personas();
        setActualizar(false);
    },[actualizar]);

    const handleEliminar=(id)=>{
        const requestInit={
            method: 'DELETE',
            
        };
        fetch('http://localhost:5000/api/personas/'+id,requestInit)
        .then(res => res.text())
        .then(res=>setActualizar(true))
    }

    const handleEditar=(id)=>{
     /*   const requestInit={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(habitacion)
            
        };
        fetch('http://localhost:5000/api/personas/'+id,requestInit)
        .then(res => res.text())
        .then(res=>console.log(res))*/
    }
    return (
     <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th className="">Nombre y Apellidos</th>
                <th>Cedula</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {listpersona.map(persona=>(
                <tr key = {persona.id_persona}>
                    <td>{persona.nombre_completo}</td>
                    <td>{persona.cedula}</td>
                    <td>{persona.correo}</td>
                    <td>{persona.telefono}</td>
                    
                    <td>
                        <div className="mb-3 btn-group">
                            <button onClick={()=>handleEliminar(persona.id_persona)} className="btn btn-danger me-1">Eliminar</button>
                        
                        
                            <button onClick={()=>handleEditar(persona.id_persona)} className="btn btn-secondary">Editar</button>
                        </div>
                    </td>
            </tr>
            ))}
        
        </tbody>
     </table>
    );
   }
   
   export default ListPersona;