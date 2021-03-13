import React, { useEffect, useState } from 'react'
import {
  Col,
  FormCheck,
  FormControl,
  FormGroup,
  InputGroup,
  Row,
} from 'react-bootstrap'
import { Controller } from 'react-hook-form'

import { Search } from 'react-feather'

import useRecommendation from 'hooks/useRecommendations.js'
import useTheme from 'hooks/useTheme'
import styles from './styles.js'
import { pizzas } from 'helpers'

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
                  <Col lg="11" xs="9">
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
                  <Col lg="1" xs="3">
                    <em>{pizzas.formatPrice(item?.price)}</em>
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
                  <Col lg="10" xs="9">
                    <FormCheck
                      type="checkbox"
                      name="recommendedDayPizzaId"
                      label="Recommendação do dia"
                      value={!recommendationChecked}
                      checked={recommendationChecked}
                      onChange={handleRecommendationChange}
                    />
                    <p>
                      <em>{pizzas.generateDescription(recommendation)}</em>
                    </p>
                  </Col>
                  <Col lg="2" xs="3" style={style.colRecommendationPrice}>
                    <Row>
                      <span>
                        <s>{pizzas.formatPrice(recommendation?.ammount)}</s> por
                        {pizzas.formatPrice(
                          recommendation?.ammount,
                          recommendation?.points,
                        )}
                      </span>
                    </Row>
                    <Row>
                      <span>
                        <em>{recommendation.points.toFixed(0)}% de desconto</em>
                      </span>
                    </Row>
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
