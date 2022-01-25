import { createContext, ReactNode, useState, useEffect } from 'react'

import { api } from 'services/api'

interface CarsProviderProps {
  children: ReactNode | ReactNode[]
}

interface Brand {
  name: string
  image: string
}

interface ImageSizes {
  small: string
  larger: string
}

interface Carousel {
  id: string
  color: string
  image: ImageSizes
}

export interface Car {
  id: string
  brand: Brand
  model: string
  image: string
  color: string
  pricePerDay: number
  carousel: Carousel[]
}

export const CarsContext = createContext<Car[]>([] as Car[])

export const CarsProvider = ({ children }: CarsProviderProps) => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await api.get<Car[]>('/cars')

        if (response.status < 200 || response.status > 299) {
          throw new Error('Não foi possível obter os dados do carro')
        }

        const cars = response.data
        setCars(cars)
      } catch (error) {
        console.log(error)
      }
    }

    loadCars()
  }, [])

  return (
    <CarsContext.Provider value={cars}>
      {children}
    </CarsContext.Provider>
  )
}
