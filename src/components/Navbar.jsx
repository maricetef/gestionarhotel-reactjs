import React from "react";

const Navbar = ({brand}) =>{
 return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a href="#!" className="navbar-brand">{brand}</a>
            <div className="justify-content-end">
            <a href="#!" className="btn btn-outline-success me-2">Habitacion</a>
            <a href="#!" className="btn btn-outline-success">Reserva</a>
            </div>
        </div>
        
    </nav>
 );
}

export default Navbar;