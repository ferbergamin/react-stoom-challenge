import StepperProvider from 'providers/StepperProvider'
import RecommendationProvider from 'providers/RecommendationProvider'
import OrderProvider from 'providers/OrderProvider'

const HomeOrderProvider = ({ children }) => {
  return (
    <StepperProvider>
      <RecommendationProvider>
        <OrderProvider>{children}</OrderProvider>
      </RecommendationProvider>
    </StepperProvider>
  )
}
export default HomeOrderProvider
