import { Link } from 'react-router-dom'

import { ICar } from 'context/CarsContext'

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

interface ICartItemProps {
  car: ICar
}

export const CarItem = ({ car }: ICartItemProps) => {
  return (
    <Container>
      <Link to={`/car/${car.id}`}>
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
      </Link>
    </Container>
  )
}
