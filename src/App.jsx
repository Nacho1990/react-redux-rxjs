import './App.css'
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Home from './pages/Home/Home'

// Todo continue redux

function App() {

  return (
    <div className="App">
      <h2>Estado con RxJs</h2>
      <Component1/>
      <Component2/>
      <h2>Estado con Context</h2>
      <Home/>
    </div>
  )
}

export default App
