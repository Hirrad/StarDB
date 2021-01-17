import React, {Component} from 'react';
import './people-item.css';
import SwapiServise from "../services/swapi";

export default class PeopleItem extends Component {
    swapiServer = new SwapiServise();
    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        if (this.props.id) {
            this.updatePeople(this.props.id)
        }

    }

    updatePeople = (id) => {
        this.swapiServer.getPerson(id).then((person) => {
            this.setState({
                person,
                loading: false
            })
        })
    }

    componentDidUpdate(prevProps) {

        if (prevProps.id !== this.props.id) {
            this.updatePeople(this.props.id)
        }

    }

    render() {
        const {person} = this.state;
        const {id} = this.props
        return <div className='d-flex justify-content-center col-6 h-100'>
            {person?<ShowItemPeople person={person}/>:null}
        </div>;
    }
}
const ShowItemPeople = ({person}) => {
    const {name, birthYear,height,mass,id} = person
    return (
        <div className="row d-flex justify-content-center align-items-center bg-dark w-100">
            <div className="col planet-container">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt={name} className='img-fluid planet-container-img'/>
            </div>
            <div className="col">
                <h2 className='planet-container__header'>{name}</h2>
                <ul className="list-group ">
                    <li className="list-group-item">{`День рождения: ${birthYear}`}</li>
                    <li className="list-group-item">{`Рост: ${height}`}</li>
                    <li className="list-group-item">{`Вес: ${mass}`}</li>
                </ul>
            </div>

        </div>
    )
}
