import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ServicesMaterials from './components/ServicesMaterials'
import Location from './components/Location'
import ServicesHowItWorks from './components/ServicesHowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ServicesMaterials />
        <Location />
        <ServicesHowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
