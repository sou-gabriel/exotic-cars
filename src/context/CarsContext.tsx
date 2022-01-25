import { createContext, ReactNode, useState, useEffect } from 'react'

import { api } from 'services/api'

interface ICarsProviderProps {
  children: ReactNode | ReactNode[]
}

interface IBrand {
  name: string
  image: string
}
export interface IColor {
  id: string
  color: string
  image: string
}

export interface ICar {
  id: string
  brand: IBrand
  model: string
  image: string
  color: string
  pricePerDay: number
  colors: IColor[]
}

export const CarsContext = createContext<ICar[]>([] as ICar[])

export const CarsProvider = ({ children }: ICarsProviderProps) => {
  const [cars, setCars] = useState<ICar[]>([])

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await api.get<ICar[]>('/cars')

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
