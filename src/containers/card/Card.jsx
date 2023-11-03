import React from 'react';
import './card.css';
import Cardinfo from '../../components/cardinfo/Cardinfo';


const Card = () => {
  return (
    <div className='container__card__body'>
      <div className='container__card__body_left'>
        <h1>Your Result</h1>
        <div className='container__card__body_left_cirlce'>
          <span><p className='container__card__body_left_score'>76</p>
            <p className='container__card__body_left_score_of'>of 100</p></span>
        </div>
        <h2>Great</h2>
        <p className='container__card__body_left_text'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className='container__card__body_right'>
        <p className='container__card__body_right_summary'>Summary</p>
        <Cardinfo />
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Card