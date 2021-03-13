import React from 'react'
import { FormCheck, FormGroup } from 'react-bootstrap'

import { Controller } from 'react-hook-form'

import useTheme from 'hooks/useTheme'
import styles from './styles.js'

const CheckboxFormGroup = ({ items, control, name, defaultValue }) => {
  const style = useTheme(styles)

  return (
    <Controller
      as={
        <FormGroup style={style.formGroup} controlId={name}>
          {items.map((item) => (
            <div style={style.check} key={item.id}>
              <FormCheck
                type="radio"
                name={name}
                label={item.name}
                value={item.id}
                defaultChecked={defaultValue === item.id}
              />
              <p>
                <em>{item.description}</em>
              </p>
            </div>
          ))}
        </FormGroup>
      }
      control={control}
      name={name}
    />
  )
}

export default CheckboxFormGroup
