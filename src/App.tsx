import './styles/app.scss'
import { Navbar } from "./components/Navbar/Navbar"
import { Header } from "./components/Header/Header"
import About from './components/About/About'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
    </div>
  )
}

export default App
