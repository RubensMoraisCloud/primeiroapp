import React from "react";
import './style.css'

function Button({ name, active,onClick }) {
    return (
        <div className="container-button">
            <button onClick={()=> onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados então a salvo conosco!</span>
        </div>
    )
}

export default Button