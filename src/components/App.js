import React from "react";
import { messages, contacts } from "../data";
import NavBar from './NavBar';
import Main from './Main'

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
