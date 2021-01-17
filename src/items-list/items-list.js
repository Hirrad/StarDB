import React, {Component} from 'react';
import './items-list.css';
import SwapiServise from "../services/swapi";
import Loading from "../loading";
import Pagination from "../pagination";

export default class ItemsList extends Component {
    swapiServise = new SwapiServise();
    state = {
        // people: null,
        loading: true
    }

    componentDidMount() {
        this.getPeople();

    }
componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.dataArray !==this.props.dataArray){
            this.getPeople();
        }
}

    errorWhatch = () => {
        console.log('ошибка');
    }
    getPeople = () => {
        // this.swapiServise.getPeople()
        //     .then((people) =>
        //         this.setState({
        //                 people: people,
        //
        //                 loading: false
        //             }
        //         ))
        if(this.props.dataArray){
            this.setState({
                                loading: false
                            })
        }
    }

    render() {
        // const {people, loading} = this.state;
        // console.log(people);
        const {loading} = this.state;
        const {postIdPeople, dataArray,page,getNumPages} = this.props


        const displayLoading = loading ? <Loading/> : null;
        const displayPeople = (!loading && !!dataArray) ? <PeopleDraw people={dataArray.data} postIdPeople={postIdPeople}/> : null;
// console.log(dataArray);
        return <div className='col-5'>
            <ul className="list-group">
                {displayLoading}
                {displayPeople}
                {dataArray?<Pagination page={page} dataArray={dataArray} getNumPages={getNumPages}/>:null}
            </ul>
        </div>;
    }
}
const PeopleDraw = ({people, postIdPeople}) => {

    return people.map((item) => {

        return (
            <a href="/#" key={item.id} onClick={()=>postIdPeople(item.id)}>
                <li className="list-group-item">{item.name}</li>
            </a>
        )
    })
}