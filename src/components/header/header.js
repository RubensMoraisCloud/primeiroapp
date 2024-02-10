import React, { useContext, useState } from "react";
import './header.css'
import { userContext } from "../../contexts/userContext";

function Header() {
    const {login, setLogin} = useContext(userContext);


    return (
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Fotos</li>
                    <li>Contato</li>
                    <li onClick={() => setLogin(!login)} >{login ? 'Deslogar' : 'login'}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header