import React from 'react';
import './cardinfo.css';
import data from './result.json';


const listItems = data.map(data =>
    <div className='summary_card'>
          <span><img src={data.icon} alt={data.category} />{data.category}</span><span>{data.score} / 100</span>
       </div>
  );

  const Cardinfo = () => {
      return(
          <div className='summary-container'>
              { listItems }
          </div>
        )
  }

  export default Cardinfo