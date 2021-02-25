import React from 'react';
import {withRouter} from 'react-router-dom';
import Row from "../Row";
import {
    RenderPlanetItem,
    RenderPlanetsList
} from "../components-help";

const PlanetsPages=({history,match})=> {
    const {id}=match.params
    console.log(match.params);
    const itemList = (
        <RenderPlanetsList postIdPerson={(id)=>history.push(id)}
        />
    )

        return (
            <Row left={itemList} right={<RenderPlanetItem id={id}/>}/>
        )




}
export default withRouter(PlanetsPages);