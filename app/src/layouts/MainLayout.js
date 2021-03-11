import React from 'react'
import { Footer, Header } from 'components'

import useTheme from 'hooks/useTheme'
import styles from './styles'

const MainLayout = ({ component, provider }) => {
  const style = useTheme(styles)
  const Component = component
  const Provider = provider

  return (
    <div style={style.layout}>
      <Header />
      <Provider>
        <Component />
      </Provider>
      <Footer />
    </div>
  )
}

export default MainLayout
