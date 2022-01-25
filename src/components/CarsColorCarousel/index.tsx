import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useTheme } from 'styled-components'

import { ICar } from 'shared/types'
import {
  Container,
  ActionButton,
  CarCardContainer,
  CarCard,
  ImageContainer,
  Image,
} from './styles'

interface CarsCarouselProps {
  car: Car
}

export const CarColorCarousel = ({ car }: CarsCarouselProps) => {
  const theme = useTheme()

  return (
    <Container>
      <ActionButton>
        <BsArrowLeft color={theme.colors.shape} size={24} />
      </ActionButton>

      <CarCardContainer>
        {car.carousel.map(({ id, image }) => (
          <CarCard key={id}>
            <ImageContainer>
              <Image src={image.small} alt={car.model} />
            </ImageContainer>
          </CarCard>
        ))}
      </CarCardContainer>

      <ActionButton>
        <BsArrowRight color={theme.colors.shape} size={24} />
      </ActionButton>
    </Container>
  )
}
