import { useState } from 'react'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { AppRoutes } from 'routes/app.routes'

export const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <MainContent menuIsOpen={menuIsOpen}>
        <AppRoutes />
      </MainContent>
    </>
  )
}
