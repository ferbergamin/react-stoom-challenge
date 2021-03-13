import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { CheckSquare, MinusSquare, XSquare } from 'react-feather'

import useStepper from 'hooks/useStepper'

const CardStepper = ({ children, style, active, concluded, step, ...rest }) => {
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

  const { setToStep, activeStep } = useStepper()
  const [Icon, setIcon] = useState(XSquare)
  const [cardStyle, setStyle] = useState(style.card)

  const handleGoToStep = () => {
    if ((active || concluded) && activeStep < 4) {
      setToStep(step)
    }
  }

  return (
    <Col
      md={4}
      sm={12}
      onClick={handleGoToStep}
      style={{
        cursor: (active || concluded) && activeStep < 4 ? 'pointer' : 'auto',
      }}
    >
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
