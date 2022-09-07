import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import { HomeProvider } from './context/home.context'

const Home = () => {
  return (
    <HomeProvider>
      <ComponentContext1/>
      <ComponentContext2/>
    </HomeProvider>
  )
}

export default Home