import React, {Component} from 'react';

import Row from "../Row";
import {
    RenderPersonItem,
    RenderPeopleList
} from "../components-help";

class PeoplePages extends Component {
    state = {
        id: null,
    }
    postIdPerson = (id) => {

        this.setState({id})
    }

    render() {

        const itemList = (
            <RenderPeopleList postIdPerson={this.postIdPerson}
                                renderList={(item) => `${item.id}: ${item.name}`}/>
        )
        return (
            <Row left={itemList} right={<RenderPersonItem id={this.state.id}/>}/>
        )



    }
}
export {PeoplePages}