import React, {Component} from 'react';
import ErrorMessage from "../error-message";

export default class ErrorWrapper extends Component{
    state = {
          isError:false
    }
    componentDidCatch(error, errorInfo) {
        console.log('словил');
        this.setState({isError:true})
    }
    render() {

        if(this.state.isError){
            return <ErrorMessage/>
        }
        return this.props.children;
    }

}