import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import Header from './Componnets/Header/Header'

import Navbar from './Componnets/NAvbar/Navbar'
import Home from './Componnets/Home/Home'
import About from './Componnets/About/About'
import Services from './Componnets/Services/Services'
import Sskill from './Componnets/Sskill/Sskill'
import Projects from './Componnets/Projects/Projects'
import Contact from './Componnets/Contact/Contact'
import Footer from './Componnets/Footer/Footer'
import Layout from './Componnets/Layout/Layout'
import Grid from './Componnets/Grid/Grid'



function App() {
  const [count, setCount] = useState(0)

  return (
    
 <>
 <BrowserRouter>
 <Navbar/>
 <Routes>

<Route>

  <Route path='' element={<Header/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/Projects' element={<Projects/>}/>
  <Route path='/Sskill' element={<Sskill/>}/>
  <Route path='/Contact' element={<Contact/>}/>
 
</Route>

 </Routes>


 </BrowserRouter>
 
 </>
    
  )
}

export default App
