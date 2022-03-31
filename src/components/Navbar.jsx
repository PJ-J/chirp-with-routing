import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-around', 
    fontSize: '20px',
    boxShadow: '0 4px 8px'}}>
      
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', boxShadow: isActive ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)': 'none', background : isActive ? 'lightgrey' : 'none', padding: isActive ? '5px' : '5px', margin: isActive ? '5px' : '5px',  borderRadius: isActive ? '5px' : 'none', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >Home</NavLink>
      
      <NavLink to="/films" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', boxShadow: isActive ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)': 'none', background : isActive ? 'lightgrey' : 'none', padding: isActive ? '5px' : '5px', margin: isActive ? '5px' : '5px',  borderRadius: isActive ? '5px' : 'none', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >Films</NavLink>

      <NavLink to="/people" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', boxShadow: isActive ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)': 'none', background : isActive ? 'lightgrey' : 'none', padding: isActive ? '5px' : '5px', margin: isActive ? '5px' : '5px',  borderRadius: isActive ? '5px' : 'none', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >People</NavLink>


    </nav>
  );
}

export default Navbar;