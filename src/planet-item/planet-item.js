import React, {Component} from 'react';
import './planet-item.css';
import SwapiServise from "../services/swapi";
import Loading from "../loading";

export default class PlanetItem extends Component {
    swapiserwise = new SwapiServise();
    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        if (this.props.id) {
            this.getUpPersoData();
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id) {
            this.getUpPersoData();
        }

    }

    getUpPersoData = () => {
        this.swapiserwise.getPerson(this.props.id).then((person) => {
            this.setState({
                person,
                loading: false
            })
        })
    }

    render() {
        const {person,loading} = this.state;
        return <div className='d-flex justify-content-center col-6 h-100'>
            <div className="row d-flex justify-content-center align-items-center bg-dark w-100">
                {!loading?<ShowPerson person={person}/>:null}
                {loading?<Loading/>:null}


            </div>
        </div>;
    }
}
const ShowPerson = ({person}) => {
    console.log(person);
    if(!person){
        return (
            <div className="col">
                <h2 className='planet-container__header '>Сделайте свой выбор</h2>
            </div>
        )
    }
    return (
        <React.Fragment>
        <div className="col planet-container">
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
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