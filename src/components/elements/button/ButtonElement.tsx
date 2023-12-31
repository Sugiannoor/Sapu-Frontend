import React from 'react'
import "./button.css"
const ButtonElement = ({handleClick, isLoading, ...rest}) => {
  return (
    <span>
        <button
        {...rest}
            type= {rest.type}
            className ={`button ${rest.className}`}
            onClick = {handleClick}
            disabled= {isLoading}
            >
        {isLoading && (
             <span className="spinner-border spinner-border-sm me-2"></span>
        )}
        {rest.children}
        </button>
        
    </span>
  )
}
export default ButtonElement;
