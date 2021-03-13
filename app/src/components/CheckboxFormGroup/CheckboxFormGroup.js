import React, { useEffect, useState } from 'react'
import {
  Col,
  FormCheck,
  FormControl,
  FormGroup,
  InputGroup,
  Dropdown,
} from 'react-bootstrap'
import { Controller } from 'react-hook-form'

import { Search } from 'react-feather'

import useTheme from 'hooks/useTheme'
import styles from './styles.js'

const CheckboxFormGroup = ({ itemsData, control, name, defaultValue }) => {
  const style = useTheme(styles)

  const [items, setItems] = useState(itemsData)
  const [filter, setfilter] = useState('')

  useEffect(() => {
    if (filter !== '') {
      setItems(
        itemsData.filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()),
        ),
      )
    } else {
      setItems(itemsData)
    }
    //eslint-disable-next-line
  }, [filter, itemsData])

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          size="sm"
          id="search"
          placeholder="Procurar..."
          onChange={(e) => setfilter(e.target.value)}
        />
        <InputGroup.Prepend>
          <InputGroup.Text>
            <Search size={15} />
          </InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
      <Controller
        as={
          <FormGroup style={style.formGroup} controlId={name}>
            {items.map((item) => (
              <div key={item.id}>
                <div style={style.check}>
                  <Col sm="11" xs="10">
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
                  </Col>
                  <Col sm="1" xs="2">
                    R$<em>{item.price.toFixed(2)}</em>
                  </Col>
                </div>
                <hr className="divider bg-white"></hr>
              </div>
            ))}
          </FormGroup>
        }
        control={control}
        name={name}
      />
    </div>
  )
}

export default CheckboxFormGroup
