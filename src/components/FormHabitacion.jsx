import React, {useState,useEffect}from "react";
const ESTADO_INICIAL={
    habitacion_piso:1,
    habitacion_num:2,
    cant_camas:1,
    tv:0,
    frigobar:1
};
const FormHabitacion = ({habitacion,setHabitacion}) =>{
    

    const handleChange = (evt)=>{
        setHabitacion({
            ...habitacion,
            [evt.target.name ]: evt.target.value
        });
      
    }

    const handleSubmit=(evt) =>{
        //evt.preventDefault();
        if(habitacion.habitacion_piso==="" || habitacion.habitacion_num==="" || habitacion.cant_camas===""){
            alert('Todos los campos son obligatorios');
            return;
        }
        const newHab= {
            habitacion_piso:parseInt(habitacion.habitacion_piso),
        habitacion_num:parseInt(habitacion.habitacion_num),
        cant_camas:parseInt(habitacion.cant_camas),
        tv:parseInt(habitacion.tv),
        frigobar:parseInt(habitacion.frigobar)
        }
        const requestInit={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newHab)
        };
        fetch('http://localhost:5000/api/habitaciones',requestInit)
        .then(res => res.json())
        .then(res=>console.log(res))

        setHabitacion(ESTADO_INICIAL);
    }


    return(
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
             
              <input onChange={handleChange} type="number" name="habitacion_num"  className="form-control" placeholder="Numero"/>
            </div>
            <div className="mb-3">
             
              <input onChange={handleChange} type="number" name="habitacion_piso"  className="form-control" placeholder="Piso"/>
            </div>
            <div className="mb-3">
             
              <input onChange={handleChange} type="number" name="habitacion_num"  className="form-control" placeholder="Cantidad de cama"/>
            </div>
            <div className=" form-check">
            <div> Tiene TV</div>   
            
            <input  onChange={handleChange} type="radio" name="tv"  className="form-check-input" value="1" />
            <label className="form-check-label">
                Si
            </label>
            </div>
            <div className=" form-check">
              <input onChange={handleChange} type="radio" name="tv"  className="form-check-input" value="0" checked/>
              <label className="form-check-label">
                No
              </label>
            </div>
            <div className=" form-check">
                <div>
                Tiene Frigobar
                </div>
             
             
            <input  onChange={handleChange} type="radio" name="frigobar"  className="form-check-input" value="1" />
            <label className="form-check-label">
                Si
            </label>
            </div>
            <div className=" form-check">
              <input onChange={handleChange}  type="radio" name="frigobar"  className="form-check-input" value="0" checked/>
              <label className="form-check-label">
                No
              </label>
            </div>
            <button className="btn btn-primary">Adicionar</button>
        </form>
       
    );
}
   
export default FormHabitacion;