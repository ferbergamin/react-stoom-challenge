import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import fakeApi from 'services/fakeApi.js'
import { CheckboxFormGroup } from 'components/'

const SizeStepper = ({ control, register }) => {
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
      <h4>Escolha a massa</h4>
      <div key={`default-radio`} className="mb-3">
        <CheckboxFormGroup
          items={sizes}
          control={control}
          register={register}
          name="pizzaSizeId"
        />
      </div>
    </Container>
  )
}

export default SizeStepper
