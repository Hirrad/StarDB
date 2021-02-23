import React, {Component} from 'react';
import './random-planet.css';
import Loading from "../loading";
import Img404 from './src/404.jpg';
import {withDataBase} from "../hoc-component";
import SwapiServiseContext from "../context";

class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true
    }

    componentDidMount() {
        this.updatePlanet();
      this.interval=setInterval(()=>this.updatePlanet(), 30000);
    }
componentWillUnmount() {
        clearInterval(this.interval)
}
    onPlanetLoading = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }
    updatePlanet() {
        const id = Math.floor(Math.random() * 58 + 2);
        this.props.data(id).then(this.onPlanetLoading)
    }

    render() {
        const {planet, loading} = this.state;
        const displayPlanet = loading ? <Loading/> : null;
        const displaySpiner = !loading ? <ItemRandomPlanet planet={planet}/> : null;
        return <div className='d-flex justify-content-center'>
            <div className="row d-flex justify-content-center align-items-center bg-dark  w-75">
                {displayPlanet}
                {displaySpiner}
            </div>
        </div>
    }
}
const ItemRandomPlanet = ({planet}) => {

    const {rotationPeriod, diameter, population, name, id} = planet
    let srcImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return (
        <React.Fragment>
            <div className="col-4 planet-container">
                <img
                    src={srcImg}
                    className='img-fluid planet-container-img'
                    alt={name}
                    onError={(e) => e.target.src = `${Img404}`}/>


            </div>
            <div className="col-5">

                <h2 className='planet-container__header'>{name}</h2>
                <ul className="list-group mb-2">
                    <li className="list-group-item">{`Population: ${population}`}</li>
                    <li className="list-group-item">{`Diameter: ${diameter} km`}</li>
                    <li className="list-group-item">{`Rotation Period: ${rotationPeriod} days`}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default withDataBase(RandomPlanet,'getPlanet',SwapiServiseContext)