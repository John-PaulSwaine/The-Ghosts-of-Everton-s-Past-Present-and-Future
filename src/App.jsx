import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import EraOne from './pages/eraOne'
import EraTwo from './pages/eraTwo'
import EraThree from './pages/eraThree'
import EraFour from './pages/eraFour'
import EraFive from './pages/eraFive'
import EraSix from './pages/eraSix'
import EraSeven from './pages/eraSeven'
import EraEight from './pages/eraEight'
import Future from './pages/future'


const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/about' className='links'>About</Link>
        <Link to='/1878-1914' className='links'>1878-1913</Link>
        <Link to='/1918-1939' className='links'>1918-1939</Link>
        <Link to='/1945-1981' className='links'>1945-1981</Link>
        <Link to='/1981-1992' className='links'>1981-1992</Link>
        <Link to='1992-2002' className='links'>1992-2002</Link>
        <Link to='2002-2013' className='links'>2002-2013</Link>
        <Link to='2013-2024' className='links'>2013-2024</Link>
        <Link to='2024-present' className='links'>2024-Present</Link>
        <Link to='future' className='links'>Future</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/1878-1914' element={<EraOne />}></Route>
        <Route path='/1918-1939' element={<EraTwo />}></Route>
        <Route path='' element={<EraThree />}></Route>
        <Route path='' element={<EraFour />}></Route>
        <Route path='' element={<EraFive />}></Route>
        <Route path='' element={<EraSix />}></Route>
        <Route path='' element={<EraSeven />}></Route>
        <Route path='' element={<EraEight />}></Route>
        <Route path='' element={<Future />}></Route>
      </Routes>
    </div>
  )
}

export default App
