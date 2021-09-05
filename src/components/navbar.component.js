import {Link} from "react-router-dom"
import React, {Component} from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to = "/" className = "navbar-brand">Exercise Tracker</Link>
            <div className = "collpase navbar-collapse">
                <ul className = "navbar-nav mr-auto">
                    <li className = "navbar-item">
                        <Link to = "/" className = "nav-link">Exercises</Link>
                    </li>
                    <li>
                        <Link to = "/create" className = "nav-link">Create Exercise Log</Link>
                    </li>
                    <li>
                        <Link to = "/user" className = "nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}