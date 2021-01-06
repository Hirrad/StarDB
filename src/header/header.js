import React, {Component} from 'react';
import './header.css'

export default class Header extends Component{
    render() {
        return <nav className="navbar navBar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="/#">Navbar</a>
                <div className="d-flex navLink navbar-nav justify-content-between">
                        <a className="nav-link" href="/#">Planet</a>
                        <a className="nav-link" href="/#">People</a>
                        <a className="nav-link " href="/#">Starships</a>

                </div>

        </nav>
    }

}