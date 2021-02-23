import React, {Component} from "react";
import Img404 from "../random-planet/src/404.jpg";
import ErrorWrapper from "../error-wrapper";
import Loading from "../loading";

const dataItemGhost = (View) => {
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

        componentDidUpdate(prevProps) {
            if (prevProps.id !== this.props.id) {
                this.getUpData();
            }
        }

        getUpData = () => {

            this.props.data(this.props.id).then((dataObtained) => {
                this.setState({
                    dataObtained,
                    loading: false
                })
            })
        }

        render() {
            const {loading, dataObtained} = this.state;
            if (!dataObtained&&loading) {
                return (
                    <div className="col">
                        <h2 className='planet-container__header '>Сделайте свой выбор</h2>
                    </div>
                )
            }
            if( loading&&dataObtained  ) return <Loading/>
            return (
                <ErrorWrapper>
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
                </ErrorWrapper>
            )
        }
    }
}
export {dataItemGhost};