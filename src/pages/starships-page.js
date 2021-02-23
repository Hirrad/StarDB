import React, {Component} from 'react';

import Row from "../Row";
import {
    RenderStarshipItem,
    RenderStarshipsList
} from "../components-help";

class StarhipsPage extends Component {
    state = {
        id: null,
    }
    postIdPerson = (id) => {

        this.setState({id})
    }

    render() {

        const itemList = (
            <RenderStarshipsList postIdPerson={this.postIdPerson}
                               renderList={(item) => `${item.id}: ${item.name}`}/>
        )
        return (
            <Row left={itemList} right={<RenderStarshipItem id={this.state.id}/>}/>
        )



    }
}
export {StarhipsPage}