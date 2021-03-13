import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import useTheme from 'hooks/useTheme'
import styles from './styles'

import fakeApi from 'services/fakeApi'

import { CheckboxFormGroup } from 'components/'
import { Controller } from 'react-hook-form'

const SizeStepper = ({ control, register, pizzaDoughId, defaultValue }) => {
  const [sizes, setSizes] = useState([])
  useEffect(() => {
    const loadSizes = () => {
      setSizes(fakeApi.get('PizzaSizes'))
    }
    loadSizes()
  }, [])

  const style = useTheme(styles)

  return (
    <Container style={style.container} fluid="xl">
      <h4>Escolha o tamanho</h4>
      <div key={`default-radio`} className="mb-3">
        <CheckboxFormGroup
          items={sizes}
          control={control}
          register={register}
          defaultValue={defaultValue}
          name="pizzaSizeId"
        />
      </div>
      <Controller
        as={<input type="hidden" value={pizzaDoughId} ref={register} />}
        control={control}
        name="pizzaDoughId"
      />
    </Container>
  )
}

export default SizeStepper
