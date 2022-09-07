import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import ComponentRedux2 from './components/ComponentRedux2'
import { HomeProvider } from './context/home.context'

const Home = () => {
  return (
    <HomeProvider>
      <ComponentContext1/>
      <ComponentContext2/>
      <h3>State de Redux</h3>
      <ComponentRedux2/>
    </HomeProvider>
  )
}

export default Home