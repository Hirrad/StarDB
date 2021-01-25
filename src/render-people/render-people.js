import React, {Component} from 'react'
import ItemsList from "../items-list";
import PlanetItem from "../planet-item";

export default class RenderPeople extends Component {
    state = {
        id: null
    }

    postIdPerson = (id) => {
        this.setState({id})

    }

    render() {
        const {id} = this.state
        const {dataPeople, renderList} = this.props;
        return (
            <div className='body-container d-flex justify-content-between mt-5'>
                <ItemsList postIdPerson={this.postIdPerson}
                           data={dataPeople}
                           renderList={renderList}/>
                <PlanetItem id={id}/>
            </div>
        )
    }

}