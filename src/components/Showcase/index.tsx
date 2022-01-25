import { useContext } from 'react'

import { CarItem } from 'components/CarItem'
import { CarsContext } from 'context/CarsContext'
import { Container, CarList } from './styles'

export const Showcase = () => {
  const cars = useContext(CarsContext)

  return (
    <Container>
      <CarList>
        {cars.map(car => <CarItem key={car.id} car={car} />)}
      </CarList>
    </Container>
  )
}
