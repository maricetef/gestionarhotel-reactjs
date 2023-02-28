import React, {useState,useEffect} from "react";

const ListReserva = ({reserva,setReserva}) =>{
    const [listreserva,setListReserva]=useState([{
        idreserva:0,
        fechareserva: "2023/01/26",
        fechaentrada:"2023/02/21",
        fechasalida:"2023/02/30",
        montoreserva: 260000,
        idhabitacion: 1,
        idpersona: 1
        
    }
    ]);
    const [actualizar,setActualizar]=useState(false);

    useEffect(()=>{
        const reservas = ()=>{
            fetch('http://localhost:5000/api/reservas')
            .then(res => res.json())
            .then(res=>setListReserva(res))
        };

        reservas();
        setActualizar(false);
    },[actualizar]);

    const handleEliminar=(id)=>{
        const requestInit={
            method: 'DELETE',
            
        };
        fetch('http://localhost:5000/api/reservas/'+id,requestInit)
        .then(res => res.text())
        .then(res=>setActualizar(true))
    }

    const handleEditar=(id)=>{
     /*   const requestInit={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(habitacion)
            
        };
        fetch('http://localhost:5000/api/reservas/'+id,requestInit)
        .then(res => res.text())
        .then(res=>console.log(res))*/
    }
    return (
     <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th className="">Dia realiza</th>
                <th>Fecha de Entra</th>
                <th>Fecha de Salida</th>
                <th>Costo </th>
                <th>Persona </th>
                <th>Habitacion </th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {listreserva.map(reserva=>(
                <tr key = {reserva.idreserva}>
                    <td>{reserva.fechareserva}</td>
                    <td>{reserva.fechaentrada}</td>
                    <td>{reserva.fechasalida}</td>
                    <td>{reserva.montoreserva}</td>
                    <td>{reserva.idhabitacion}</td>
                    <td>{reserva.idpersona}</td>
                    
                    <td>
                        <div className="mb-3 btn-group">
                            <button onClick={()=>handleEliminar(reserva.idreserva)} className="btn btn-danger me-1">Eliminar</button>
                        
                        
                            <button onClick={()=>handleEditar(reserva.idreserva)} className="btn btn-secondary">Editar</button>
                        </div>
                    </td>
            </tr>
            ))}
        
        </tbody>
     </table>
    );
   }
   
   export default ListReserva;