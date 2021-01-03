import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
export default class App extends Component{
    render() {
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
        </div>;
    }

}