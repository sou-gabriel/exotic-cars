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

type Props = {
  car: {
    brand: string
    model: string
    image: string
    pricePerDay: number
  }
}

export const CarItem = ({ car }: Props) => {
  return (
    <Container>
      <Header>
        <div>
          <Brand>{car.brand}</Brand>
          <Model>{car.model}</Model>
        </div>

        <DetailsButton>
          <Bullet />
          <Bullet />
          <Bullet />
        </DetailsButton>
      </Header>

      <Image src={car.image} alt={`${car.brand} - ${car.model}`} />

      <Price>
        <strong>
          <sup>$</sup>{car.pricePerDay}
        </strong>
        <sub>/day</sub>
      </Price>
    </Container>
  )
}
