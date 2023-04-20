import React from "react";
import './Sidebaropt.css'
const Sidebaropt = ({active, text, Icon}) => {
    return(
        <div className={`Sidebaropt ${active && 'Sidebaropt_active'}`}>
            <Icon/><h4>{text}</h4>
            
        </div>
    )
}

export default Sidebaropt