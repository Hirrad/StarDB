import React, {Component} from 'react';
import './items-list.css';
import Loading from "../loading";

export default class ItemsList extends Component {

    state = {
        loading: true,
        dataList: null
    }

    peopleShow({dataList, postIdPerson, renderList}) {

        if (renderList) {
            return dataList.map((dataList) => {
                const {id} = dataList;
                const text = renderList(dataList);
                return <li className="list-group-item itemCursor" key={id} onClick={() => postIdPerson(id)}>{text}</li>
            })
        }
        return <Loading/>;


    }

    componentDidMount() {
        if (this.props.data) this.upGetPeople();
    }

    upGetPeople() {
        const dataList = this.props.data;

        dataList().then((dataList) => {
            this.setState({
                dataList,
                loading: false
            })
        })

    }


    render() {
        const {dataList, loading} = this.state;
        const {postIdPerson,renderList} = this.props;


        if (!dataList) {
            return <Loading/>
        }

        return <div className='col-5'>
            <ul className="list-group">
                {!loading ? <this.peopleShow dataList={dataList} postIdPerson={postIdPerson} renderList={renderList}/> : null}
                {loading ? <Loading/> : null}

            </ul>
        </div>;
    }
}

// PeopleShow({people, postIdPerson}) {
//
//     return people.map(({id, name})=>{
//            return <li className="list-group-item itemCursor" key={id} onClick={()=>postIdPerson(id)}>{name}</li>
//         })
//
// }