export interface IBrand {
  name: string
  logo: string
}

export interface IColor {
  color: string
  image: string
}

export interface ICar {
  id: string
  brand: IBrand
  model: string
  face: string
  color: string
  pricePerDay: number
  colors: IColor[] | []
}
