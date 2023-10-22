import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function extras(){
    return (
        <div className = 'navbar'>
            <div>
                <ul classname='navbar-menu'>
                    {/* <li><Link to ="/">Home</Link></li> */}
                    <li><Link to ="/About">About Me</Link></li>
                </ul>
            </div>
        </div>
    )
}