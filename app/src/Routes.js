import { MainLayout } from 'layouts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeOrderProvider } from 'components'

import Home from 'views/Home'
import Orders from 'views/Orders'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={routes.root}
          render={() => (
            <MainLayout provider={HomeOrderProvider} component={Home} />
          )}
        />
        <Route
          exact
          path={routes.orders}
          render={() => (
            <MainLayout provider={HomeOrderProvider} component={Orders} />
          )}
        />
      </Switch>
    </Router>
  )
}

export const routes = {
  root: '/',

  orders: '/orders',
}

export default Routes
