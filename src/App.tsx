import './styles/app.scss'
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default App
