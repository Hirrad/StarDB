import Itemlist from "../items-list";
import SwapiServiseContext from "../context";
import {
    listComponentWithAll,
    withRenderFunList
} from "../hoc-component";

const renderFunPlanerList = (item) => `${item.name}: ${item.diameter}`;
const renderFunPeopleList = (item) => `${item.name}: ${item.birthYear}`;
const renderFunStarshipsList = (item) => `${item.name}: ${item.starshipClass}`;
const RenderPlanetsList = listComponentWithAll(Itemlist,
    withRenderFunList,
    renderFunPlanerList,
    'getPlanets',
    SwapiServiseContext)
const RenderPeopleList = listComponentWithAll(Itemlist,
    withRenderFunList,
    renderFunPeopleList,
    'getPeople',
    SwapiServiseContext)
const RenderStarshipsList = listComponentWithAll(Itemlist,
    withRenderFunList,
    renderFunStarshipsList,
    'getStarships',
    SwapiServiseContext)
export {
    RenderPeopleList,
    RenderPlanetsList,
    RenderStarshipsList
}

