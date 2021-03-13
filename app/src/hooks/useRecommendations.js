import { useContext } from 'react'

import RecommendationContext from 'contexts/RecommendationContext'

const useRecommendation = () => {
  const context = useContext(RecommendationContext)

  if (context === undefined) {
    throw new Error('useRecommendation possui contexto inválido')
  }

  const {
    data,
    setData,
    loadData,
    handleRecommendation,
    recommendationChecked,
    setRecommendationChecked,
  } = context

  return {
    data,
    setData,
    loadData,
    handleRecommendation,
    recommendationChecked,
    setRecommendationChecked,
  }
}

export default useRecommendation
