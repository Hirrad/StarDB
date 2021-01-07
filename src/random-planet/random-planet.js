import React, {Component} from 'react';
import './random-planet.css';
import SwapiServise from '../services/swapi';
import Img404 from './src/404.jpg';

export default class RandomPlanet extends Component {
    swapiServise = new SwapiServise();
    state = {
        planet:{}
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoading = (planet) => {
        this.setState({planet})
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 58 + 2);
        this.swapiServise.getPlanet(id).then(this.onPlanetLoading)
    }

    render() {
        const {planet:{rotationPeriod, diameter, population, name, id}} = this.state;
        let srcImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        return <div className='d-flex justify-content-center'>
            <div className="row d-flex justify-content-center align-items-center bg-dark  w-75">
                <div className="col-4 planet-container">
                    <img
                        src={srcImg}
                        className='img-fluid planet-container-img'/>


                </div>
                <div className="col-5">
                    <h2 className='planet-container__header'>{name}</h2>
                    <ul className="list-group ">
                        <li className="list-group-item">{`Population: ${population}`}</li>
                        <li className="list-group-item">{`Diameter: ${diameter} km`}</li>
                        <li className="list-group-item">{`Rotation Period: ${rotationPeriod} days`}</li>
                    </ul>
                </div>

            </div>
        </div>
    }

}