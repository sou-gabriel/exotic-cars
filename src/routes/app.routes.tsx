import { Routes, Route } from 'react-router-dom'

import { Catalog } from 'components/Catalog'
import { CarDetails } from 'components/CarDetails'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Catalog />} />
      <Route path='/car/:carId' element={<CarDetails />} />
    </Routes>
  )
}
