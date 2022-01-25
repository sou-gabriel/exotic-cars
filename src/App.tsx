import { Header } from 'components/Header'
import { AppRoutes } from 'routes/app.routes'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </>
  )
}
