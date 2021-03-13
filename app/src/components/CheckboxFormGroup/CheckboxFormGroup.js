import React, { useEffect, useState } from 'react'
import {
  Col,
  FormCheck,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap'
import { Controller } from 'react-hook-form'

import { Search } from 'react-feather'

import useRecommendation from 'hooks/useRecommendations.js'
import useTheme from 'hooks/useTheme'
import styles from './styles.js'

const CheckboxFormGroup = ({ itemsData, control, name, defaultValue }) => {
  const style = useTheme(styles)

  const [items, setItems] = useState(itemsData)
  const {
    data: recommendation,
    recommendationChecked,
    setRecommendationChecked,
  } = useRecommendation()
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

  const handleRecommendationChange = () => {
    setRecommendationChecked(!recommendationChecked)
  }

  const inactivateRecommendation = () => {
    setRecommendationChecked(false)
  }

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
                  <Col lg="11" xs="10">
                    <FormCheck
                      type="radio"
                      name={name}
                      label={item.name}
                      value={item.id}
                      defaultChecked={defaultValue === item.id}
                      onChange={inactivateRecommendation}
                    />
                    <p>
                      <em>{item.description}</em>
                    </p>
                  </Col>
                  <Col lg="1" xs="2">
                    R$<em>{item.price.toFixed(2)}</em>
                  </Col>
                </div>
                <hr className="divider bg-white"></hr>
              </div>
            ))}
          </FormGroup>
        }
        defaultValue={defaultValue}
        control={control}
        name={name}
      />

      {recommendation && (
        <Controller
          as={
            <FormGroup controlId="recommendedDayPizzaId">
              <div style={style.recommendation}>
                <div style={style.check}>
                  <Col lg="11" xs="10">
                    <FormCheck
                      type="checkbox"
                      name="recommendedDayPizzaId"
                      label="Recommendação do dia"
                      value={!recommendationChecked}
                      checked={recommendationChecked}
                      onChange={handleRecommendationChange}
                    />
                    <p>
                      <em>
                        Uma pizza {recommendation.PizzaSize.name} bem
                        caprichada, com a deliciosa massa{' '}
                        {recommendation.PizzaDough.name} e recheada com{' '}
                        {recommendation.PizzaFilling.name}
                      </em>
                    </p>
                  </Col>
                  <Col lg="1" xs="2">
                    Cupom de <em>{recommendation.points.toFixed(0)}</em>%
                  </Col>
                </div>
                <hr className="divider bg-white"></hr>
              </div>
            </FormGroup>
          }
          control={control}
          name="recommendedDayPizzaId"
        />
      )}
    </div>
  )
}

export default CheckboxFormGroup
