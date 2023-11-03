import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className='container__card__body'>
      <div className='container__card__body_left'>
        <h1>Your Result</h1>
        <div className='container__card__body_left_cirlce'>
          <p className='container__card__body_left_score'>76</p>
          <p className='container__card__body_left_score_of'>of 100</p>
        </div>
        <h2>Great</h2>
        <p className='container__card__body_left_text'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>

      <div className='container__card__body_right'>
        <p className='container__card__body_right_summary'>Summary</p>
        

        Reaction
        80 / 100

        Memory
        92 / 100

        Verbal
        61 / 100

        Visual
        72 / 100

        Continue</div>
    </div>
  )
}

export default Card