/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="logo">
                <img src="./images/react-icon-small.png" width="25px" />
                <h3>ReactFacts</h3>
            </span>
            <p>React Course - Project 1</p>
        </nav>
    )
}