import { Star } from 'phosphor-react'
import { RateContainer } from './styles'
import { useState } from 'react'

export function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <RateContainer>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={i} htmlFor="rating">
            <input type="radio" name="rating" value={ratingValue} />
            <Star
              size={28}
              weight={ratingValue <= (hover || rating) ? 'fill' : 'regular'}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </RateContainer>
  )
}
