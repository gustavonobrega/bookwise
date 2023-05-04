import { Star } from 'phosphor-react'
import { RateContainer } from './styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const { register } = useFormContext()

  return (
    <RateContainer>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={i}>
            <input
              type="radio"
              id={`rate-${ratingValue}`}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              {...register('rate')}
            />
            <Star
              size={28}
              weight={ratingValue <= (hover || rating) ? 'fill' : 'regular'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })}
    </RateContainer>
  )
}
