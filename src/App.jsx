import { Provider } from 'react-redux';
import './App.css'
import ComponentRedux1 from './components/Redux/ComponentRedux1';
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Home from './pages/Home/Home'
import MainStore from './redux/store';

// Todo continue redux

function App() {

  return (
    <div className="App">
      <Provider store={MainStore}>
        <h2>Estado con RxJs</h2>
        <Component1/>
        <Component2/>
        <h2>Estado con Context</h2>
        <Home/>
        <h2>Redux</h2>
        <ComponentRedux1/>
      </Provider>
    </div>
  )
}

export default App
