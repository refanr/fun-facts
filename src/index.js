import React from "react";
import { ReactDOM } from "react";
import "./style.css";

function App() {
    return (
        <div>
            <header>
                <h2>ReactFacts</h2>
                <h3>React Course - Project 1</h3>
            </header>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
            </ul>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)