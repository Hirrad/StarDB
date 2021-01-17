import React, {Component} from 'react';
import './random-planet.css';
import SwapiServise from '../services/swapi_1';
import Loading from "../loading";
import Img404 from './src/404.jpg';
import ErrorMessage from "../error-message";


export default class RandomPlanet extends Component {
    swapiServise = new SwapiServise();
    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
      this.interval=  setInterval(()=>this.updatePlanet() ,5000)
    }
componentWillUnmount() {
        clearInterval(this.interval)
}


    onPlanetLoading = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    showError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 88 + 2);

        this.swapiServise.getPlanet(id).then(this.onPlanetLoading).catch(
            this.showError);
    }

    render() {
        const {planet, loading, error} = this.state;
        const showPlanet = !(loading || error);
        const displaySpiner = (loading) ? <Loading/> : null;
        const displayError = (error) ? <ErrorMessage/> : null;
        const displayPlanet = showPlanet ? <ItemRandomPlanet planet={planet}/> : null;
        return <div className='d-flex justify-content-center'>
            <div className="row d-flex justify-content-center align-items-center bg-dark  w-75">
                {displayError}
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
            <div className="col-6">

                <h2 className='planet-container__header'>{name}</h2>
                <ul className="list-group mb-2">
                    <li className="list-group-item">{`Население: ${population}`}</li>
                    <li className="list-group-item">{`Диаметр: ${diameter} км`}</li>
                    <li className="list-group-item">{`Период вращения: ${rotationPeriod} дней`}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}