import React, {Component} from 'react';
import './data-item.css';
import Img404 from "../random-planet/src/404.jpg";
import SwapiServise from "../services/swapi";

const {getPerson} = new SwapiServise()
const dataItemGhost = (View, dataBase) => {
    return class extends Component {
        state = {
            dataObtained: null,
            loading: true
        }

        componentDidMount() {
            if (this.props.id) {
                this.getUpData();
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevProps.id !== this.props.id) {
                this.getUpData();
            }
        }

        getUpData = () => {
            dataBase(this.props.id).then((dataObtained) => {
                this.setState({
                    dataObtained,
                    loading: false
                })
            })
        }

        render() {
            const {loading, dataObtained} = this.state;
            if (loading) {
                return (
                    <div className="col">
                        <h2 className='planet-container__header '>Сделайте свой выбор</h2>
                    </div>
                )
            }
            return (
                <React.Fragment>
                    <div className="col planet-container">
                        <img
                            src={dataObtained.url}
                            alt={dataObtained.name} className='img-fluid planet-container-img'
                            onError={(e) => e.target.src = `${Img404}`}/>
                    </div>
                    <div className="col">
                        <h2 className='planet-container__header'>{dataObtained.name}</h2>
                        <View {...this.props} loading={loading} dataObtained={dataObtained}/>
                    </div>
                </React.Fragment>
            )
        }
    }
}
const DataItem = (props) => {
    const {dataObtained} = props;
    const renderItem = props.children
    return (
        <ul className="list-group ">
            {React.Children.map(renderItem, (child, indx) => {
                return React.cloneElement(child, {dataObtained}, indx);
            })}
        </ul>
    )
}
export default dataItemGhost(DataItem, getPerson);