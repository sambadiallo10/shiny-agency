import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Home/survey'
import Header from './components/header'
import ClientForm from './components/clientForm'
import FreelanceForm from './components/freelanceForm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}>
          <Route path="client" element={<ClientForm/>}/>
          <Route path="freelance" element={<FreelanceForm/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)