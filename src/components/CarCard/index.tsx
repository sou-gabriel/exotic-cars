import { useNavigate } from 'react-router-dom'

import { ICar } from 'shared/types'

import * as S from './styles'
interface ICartItemProps {
  car: ICar
}

export const CarCard = ({ car }: ICartItemProps) => {
  const navigate = useNavigate()

  const handleRedirectToCarDetails = () => {
    sessionStorage.setItem('activeCarId', car.id)
    navigate(`/car/${car.id}`)
  }

  return (
    <S.Container>
      <button onClick={handleRedirectToCarDetails}>
        <S.Header>
          <div>
            <S.Brand>{car.brand.name}</S.Brand>
            <S.Model>{car.model}</S.Model>
          </div>

          <S.Bullets>
            <span />
            <span />
            <span />
          </S.Bullets>
        </S.Header>

        <img src={car.face} alt={car.brand.name} />

        <S.Price>
          <strong>
            <sup>$</sup>725
          </strong>
          <sub>/day</sub>
        </S.Price>
      </button>
    </S.Container>
  )
}
