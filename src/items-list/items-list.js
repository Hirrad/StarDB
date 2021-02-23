import React from 'react';
import './items-list.css';

const Itemlist = (props) => {
    const {data,postIdPerson,renderList } = props;
    return (

        data.map((body) => {
            const {id} = body
            const text=renderList(body)
            return <li className="list-group-item itemCursor" key={id} onClick={()=>postIdPerson(id)}>{text} </li>
        })
    )
}
export default Itemlist;

