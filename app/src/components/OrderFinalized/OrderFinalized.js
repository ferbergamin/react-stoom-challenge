import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import useOrder from 'hooks/useOrderProvider'
import useTheme from 'hooks/useTheme'
import styles from './styles'

const OrderFinalized = () => {
  const { data } = useOrder()
  const style = useTheme(styles)

  return (
    <Card style={style.card} text="light" size={25}>
      <Card.Title>Sua pizza foi encaminhada para a nossa cozinha</Card.Title>
      <Card.Body>
        <Row>
          <Col>Massa:</Col>
          <Col>{data?.PizzaDough?.name || '-'}</Col>
        </Row>
        <Row>
          <Col>Tamanho:</Col>
          <Col>{data?.PizzaSize?.name || '-'}</Col>
        </Row>
        <Row>
          <Col>Recheio:</Col>
          <Col>{data?.PizzaFilling?.name || '-'}</Col>
        </Row>
        <Row>
          <Col>Preço:</Col>
          <Col>R$ {data?.ammount?.toFixed(2) || '-'}</Col>
        </Row>

        <Row>
          <Col>Pontos de desconto:</Col>
          <Col>{data?.points}%</Col>
        </Row>
        <Row>
          <Col>Total:</Col>
          <Col>
            R${' '}
            {(data?.ammount - (data?.ammount * data?.points) / 100).toFixed(2)}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default OrderFinalized
