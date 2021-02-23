import React, {Component} from 'react';
import './header.css'
import {Link} from "react-router-dom";

export default class Header extends Component{
    render() {
        return <nav className="navbar navBar navbar-expand-lg navbar-dark ">
            <Link to='/' className='navbar-brand' >StarDB</Link>

                <div className="d-flex navLink navbar-nav justify-content-between">
                    <Link to='/starships' className='nav-link'>Starships</Link>
                    <Link to='/planets' className='nav-link'>Planet</Link>
                    <Link to='/people' className='nav-link'>People</Link>
                    {/*<a className="nav-link" href="/#">Planet</a>*/}
                    {/*    <a className="nav-link" href="/#">People</a>*/}
                    {/*    <a className="nav-link " href="/#">Starships</a>*/}

                </div>

        </nav>
    }

}