import React from 'react'

import Star from './Star'

const shortid = require('shortid');



function Stars({ rating }) {
  let counter = [];
  const roundRating = Math.round(rating);
  if (roundRating <= 5 && roundRating >= 1) {
    for (let i = 0; i < roundRating; i += 1) {
      counter.push(shortid.generate());
    }
  }
  else { counter = null }


  return (
    <div className='wrapper'>
      { counter && <ul className='stars'>
        {counter.map((el) => <Star key={el} />)}
      </ul>
      }
    </div>
  )
}

Stars.defaultProps = {
  rating: 0
}

export default Stars
