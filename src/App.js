import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import QuemSou from './pages/QuemSou'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
    
      <Router basename="/portfolio">     
        <Navbar/>
        <Routes>
    
          <Route exact path="/" element={           
            <Home/>
          }/>
         
          <Route exact path="/quem" element={
            <QuemSou/>
          }/>

          <Route exact path="/projetos" element={
            <Projetos/>
          }/>

          <Route exact path="/contato" element={
            <Contato/>
          }/>
           
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}


