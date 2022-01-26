import { useState, useEffect } from 'react'

import { api } from 'services/api'
import { ICar } from 'shared/types'
import { CarCard } from 'components/CarCard'
import { Spinner } from 'components/Spinner'
import * as S from './styles'

export const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>

    api.get<ICar[]>('/cars').then((response) => {
      setCars(response.data)
      setTimeout(() => {
        setIsLoading(false)
      }, 100)
    })

    return () => clearTimeout(timerId)
  }, [])

  return (
    <S.Container>
      {isLoading
        ? (
          <Spinner />
          )
        : (
          <S.Content>
            {cars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </S.Content>
          )}
    </S.Container>
  )
}
