import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import '../services/swapi'
import RenderPeople from "../render-people";
import SwapiServise from "../services/swapi";
export default class App extends Component {
swapiServise =new SwapiServise();


    render() {
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
            <RenderPeople dataPeople={this.swapiServise.getPeople}
            renderList={(item)=>`${item.id}: ${item.name}`}/>
        </div>;
    }

}