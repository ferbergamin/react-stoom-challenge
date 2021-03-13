import React from 'react'

import { Footer, Header, LoadingComponent } from 'components'

import useBackend from 'hooks/useBackend'

import useTheme from 'hooks/useTheme'
import styles from './styles'

const MainLayout = ({ component, provider }) => {
  const style = useTheme(styles)
  const { backendLoaded } = useBackend()
  const Component = component
  const Provider = provider

  return (
    <div style={style.layout}>
      <Provider>
        <Header />
        <LoadingComponent loading={!backendLoaded}>
          <Component />
        </LoadingComponent>
        <Footer />
      </Provider>
    </div>
  )
}

export default MainLayout
