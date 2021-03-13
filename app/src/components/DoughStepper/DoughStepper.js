import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CheckboxFormGroup } from 'components'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import fakeApi from 'services/fakeApi.js'

const DoughStepper = ({ control, defaultValue }) => {
  const [doughs, setDoughs] = useState([])
  useEffect(() => {
    const loadDoughs = () => {
      setDoughs(fakeApi.get('PizzaDoughs'))
    }
    loadDoughs()
  }, [])

  const style = useTheme(styles)

  return (
    <Container style={style.container} fluid="xl">
      <h4>Escolha a massa</h4>
      <div key={`default-radio`} className="mb-3">
        <CheckboxFormGroup
          itemsData={doughs}
          control={control}
          name="pizzaDoughId"
          defaultValue={defaultValue}
        />
      </div>
    </Container>
  )
}

export default DoughStepper
