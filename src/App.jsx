import { ToastContainer } from "react-toastify"
import About from "./components/About"
import BookingCTA from "./components/BookingCTA"
// import BookingForm from "./components/BookingForm"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
 
  return (
    <>
    <Navbar/>
      <main>
        <section id="home"><Hero/></section>
        <section id="about"><About/></section>
        <section id="services"><Services/></section>
        <section id="gallery"><Gallery/></section>
        <section ><BookingCTA/></section>
        {/* <BookingForm/> */}
        <ToastContainer/>
        
        <section id="contact"><Contact/></section>
        <section id="footer"><Footer/></section>

      </main>
    </>
  )
}

export default App
