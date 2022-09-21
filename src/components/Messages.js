import React from "react";
import {messages} from '../data'

function Messages(){
    const msgs = messages
    const msg = msgs.map(
        (message) => <li key={message.id} className="message received">
            {/* <div className="icon">P/E</div> */}
            <span className="content">{message.content}</span>
            </li>
        );
    return (
        <section className="messages">
          <ul>
            {msg}
          </ul>
        </section>
    )
}

export default Messages;