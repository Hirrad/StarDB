import React, {Component} from 'react';
import {itemComponentWithAll} from "../hoc-component";
import DataItem from "../data-item";
import RenderI from "../render-i";
import SwapiServiseContext from "../context";

const withRenderIPerson = (View, Rend) => {
    return class extends Component {
        render() {
            return <View {...this.props}>
                <Rend parameterName={'name'}
                      parameterDisplay={'Имя'}/>
                <Rend parameterName={'birthYear'}
                      parameterDisplay={'День рождения'}/>
                <Rend parameterName={'gender'}
                      parameterDisplay={'Пол'}/>
                <Rend parameterName={'height'}
                      parameterDisplay={'Рост'}/>
            </View>
        }
    }
}
const withRenderIPlanet = (View, Rend) => {
    return class extends Component {
        render() {
            return <View {...this.props}>
                <Rend parameterName={'name'}
                      parameterDisplay={'Название'}/>
                <Rend parameterName={'diameter'}
                      parameterDisplay={'Деаметр'}/>
                <Rend parameterName={'population'}
                      parameterDisplay={'Население'}/>
                <Rend parameterName={'rotationPeriod'}
                      parameterDisplay={'Период Вращения'}/>
            </View>
        }
    }
}
const withRenderIStarship = (View, Rend) => {
    return class extends Component {
        render() {
            return <View {...this.props}>
                <Rend parameterName={'model'}
                      parameterDisplay={'Модель'}/>
                <Rend parameterName={'maxSpeed'}
                      parameterDisplay={'Максимльная скорость'}/>
                <Rend parameterName={'starshipClass'}
                      parameterDisplay={'Класс коробля'}/>
                <Rend parameterName={'hyperdrive'}
                      parameterDisplay={'Гипердвигатель'}/>
                <Rend parameterName={'cost'}
                      parameterDisplay={'Стоимость'}/>
            </View>
        }
    }
}


const RenderPersonItem = itemComponentWithAll(
    DataItem,
    withRenderIPerson,
    RenderI,
    'getPerson',
    SwapiServiseContext
);
const RenderPlanetItem = itemComponentWithAll(
    DataItem,
    withRenderIPlanet,
    RenderI,
    'getPlanet',
    SwapiServiseContext
);
const RenderStarshipItem = itemComponentWithAll(
    DataItem,
    withRenderIStarship,
    RenderI,
    'getStarship',
    SwapiServiseContext
);
export {
    RenderPersonItem,
    RenderPlanetItem,
    RenderStarshipItem
}