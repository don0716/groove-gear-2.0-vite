import { Outlet } from 'react-router-dom' //Takes the children from main.js
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
function AppLayout() {
  return (
     <div>
      <Navbar />
      <main className='container'>
        <Outlet /> 
      </main>
      <Footer />
     </div>
        
  )
}

export default AppLayout
