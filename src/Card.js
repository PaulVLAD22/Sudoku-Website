import React, { useState } from 'react';
import  './index.css';
import {wx_code_to_className} from './cards';
import {Spring} from 'react-spring/renderprops';


const Card = ({id,data,day}) =>{
  console.log(data);
  const hour_actual = new Date().getHours();
  const temp_min = data['temp_min_c'];
  const temp_max = data['temp_max_c'];
  const timeframes = data['Timeframes'];

  //state
  const [timeframes_index,settimeframes_index]=useState(Math.floor(hour_actual/3));

  const increaseTimeframe = () =>{
    if (timeframes_index!==7)
      settimeframes_index(timeframes_index+1);
  }
  const decreaseTimeframe = () =>{
    if (timeframes_index!==0)
      settimeframes_index(timeframes_index-1);
  }
 
  return (
    <Spring
    from = {{opacity:0,marginTop:500}}
    to ={{opacity:1,marginTop:40}}
    >
      {props => (
        <div style={props} className ={"col-xl-3 col-lg-3 col-md-5 col-sm-7 col-xs-7 my-col d-flex flex-column text-center " + wx_code_to_className[timeframes[timeframes_index]['wx_code']]} id='day-0'>
          <br></br>
          <h1 className='display-1 text-center shadow-sm'>{day}</h1>
          <br></br><br></br>
          <div className='row'>
        <h2 className='col-2 offset-1 temps'>{temp_min+"\u00B0"}</h2>
            <h2 className='col-2 offset-6 temps' >{temp_max+"\u00B0"}</h2>
          </div>
          <h1 className='display-2 '>{timeframes[timeframes_index]['temp_c']+"\u00B0"}</h1>
          <br></br>
          <div className='flex-column justify-content-between items-align-center '>
            <button type='button' className='btn btn-outline-secondary' onClick={increaseTimeframe}>+</button>
            <h2 className='display-3'>{timeframes[timeframes_index]['time']/100+":00"}</h2>
            <button type='button' className='btn btn-outline-secondary' onClick={decreaseTimeframe}>-</button>
          </div>
          <br></br>
          <h3 className='display-4 shadow-lg'>{timeframes[timeframes_index]['wx_desc']}</h3>
          <br></br>    
        </div>
  )}
  </Spring>
  )
};

export default Card;