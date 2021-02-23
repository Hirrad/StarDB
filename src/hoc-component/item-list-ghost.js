import React, {Component} from "react";
import Loading from "../loading";
import ErrorWrapper from "../error-wrapper";


const itemListGhost = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true
        }

        componentDidMount() {
            this.props.data().then((data) => this.setState({
                data,
                loading: false
            }))
        }

        render() {

            const {data, loading} = this.state;
            return (
                <ErrorWrapper>
                    <ul className="list-group">
                        {!loading ?
                            <View {...this.props} data={data}/> : null}
                        {loading ? <Loading/> : null}
                    </ul>
                </ErrorWrapper>
            )
        }
    }
}
export {itemListGhost}