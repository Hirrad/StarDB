import React, {Component} from 'react';

import Row from "../Row";
import {
    RenderPlanetItem,
    RenderPlanetsList
} from "../components-help";

class PlanetsPages extends Component {
    state = {
        id: null,
    }
    postIdPerson = (id) => {

        this.setState({id})
    }

    render() {

        const itemList = (
            <RenderPlanetsList postIdPerson={this.postIdPerson}
                              />
        )
        return (
            <Row left={itemList} right={<RenderPlanetItem id={this.state.id}/>}/>
        )



    }
}
export {PlanetsPages}