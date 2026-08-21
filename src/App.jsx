import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Cases from './components/Cases'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Cases />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
