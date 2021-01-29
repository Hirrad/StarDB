import React, {Component} from 'react';
import './data-item.css';
import Loading from "../loading";

export default class DataItem extends Component {

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        if (this.props.id) {
            this.getUpData();
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id) {
            this.getUpData();
        }

    }

    getUpData = () => {

        if(this.props.dataGet){
            console.log(this.props.id);
            const dataGet=this.props.dataGet
            dataGet(this.props.id).then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
        }

    }

    render() {
        const {person, loading} = this.state;
        const {renderItem}=this.props
        const showQoshn = (loading & person);
        console.log(renderItem);
        return (
            <div className="row d-flex justify-content-center align-items-center bg-dark w-100">
                {(!loading&&renderItem) ? <ShowPerson person={person} renderItem={renderItem}/> : null}
                {loading ? 'Выбор сдлайте свой!' : null}
                {showQoshn ? <Loading/> : null}
            </div>
        )
    }
}
const ShowPerson = ({person,renderItem}) => {

    if (!person&&!renderItem ) {
        return (
            <div className="col">
                <h2 className='planet-container__header '>Сделайте свой выбор</h2>
            </div>
        )
    }
    return (
        renderItem(person)
        // <React.Fragment>
        //     <div className="col planet-container">
        //         <img
        //             // src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        //             src={person.url}
        //             alt={person.name} className='img-fluid planet-container-img'/>
        //     </div>
        //     <div className="col">
        //         <h2 className='planet-container__header'>{person.name}</h2>
        //         <ul className="list-group ">s
        //             <li className="list-group-item">{`День рождения: ${person.birthYear}`}</li>
        //             <li className="list-group-item">{`Рост: ${person.height}`}</li>
        //             <li className="list-group-item">{`Пол: ${person.gender}`}</li>
        //             <li className="list-group-item">{`Вес: ${person.mass}`}</li>
        //         </ul>
        //     </div>
        // </React.Fragment>
    )
}