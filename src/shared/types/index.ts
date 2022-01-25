export interface IBrand {
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
