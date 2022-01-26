import { useNavigate } from 'react-router-dom'

import { ICar } from 'shared/types'
import * as S from './styles'
interface ICartItemProps {
  car: ICar
}

export const CarItem = ({ car }: ICartItemProps) => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    sessionStorage.setItem('activeCarId', car.id)
    navigate(`/car/${car.id}`)
  }

  return (
    <S.Container>
      <S.RedirectButton onClick={handleRedirect}>
        <S.Heading>
          <div>
            <S.Brand>{car.brand.name}</S.Brand>
            <S.Model>{car.model}</S.Model>
          </div>

          <S.BulletsContainer>
            <S.Bullet />
            <S.Bullet />
            <S.Bullet />
          </S.BulletsContainer>
        </S.Heading>

        <S.CarSideImage
          src={car.image}
          alt={`${car.brand.name} - ${car.model}`}
        />

        <S.Price>
          <strong>
            <sup>$</sup>{car.pricePerDay}
          </strong>
          <sub>/day</sub>
        </S.Price>
      </S.RedirectButton>
    </S.Container>
  )
}
