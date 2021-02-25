import React from 'react';
import {RenderStarshipsList} from "../components-help";
import { withRouter } from 'react-router-dom';

const StarhipsPage=({history})=>{
      return (
          <RenderStarshipsList postIdPerson={(id)=>{
                    history.push(`/starships/${id}`)
          }}
                               renderList={(item) => `${item.id}: ${item.name}`}/>
                                    )
    }

export default withRouter(StarhipsPage);