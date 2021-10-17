import React from "react";

const Navbar = () =>{

    return(
    <header className="header">
        <nav className="navbar">
           
        <a><h1 className="item-nav">titulo</h1></a>
        <a><h1 className="item-nav">productos</h1></a>
        <a><h1 className="item-nav">complementos</h1></a>
        <a><h1 className="item-nav">inicio sesion</h1></a>
        </nav>
    </header> 
    )
}

export default Navbar;