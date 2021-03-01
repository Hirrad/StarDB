import React, {Component} from 'react';
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiServiseContext from "../context";
import SwapiServise from "../services/swapi";
import {PeoplePages, PlanetsPages, StarhipsPage} from "../pages";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {RenderStarshipItem} from "../components-help";
import ErrorMessage from "../error-message";
export default class App extends Component {
    state = {
        dataServise: new SwapiServise()
    }


    render() {
        return <div className='container'>

            <SwapiServiseContext.Provider value={this.state.dataServise}>
                <BrowserRouter>
                    <Header/>
                    <RandomPlanet/>
                    <Switch>
                    <Route path='/' render={() => <h2>Welcom to SW!</h2>} exact/>
                    <Route path='/starships' component={StarhipsPage} exact/>

                    <Route path='/planets/:id?' component={PlanetsPages}/>
                    <Route path='/people' component={PeoplePages}/>
                    <Route path='/starships/:id' render={({match}) => {
                        console.log(match.params);
                       return <RenderStarshipItem id={match.params.id}/>
                    }
                    }/>
                    <Route component={ErrorMessage}/>
                    {/*<StarhipsPage/>*/}
                    {/*<PlanetsPages/>*/}
                    {/*<PeoplePages/>*/}
                    </Switch>
                </BrowserRouter>
            </SwapiServiseContext.Provider>
        </div>;
    }
}
