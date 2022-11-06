import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import QuemSou from './pages/QuemSou'

function App() {

  return (
    <div className="App">
    
      <Router>
        <Navbar/>
        <Routes>
    
          <Route path="/" element={           
              <Home/>
            }
          />
          <Route path="/quem" element={
            <QuemSou/>
          }
          />
 
        </Routes>
      </Router>


    </div>
  )
}

// apenas exports aqui
export default App;
