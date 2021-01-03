import React, {Component} from 'react';
import './planet-item.css';

export default class PlanetItem extends Component{
    render() {
        return <div className='d-flex justify-content-center col-6 h-100'>
            <div className="row d-flex justify-content-center align-items-center bg-dark w-100">
                <div className="col planet-container">
                    <img src="https://c0.klipartz.com/pngpicture/190/321/gratis-png-star-wars-chewbacca-chewbacca-leia-organa-yoda-wookieepedia-chewbacca-thumbnail.png" alt="" className='img-fluid planet-container-img'/>
                </div>
                <div className="col">
                    <h2 className='planet-container__header'>Yoda</h2>
                    <ul className="list-group ">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                    </ul>
                </div>

            </div>
        </div>;
    }
}