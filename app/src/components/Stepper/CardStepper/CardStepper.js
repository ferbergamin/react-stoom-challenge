import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { CheckSquare, MinusSquare, XSquare } from 'react-feather'

const CardStepper = ({ children, style, active, concluded, ...rest }) => {
  useEffect(() => {
    const loadCard = () => {
      if (active) {
        setIcon(MinusSquare)
        setStyle(style.cardActive)
        return
      }
      if (concluded) {
        setIcon(CheckSquare)
        setStyle(style.cardConcluded)
        return
      }
      setIcon(XSquare)
      setStyle(style.card)
    }

    loadCard()
    //eslint-disable-next-line
  }, [active, concluded])

  const [Icon, setIcon] = useState(XSquare)
  const [cardStyle, setStyle] = useState(style.card)

  return (
    <Col md={4} sm={12}>
      <Card
        text={active || concluded ? 'light' : 'dark'}
        style={cardStyle}
        size={25}
        {...rest}
      >
        <Card.Title>
          <Icon />
        </Card.Title>
        <Card.Body>{children}</Card.Body>
      </Card>
    </Col>
  )
}

export default CardStepper
