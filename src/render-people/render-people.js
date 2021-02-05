import React, {Component} from 'react'
import ItemsList from "../items-list";
import DataItem from "../data-item";
import Loading from "../loading";
import Row from "../Row";
import ErrorWrapper from "../error-wrapper";
import SwapiServise from "../services/swapi";

export default class RenderPeople extends Component {
    swapiServise =new SwapiServise();
    state = {
        id: null,
    }

    postIdPerson = (id) => {

        this.setState({id})
    }
    render() {
        const {id} = this.state

        const {dataItems, renderList,renderItem,visualization} = this.props;
        const itemList = (
            <ItemsList postIdPerson={this.postIdPerson}
                       // data={dataItems}
                       renderList={renderList}/>
        )
        const peopletItem = (

            <DataItem id={id}
                      dataGet={visualization}
                      renderItem={renderItem}/>

        )
        return (
            <ErrorWrapper>
                <Row left={itemList} right={peopletItem}/>
            </ErrorWrapper>


        )
    }

}