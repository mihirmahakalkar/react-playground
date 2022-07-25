import { useState } from 'react';
import './starRating.scss'

const StarRating = (props) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <div id="starRating" className="starRating">
        <h2>Star Rating:</h2>
        {[...Array(props.totalStars)].map((item, index) => {
            index += 1;
            return (
                <button
                    type="button"
                    key={index}
                    className={`star ${index <= (hover || rating) ? 'on' : 'off'}`}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <span>&#9733;</span>
                </button>
            )
        })}
    </div>
  )
}

export default StarRating