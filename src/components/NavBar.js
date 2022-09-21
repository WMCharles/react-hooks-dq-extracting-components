import React from "react";
import {contacts} from '../data'

function NavBar(){
    const people = contacts
    const contact = people.map(
        (contact) => <li className="contact" key={contact.id}>
            <div className="icon">{contact.name[0]}</div>
            {contact.name}
        </li>
    );
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contact}
            </ul>
        </nav>
    )
}

export default NavBar;