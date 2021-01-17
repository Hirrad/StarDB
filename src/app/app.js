import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemsList from "../items-list";
// import PlanetItem from "../planet-item";
import '../services/swapi'
import PeopleItem from "../people-item";
import SwapiServise from "../services/swapi";
export default class App extends Component {

    swapi= new SwapiServise();
    state={
        id:null,
        dataPeople:null,
        dataStarships:null,
        dataPlanet:null,
        page:1
}

    componentDidMount() {
        this.getDataPeople(this.state.page)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.page !== this.state.page ){
            this.getDataPeople(this.state.page)
        }
    }

    getDataPeople(num) {
        this.swapi.getPeople(num).then((people)=>
            this.setState({
                dataPeople:people
            }))
    }
getNumPages=(page)=>{
    {
        console.log(page);
        this.setState(()=>{
            return {
                page:page
            }
        })
    }
}
    postIdPeople=(id)=>{
        this.setState({id})
    }
    render() {
        const {id, dataPeople,page }=this.state;
        console.log(dataPeople)
        return <div className='container'>
            <Header/>
            <RandomPlanet/>
            <div className='body-container d-flex justify-content-between mt-5'>
                <ItemsList postIdPeople={this.postIdPeople} dataArray={dataPeople} page ={page} getNumPages={this.getNumPages}/>
                <PeopleItem id={id}/>
            </div>
        </div>;
    }

}