import { useState, useEffect } from 'react'

import { api } from 'services/api'
import { ICar } from 'shared/types'
import { CarItem } from 'components/CarItem'
import * as S from './styles'

export const Catalog = () => {
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() => {
    api.get<ICar[]>('/cars')
      .then(response => {
        setCars(response.data)
      })
  }, [])

  return (
    <S.Container>
      <S.Content>
        {cars.map(car => <CarItem key={car.id} car={car} />)}
      </S.Content>
    </S.Container>
  )
}
