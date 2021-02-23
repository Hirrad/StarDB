import React, {Component} from "react";

const withRenderFunList=(View, fun)=>{
    return class extends Component{
        render() {
            return <View {...this.props} renderList={fun}/>
        }
    }
}
export {withRenderFunList}