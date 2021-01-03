import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemsList from "../items-list";
import PlanetItem from "../planet-item";

export default class App extends Component {
    render() {
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
            <div className='body-container d-flex justify-content-between mt-5'>
                <ItemsList/>
                <PlanetItem/>
            </div>
        </div>;
    }

}