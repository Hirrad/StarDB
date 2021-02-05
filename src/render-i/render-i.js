import React from  'react';
const RenderI = ({parameterName, parameterDisplay, dataObtained, indx}) => {
    return <li className="list-group-item"
               key={indx}>{`${parameterDisplay}: ${dataObtained[parameterName]}`}</li>
}
export default RenderI;