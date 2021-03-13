import React, { useEffect, useState } from 'react'
import { Container, FormCheck, FormGroup } from 'react-bootstrap'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import { Controller } from 'react-hook-form'
import fakeApi from 'services/fakeApi.js'

const DoughStepper = ({ control, register }) => {
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
        <Controller
          as={
            <FormGroup
              style={style.formGroup}
              controlId="pizzaDoughId"
              ref={register}
            >
              {doughs.map((dough) => (
                <div style={style.check} key={dough.id}>
                  <FormCheck
                    type="radio"
                    name="pizzaDoughId"
                    label={dough.name}
                    value={dough.id}
                  />
                  <p>
                    <em>{dough.description}</em>
                  </p>
                </div>
              ))}
            </FormGroup>
          }
          control={control}
          name="pizzaDoughId"
        />
      </div>
    </Container>
  )
}

export default DoughStepper
