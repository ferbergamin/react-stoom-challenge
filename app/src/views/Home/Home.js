import React, { useEffect, useState } from 'react'

import { Container } from 'react-bootstrap'

import { LoadingComponent, Stepper } from 'components'
import { Form } from './Form'

import useStepper from 'hooks/useStepper'
import useTheme from 'hooks/useTheme'
import useOrder from 'hooks/useOrderProvider'
import useRecommendation from 'hooks/useRecommendations'

import styles from './styles'

const Home = () => {
  const style = useTheme(styles)
  const [loading, setLoading] = useState(false)
  const { activeStep } = useStepper()
  const { loadData: loadRecommendations } = useRecommendation()
  const { data, loadData } = useOrder()

  useEffect(() => {
    if (!data) {
      setLoading(true)
      loadData(() => {
        loadRecommendations(() => {
          setLoading(false)
        })
      })
    }
    //eslint-disable-next-line
  }, [activeStep, data, loading])

  return (
    <Container fluid="xl" style={style.container}>
      <Stepper>
        <LoadingComponent loading={loading}>
          <Form />
        </LoadingComponent>
      </Stepper>
    </Container>
  )
}

export default Home
