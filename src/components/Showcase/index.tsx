import { useState, useEffect } from 'react'

import { api } from 'services/api'
import { CarItem } from 'components/CarItem'
import { Container, CarList } from './styles'

interface Car {
  id: string
  brand: string
  model: string
  image: string
  pricePerDay: number
}

export const Showcase = () => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await api.get<Car[]>('/cars')

        if (response.status < 200 || response.status > 299) {
          throw new Error('Não foi possível obter os dados dos carros')
        }

        const cars = response.data
        setCars(cars)
      } catch (error) {
        console.log(error)
      }
    }

    loadCars()
  }, [])

  return (
    <Container>
      <CarList>
        {cars.map(car => <CarItem key={car.id} car={car} />)}
      </CarList>
    </Container>
  )
}
