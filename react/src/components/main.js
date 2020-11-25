import React from 'react'
import {useState} from 'react';
//state global

function Main(props)
{
const {dishes}=props;

    return(
 <ul>
      {dishes.map(dish => (
        <li>
          <label>            
            <input type="checkbox" />
            {dish}
          </label>
        </li>
      ))}
    </ul> 
    )

}

export default Main;