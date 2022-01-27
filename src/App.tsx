import { useState } from 'react'

import { Header, MainContent } from 'components'
import { AppRoutes } from 'routes/app.routes'

export const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainContent menuIsOpen={menuIsOpen}>
        <AppRoutes />
      </MainContent>
    </>
  )
}
