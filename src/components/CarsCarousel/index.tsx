import { Dispatch, SetStateAction, useRef } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'styles/carousel.css'
import 'swiper/css/navigation'
import 'swiper/css/bundle'

import { ICar } from 'shared/types'
import * as S from './styles'

interface ICarsCarouselProps {
  activeCar: ICar
  setActiveColorIndex: Dispatch<SetStateAction<number>>
}

export const CarsCarousel = ({ activeCar, setActiveColorIndex }: ICarsCarouselProps) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <S.Container>
      <S.NavigationButton side='left' ref={navigationPrevRef}>
        <BsArrowLeft size={24} color='#fff' />
      </S.NavigationButton>

      <S.NavigationButton side='right' ref={navigationNextRef}>
        <BsArrowRight size={24} color='#fff' />
      </S.NavigationButton>

      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={3}
        centeredSlides
        roundLengths
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        className='slider'
        onActiveIndexChange={({ realIndex }) => {
          setActiveColorIndex(realIndex)
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation!.prevEl = navigationPrevRef.current
            swiper.params.navigation!.nextEl = navigationNextRef.current
          }
        }}
        grabCursor
        centeredSlidesBounds
        loop
      >
        {activeCar.colors.map(({ image, color }, index) => (
          <SwiperSlide key={index} className='slider-item'>
            {({ isActive }) => {
              return (
                <S.CarCard isActive={isActive}>
                  <S.CarImage isActive={isActive} src={image} alt={color} />
                </S.CarCard>
              )
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  )
}
