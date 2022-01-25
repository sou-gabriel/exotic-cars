import { Car } from 'context/CarsContext'

import {
  Container,
  Header,
  Brand,
  Model,
  DetailsButton,
  Bullet,
  Image,
  Price,
} from './styles'

type CartItemProps = {
  car: Car
}

export const CarItem = ({ car }: CartItemProps) => {
  return (
    <Container>
        <Header>
          <div>
            <Brand>{car.brand.name}</Brand>
            <Model>{car.model}</Model>
          </div>

          <DetailsButton>
            <Bullet />
            <Bullet />
            <Bullet />
          </DetailsButton>
        </Header>

        <Image src={car.image} alt={`${car.brand.name} - ${car.model}`} />

        <Price>
          <strong>
            <sup>$</sup>{car.pricePerDay}
          </strong>
          <sub>/day</sub>
        </Price>
    </Container>
  )
}
