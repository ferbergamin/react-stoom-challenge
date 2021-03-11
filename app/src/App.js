import { MainLayout } from 'layouts'
const DefaultComponent = () => (
  <div
    style={{
      height: '100%',
    }}
  ></div>
)

function App() {
  return <MainLayout provider={DefaultComponent} component={() => <></>} />
}

export default App
