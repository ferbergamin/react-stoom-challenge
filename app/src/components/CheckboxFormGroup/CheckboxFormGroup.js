import React from 'react'
import { FormCheck, FormGroup } from 'react-bootstrap'

import useTheme from 'hooks/useTheme'

import styles from './styles.js'
import { Controller } from 'react-hook-form'

const CheckboxFormGroup = ({
  items,
  control,
  register,
  name,
  defaultValue,
}) => {
  const style = useTheme(styles)

  return (
    <Controller
      as={
        <FormGroup style={style.formGroup} controlId={name} ref={register}>
          {items.map((item) => (
            <div style={style.check} key={item.id}>
              <FormCheck
                type="radio"
                name={name}
                label={item.name}
                value={item.id}
              />
              <p>
                <em>{item.description}</em>
              </p>
            </div>
          ))}
        </FormGroup>
      }
      defaultValue={defaultValue}
      control={control}
      name={name}
    />
  )
}

export default CheckboxFormGroup
