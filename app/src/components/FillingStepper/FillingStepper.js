import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import { CheckboxFormGroup } from 'components/'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import fakeApi from 'services/fakeApi.js'

const FillingStepper = ({ control, register }) => {
  const [fillings, setFillings] = useState([])
  useEffect(() => {
    const loadFillings = () => {
      setFillings(fakeApi.get('PizzaFillings'))
    }
    loadFillings()
  }, [])

  const style = useTheme(styles)

  return (
    <Container style={style.container} fluid="xl">
      <h4>Escolha o recheio</h4>
      <div key={`default-radio`} className="mb-3">
        <CheckboxFormGroup
          items={fillings}
          control={control}
          register={register}
          name="pizzaFillingId"
        />
      </div>
    </Container>
  )
}

export default FillingStepper
