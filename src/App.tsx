import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Navbar from './components/Navbar';
import {useSelector} from 'react-redux'
import { RootState } from './store';


const App = () => {

  const {darkMode} = useSelector((state: RootState)=> state.ui)
  return (

    <div className={darkMode?"dark":''}>
        <div className="app">
          <Navbar title='Store'/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Favorite/>}/>
          </Routes>
        </div>

    </div>
  )
}

export default App