import { React } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Codenation from './pages/codenation'
import PersonalProjects from './pages/personalprojects'
import Week1to6 from './pages/week1to6'
import Week7to12 from './pages/week7to12'
import GithubImg from './assets/images/githubIcon.png'

const App = () => {

  return (
    <div id='wrapper'>
      <nav className='navBar'>
        <Link to='/' className='links'>Home</Link>
        <Link to='/codenation' className='links'>Code Nation</Link>
        <Link to='/personal-projects' className='links'>Personal Projects</Link>
        <Link to='/about' className='links'>About Me</Link>
        <a href="https://github.com/John-PaulSwaine"><img src={GithubImg} class="socials" alt='github icon'/></a>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/codenation' element={<Codenation />}></Route>
        <Route path='/personal-projects' element={<PersonalProjects />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/codenation/week-1-to-6' element={<Week1to6 />}></Route>
        <Route path='/codenation/week-7-to-12' element={<Week7to12 />}></Route>
      </Routes>
    </div>
  )
}

export default App
