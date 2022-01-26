import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { AppRoutes } from 'routes/app.routes'

export const App = () => {
  return (
    <>
      <Header />
      <MainContent>
        <AppRoutes />
      </MainContent>
    </>
  )
}
