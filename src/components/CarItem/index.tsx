import {
  Container,
  Header,
  Brand,
  Model,
  DetailsButton,
  Bullet,
  Price,
} from './styles'

type Props = {
  brand: string
  model: string
  image: string
  pricePerDay: number
}

export const CarItem = ({ brand, model, image, pricePerDay }: Props) => {
  return (
    <Container>
      <Header>
        <div>
          <Brand>{brand}</Brand>
          <Model>{model}</Model>
        </div>

        <DetailsButton>
          <Bullet />
          <Bullet />
          <Bullet />
        </DetailsButton>
      </Header>

      <img src={image} alt={`${brand} - ${model}`} />

      <Price>
        <strong>
          <sup>$</sup>{pricePerDay}
        </strong>
        <sub>/day</sub>
      </Price>
    </Container>
  )
}
