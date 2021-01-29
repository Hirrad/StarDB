import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import '../services/swapi'
import RenderPeople from "../render-people";
import SwapiServise from "../services/swapi";
import Row from "../Row";
import ErrorWrapper from "../error-wrapper";
import PeopleItem from "../people-item";
import DataItem from "../data-item";
import Img404 from "../random-planet/src/404.jpg";

export default class App extends Component {
    swapiServise = new SwapiServise();

    renderPeople(person) {
        return (
            <React.Fragment>
                <div className="col planet-container">
                    <img
                        src={person.url}
                        alt={person.name} className='img-fluid planet-container-img'/>
                </div>
                <div className="col">
                    <h2 className='planet-container__header'>{person.name}</h2>
                    <ul className="list-group ">
                        <li className="list-group-item">{`День рождения: ${person.birthYear}`}</li>
                        <li className="list-group-item">{`Рост: ${person.height}`}</li>
                        <li className="list-group-item">{`Пол: ${person.gender}`}</li>
                        <li className="list-group-item">{`Вес: ${person.mass}`}</li>
                    </ul>
                </div>
            </React.Fragment>
        )
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
            <DataItem id={12}
                      renderItem={this.renderPeople}
                      dataGet={this.swapiServise.getPerson}/>
        )
        const starshipShow = (
            <DataItem id={12}
                      dataGet={this.swapiServise.getStarship}
                      renderItem={this.renderStarship}/>
        )
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
            <RenderPeople dataItems={this.swapiServise.getPeople}
                          renderList={(item) => `${item.id}: ${item.name}`}
                          renderItem={this.renderPeople}
                          visualization={this.swapiServise.getPerson}

            />
            <RenderPeople dataItems={this.swapiServise.getStarships}
                          renderList={(item) => `${item.id}: ${item.name}`}
                          renderItem={this.renderStarship}
                          visualization={this.swapiServise.getStarship}
            />
            <RenderPeople dataItems={this.swapiServise.getPlanets}
                          renderList={(item) => `${item.id}: ${item.name}`}
                          renderItem={this.renderPlanet}
                          visualization={this.swapiServise.getPlanet}
            />


            {/*<ErrorWrapper>*/}
            {/*    <Row left={peopleShow} right={starshipShow}/>*/}
            {/*</ErrorWrapper>*/}
        </div>;
    }

}