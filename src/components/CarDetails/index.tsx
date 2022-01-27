import { CarsCarousel } from 'components/CarsCarousel'
import { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { api } from 'shared/services/api'
import { ICar } from 'shared/types'
import * as S from './styles'

export const CarDetails = () => {
  const [activeCar, setActiveCar] = useState<ICar>({} as ICar)
  const [isActiveCarLoading, setIsActiveCarLoading] = useState(true)
  const [activeColorIndex, setActiveColorIndex] = useState(0)

  useEffect(() => {
    const activeCarId = sessionStorage.getItem('activeCarId')
    let timerId: ReturnType<typeof setTimeout>

    api.get<ICar>(`/cars/${activeCarId}`).then((response) => {
      setActiveCar(response.data)

      timerId = setTimeout(() => {
        setIsActiveCarLoading(false)
      }, 100)
    })

    return () => clearTimeout(timerId)
  }, [])

  return (
    <S.Container>
      {isActiveCarLoading
        ? (
          <Spinner />
          )
        : (
          <>
            <S.Heading>
              <S.BrandImage
                src={activeCar.brand.logo}
                alt={activeCar.brand.name}
              />
              <div>
                <S.Title>
                  <span>{activeCar.brand.name}</span> {activeCar.model}
                </S.Title>
                <S.Price>${activeCar.pricePerDay}/day</S.Price>
              </div>
            </S.Heading>

            <S.Content>
              <S.Flex>
                <S.RedirectLink to='/'>
                  <BsArrowLeft size={24} color='#313136' />
                  Back to catalog
                </S.RedirectLink>

                <S.CarColorImageContainer>
                  <S.CarColorImage
                    src={activeCar.colors[activeColorIndex].image}
                    alt={activeCar.model}
                  />
                </S.CarColorImageContainer>

                <S.Label>
                  <S.Numbering>
                    {activeColorIndex <= 9
                      ? `0${activeColorIndex + 1}`
                      : activeColorIndex + 1}
                  </S.Numbering>
                  <S.Color>{activeCar.colors[activeColorIndex].color}</S.Color>
                </S.Label>
              </S.Flex>
              <S.RedirectLink to='#' className='highlight'>
                Book now
                <BsArrowRight size={24} color='#fff' />
              </S.RedirectLink>
            </S.Content>

            <CarsCarousel
              activeCar={activeCar}
              setActiveColorIndex={setActiveColorIndex}
            />
          </>
          )}
    </S.Container>
  )
}
