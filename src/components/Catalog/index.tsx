import { useState, useEffect } from 'react'

import { api } from 'shared/services/api'

import { ICar } from 'shared/types'

import { CarCard } from 'components/CarCard'
import { Spinner } from 'components/Spinner'
import { ReactComponent as UpIcon } from 'assets/icons/up.svg'

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

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  if (isLoading) {
    return (
      <S.Container>
        <Spinner />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Content>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </S.Content>
      <S.ScrollTopButton onClick={handleScrollUp}>
        <UpIcon />
      </S.ScrollTopButton>
    </S.Container>
  )
}
