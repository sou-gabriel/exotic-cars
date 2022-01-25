import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { useTheme } from 'styled-components'

import { CarsContext } from 'context/CarsContext'
import { CarColorCarousel } from 'components/CarsColorCarousel'
import {
  Container,
  Heading,
  Logo, Model,
  Price,
  Preview,
  Top,
  Bottom,
  NavigationButton,
  Image,
  Data,
  Color,
} from './styles'

export const CarDetails = () => {
  const navigate = useNavigate()
  const cars = useContext(CarsContext)
  const { carId } = useParams()
  const activeCar = cars.find(car => car.id === carId)

  const theme = useTheme()

  const handleGoBack = () => {
    navigate('/')
  }

  if (activeCar === undefined) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <div>
        <Heading>
          <Logo src={activeCar.brand.image} alt={activeCar.brand.name} />
          <div>
            <Model>{activeCar.brand.name} {activeCar.model}</Model>
            <Price>${activeCar.pricePerDay}/day</Price>
          </div>
        </Heading>

        <Preview>
          <Top>
            <NavigationButton isFill={false} onClick={handleGoBack}>
              <BsArrowLeft size={24} color={theme.colors.title} />
              Back to catalog
            </NavigationButton>
            <Image
              src={activeCar.carousel[0].image.larger}
              alt={activeCar.model}
            />
            <Data>
              <strong>{activeCar.carousel[0].id}</strong>
              <Color>{activeCar.carousel[0].color}</Color>
            </Data>
          </Top>

          <Bottom>
            <NavigationButton isFill>
              Book now
              <BsArrowRight size={24} color={theme.colors.shape} />
            </NavigationButton>
          </Bottom>
        </Preview>
      </div>

      <CarColorCarousel car={activeCar} />
    </Container>
  )
}
