import './styles/app.scss'
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </>
  )
}

export default App
