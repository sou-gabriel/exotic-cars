import { Routes, Route } from 'react-router-dom'

import { Showcase } from 'components/Showcase'
import { CarDetails } from 'components/CarDetails'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Showcase />} />
      <Route path='/car/:carId' element={<CarDetails />} />
    </Routes>
  )
}
