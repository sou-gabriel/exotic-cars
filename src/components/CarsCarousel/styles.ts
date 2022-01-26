import styled, { css } from 'styled-components'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ISliderProps {
  isActive: boolean
}

interface INavigationButtonProps {
  side: 'left' | 'right'
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const CarCard = styled.div<ISliderProps>`
  width: 279px;
  max-width: 100%;
  height: 179px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  transition: 200ms;
  ${({ isActive }) => {
    return isActive
? css`
      background: linear-gradient(90deg,#b9baf1 0%,#e0d3ef 100%);
      transform: translateY(-5px) scale(1.3);
    `
: css`background: linear-gradient(90deg,#C8C8CA 0%,#F3F1FC 100%)`
  }};
`

export const CarImage = styled.img<ISliderProps>`
  width: 100%;
  margin-left: 2.625rem;
`

export const NavigationButton = styled.button<INavigationButtonProps>`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.title};
  position: absolute;
  z-index: 999;
  background: #313136 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;

  ${({ side }) => side === 'left'
    ? css`
        left: 0;
      `
    : css`
        right: 0
      `
  }
`
