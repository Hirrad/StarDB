import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import '../services/swapi'
import Row from "../Row";
import ErrorWrapper from "../error-wrapper";
import DataItem from "../data-item";
import ItemsList from "../items-list";

export default class App extends Component {
    state = {
        id: null,
    }
    postIdPerson = (id) => {

        this.setState({id})
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