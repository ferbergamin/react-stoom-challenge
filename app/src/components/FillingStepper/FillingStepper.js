import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Controller } from 'react-hook-form'
import { CheckboxFormGroup } from 'components/'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import fakeApi from 'services/fakeApi.js'

const FillingStepper = ({
  control,
  pizzaDoughId,
  pizzaSizeId,
  defaultValue,
}) => {
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
          itemsData={fillings}
          control={control}
          defaultValue={defaultValue}
          name="pizzaFillingId"
        />
      </div>
      <Controller
        as={<input type="hidden" value={pizzaDoughId} />}
        control={control}
        name="pizzaDoughId"
      />
      <Controller
        as={<input type="hidden" value={pizzaSizeId} />}
        control={control}
        name="pizzaSizeId"
      />
    </Container>
  )
}

export default FillingStepper
