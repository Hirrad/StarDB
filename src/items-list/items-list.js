import React, {Component} from 'react';
import './items-list.css';
import Loading from "../loading";
import SwapiServise from "../services/swapi";


const {getPeople} = new SwapiServise();
const itemListGhost = (View,dataBase) => {
    return class extends Component {
        state = {
            data: null,
            loading: true
        }
        componentDidMount() {
               dataBase().then((data) => this.setState({
                data,
                loading: false
            }))
        }
        render() {
            const {data, loading} = this.state;
            return (
                <ul className="list-group">
                    {!loading ?
                        <View {...this.props} data={data}/> : null}
                    {loading ? <Loading/> : null}
                </ul>
            )
        }
    }
}

const Itemlist = (props) => {
    const {data,postIdPerson,renderList } = props;
    return (
        data.map((body) => {
            const {id} = body
            const text=renderList(body)
            return <li className="list-group-item itemCursor" key={id} onClick={()=>postIdPerson(id)}>{text} </li>
        })
    )
}
export default itemListGhost(Itemlist,getPeople);

