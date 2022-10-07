import { CounterHook } from './bases/CounterHook'
import { CounterReducerComponent } from './counterModule/CounterReducerComponent'

function App() {

  return (
    <>
      <h1>React</h1>
      <hr />
      <CounterHook />
      <CounterReducerComponent />
    </>
  )
}

export default App
