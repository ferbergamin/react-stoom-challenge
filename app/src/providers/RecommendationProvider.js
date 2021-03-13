import React, { useState } from 'react'

import RecommendationContext from 'contexts/RecommendationContext'

import fakeApi from 'services/fakeApi'
import useBackend from 'hooks/useBackend'
import { pizzas } from 'helpers'
import { generateId } from 'services/methods'

const RecommendationProvider = ({ children }) => {
  const [data, setData] = useState()
  const [recommendationChecked, setRecommendationChecked] = useState(false)
  const { dispatchBackend } = useBackend()

  const loadData = () => {
    dispatchBackend({
      type: 'POST',
      tableName: 'RecommendedDayPizzas',
      payload: pizzas.generateRandomPizza(),
    })
    const recommendationData = fakeApi.get('RecommendedDayPizzas')
    const recommendation = fakeApi.find(
      recommendationData,
      generateId(recommendationData) - 1,
    )
    setData(recommendation)
  }

  const handleRecommendation = (data) => {
    delete data.id
    dispatchBackend({
      type: 'POST',
      tableName: 'Orders',
      payload: { ...data, finalized: true },
    })
    return fakeApi.find(
      fakeApi.get('Orders'),
      generateId(fakeApi.get('Orders')) - 1,
    )
  }

  return (
    <RecommendationContext.Provider
      value={{
        data,
        setData,
        loadData,
        handleRecommendation,
        recommendationChecked,
        setRecommendationChecked,
      }}
    >
      {children}
    </RecommendationContext.Provider>
  )
}

export default RecommendationProvider
