import React from "react";
import "App.css";
import { NavLink} from "react-router-dom"

const GradientButton = ({
  children,
  className ,
  color = "white",
  start = "#4E09E2",
  end = "#8352EC",
  borderRadius = "1rem",
  width = "",
  height = "",
  icon,
  getTo,
}) => {
  return (
    <button
      style={{
        color: color,
        backgroundImage: `linear-gradient( ${start} 0%, ${end} 100%)`,
        borderRadius: borderRadius,
        width: width,
        height: height,
      }}
      className={`cstm-button-grd ${className ? className : ""}`}
    >
      <div className="flex gap-2 items-center ">
      {icon ? (
        <img 
          src={icon}          
          style={{ width: "24px", height:"24px"}}
        />
      ):(
<></>
      )}
        <NavLink to={getTo} >
              {children}
        </NavLink>
      
       
        
      </div>
    </button>
  );
};

export default GradientButton;
