import { Routes, Route } from 'react-router-dom'

import { Showcase } from 'components/Showcase'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Showcase />} />
    </Routes>
  )
}
