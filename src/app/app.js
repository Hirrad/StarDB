import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import '../services/swapi'
import SwapiServise from "../services/swapi";
import Row from "../Row";
import ErrorWrapper from "../error-wrapper";
import DataItem from "../data-item";
import Img404 from "../random-planet/src/404.jpg";
import ItemsList from "../items-list";

export default class App extends Component {
    swapiServise = new SwapiServise();
    state = {
        id: null,
    }
    postIdPerson = (id) => {

        this.setState({id})
    }

    renderStarship(person) {
        return (
            <React.Fragment>
                <div className="col planet-container">
                    <img
                        src={person.url}
                        alt={person.name} className='img-fluid planet-container-img'
                        onError={(e) => e.target.src = `${Img404}`}/>
                </div>
                <div className="col">
                    <h2 className='planet-container__header'>{person.name}</h2>
                    <ul className="list-group ">
                        <li className="list-group-item">{`Модель: ${person.model}`}</li>
                        <li className="list-group-item">{`Гипердвигатель: ${person.hyperdrive}`}</li>
                        <li className="list-group-item">{`Класс коробля: ${person.starshipClass}`}</li>
                        <li className="list-group-item">{`Максимальная скорость: ${person.maxSpeed}`}</li>
                        <li className="list-group-item">{`Стоимость: ${person.cost}`}</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

    renderPlanet(person) {
        return (
            <React.Fragment>
                <div className="col planet-container">
                    <img
                        src={person.url}
                        alt={person.name} className='img-fluid planet-container-img'
                        onError={(e) => e.target.src = `${Img404}`}/>
                </div>
                <div className="col">
                    <h2 className='planet-container__header'>{person.name}</h2>
                    <ul className="list-group ">
                        <li className="list-group-item">{`Диаметр: ${person.diameter}`}</li>
                        <li className="list-group-item">{`Население: ${person.population}`}</li>
                        <li className="list-group-item">{`Период вращения: ${person.rotationPeriod}`}</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const peopleShow = (
            <DataItem id={this.state.id}>
                <RenderI parameterName={'name'}
                         parameterDisplay={'Имя'}/>
                <RenderI parameterName={'birthYear'}
                         parameterDisplay={'День рождения'}/>
                <RenderI parameterName={'gender'}
                         parameterDisplay={'Пол'}/>
                <RenderI parameterName={'height'}
                         parameterDisplay={'Рост'}/>
            </DataItem>
        )
        const itemList = (
            <ItemsList postIdPerson={this.postIdPerson}
                       renderList={(item) => `${item.id}: ${item.name}`}/>
        )
        return <div className='container'>
            <Header/>
            <RandomPlanet/>

            <ErrorWrapper>
                <Row left={itemList} right={peopleShow}/>
            </ErrorWrapper>
        </div>;
    }
}
const RenderI = ({parameterName, parameterDisplay, dataObtained, indx}) => {
    return <li className="list-group-item"
               key={indx}>{`${parameterDisplay}: ${dataObtained[parameterName]}`}</li>
}