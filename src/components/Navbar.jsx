import React from "react";

const Navbar = () =>{

    return(
    <header className="header">
        <nav className="navbar"> 
        <img src="../../../logo192.png" alt="logo" className="logo"/>
        <h1 className="item-nav">titulo</h1>
        <h1 className="item-nav">productos</h1>
        <h1 className="item-nav">complementos</h1>
        <h1 className="item-nav">inicio sesion</h1>
        </nav>
    </header>
    )
}

export default Navbar;