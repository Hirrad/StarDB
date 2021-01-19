import React, {Component} from 'react';
import './items-list.css';
import SwapiServise from "../services/swapi";
import Loading from "../loading";

export default class ItemsList extends Component {
    swapiSerwise =new SwapiServise();
    state = {
        loading: true,
        people: null
    }
    componentDidMount() {
        this.upGetPeope();

        console.log(this.state.people)
    }
   upGetPeope=()=>{
this.swapiSerwise.getPeople().then((people)=>{
    this.setState({
        people,
        loading:false})
})

}


    render() {
        const {people,loading} = this.state;
        const{postIdPerson}=this.props;
        if(!people){
            return <Loading/>
        }

        return <div className='col-5'>
            <ul className="list-group">
                {!loading?<PeopleShow people={people} postIdPerson={postIdPerson}/>:null}
                {loading?<Loading/>:null}

            </ul>
        </div>;
    }
}

function PeopleShow({people, postIdPerson}) {
    // console.log(people)
    return people.map((item)=>{
           return <li className="list-group-item itemCursor" key={item.id} onClick={()=>postIdPerson(item.id)}>{item.name}</li>
        })

}