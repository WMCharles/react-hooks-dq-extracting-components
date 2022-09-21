import React from "react";

function NavBar(){
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
            <li className="contact">
                <div className="icon">A</div>
                Angela
            </li>
            <li className="contact active">
                <div className="icon">P</div>
                Pamela
            </li>
            <li className="contact">
                <div className="icon">S</div>
                Sandra
            </li>
            <li className="contact">
                <div className="icon">R</div>
                Rita
            </li>
            </ul>
        </nav>
    )
}

export default NavBar;