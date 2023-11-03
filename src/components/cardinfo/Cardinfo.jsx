import React from 'react';
import './cardinfo.css';
import data from './result.json';


const listItems = data.map(data =>
    <div className={'summary_card ' + data.category}>
          <span><img src={data.image} alt={data.category} />{data.category}</span><span><span className='summary_card_dark'>{data.score}<span className='summary_card_light'> / 100</span></span></span>
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