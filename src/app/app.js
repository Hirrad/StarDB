import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemsList from "../items-list";
import PlanetItem from "../planet-item";
import '../services/swapi'
import SwapiServise from "../services/swapi";

export default class App extends Component {
    swapiSerwise=new SwapiServise();
    state={
        id:null
    }
    postIdPerson=(id)=>{
        this.setState({id})
    }
    render() {
        const{id}=this.state
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
            <div className='body-container d-flex justify-content-between mt-5'>
                {/*<ItemsList getPeople={this.swapiSerwise.getPeople}/>*/}
                <ItemsList postIdPerson={this.postIdPerson}/>
                <PlanetItem id={id}/>
            </div>
            <div className='body-container d-flex justify-content-between mt-5'>
                {/*<ItemsList getPeople={this.swapiSerwise.getPeople}/>*/}
                <ItemsList postIdPerson={this.postIdPerson}/>
                <PlanetItem id={id}/>
            </div>
            <div className='body-container d-flex justify-content-between mt-5'>
                {/*<ItemsList getPeople={this.swapiSerwise.getPeople}/>*/}
                <ItemsList postIdPerson={this.postIdPerson}/>
                <PlanetItem id={id}/>
            </div>
        </div>;
    }

}