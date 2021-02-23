import React from 'react';
import './data-item.css';

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
export default DataItem