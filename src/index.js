import component from "./component"
import "./main.css"
import "react"
import "react-dom"
import { bake } from "./shake"

console.log("Hello world from Webpack demo!")
bake()
document.body.appendChild(component())