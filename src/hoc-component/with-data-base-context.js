import React, {Component} from "react";
//View -компонент в якій треба передати props базу даних
//dataBase -функція виборки
//Context-компонент Provider
const withDataBase = (View, dataBase, Context) => {
    return class extends Component {
        render() {
            return (
                <Context.Consumer>
                    {(data) => (
                        <View {...this.props} data={data[dataBase]}/>
                    )
                    }
                </Context.Consumer>
            );
        }
    }
}
export {withDataBase}