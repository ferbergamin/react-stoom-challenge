import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { LoadingComponent, Stepper } from 'components'
import { Form } from './Form'

import useStepper from 'hooks/useStepper'
import useOrder from 'hooks/useOrderProvider'
import useRecommendation from 'hooks/useRecommendations'
import useTheme from 'hooks/useTheme'

import styles from './styles'

const Home = () => {
  const style = useTheme(styles)
  const [loading, setLoading] = useState(false)
  const { activeStep } = useStepper()
  const {
    data: recommendations,
    loadData: loadRecommendations,
  } = useRecommendation()
  const { data, loadData } = useOrder()

  useEffect(() => {
    if (!data || !recommendations) {
      setLoading(true)
      loadData(() => {
        loadRecommendations()
      })
    } else {
      if (loading) {
        setLoading(false)
      }
    }
    //eslint-disable-next-line
  }, [activeStep, data, loading, recommendations])

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
