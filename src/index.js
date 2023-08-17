import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/survey'
import Header from './components/header'
import ClientForm from './components/clientForm'
import FreelanceForm from './components/freelanceForm'
import Error from './components/error/index'
import Results from './pages/results'
import Freelances from './pages/freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-seif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey/:questionNumber" element={<Survey/>}>
          <Route path="client" element={<ClientForm/>}/>
          <Route path="freelance" element={<FreelanceForm/>}/>
        </Route>
        <Route path="*" element={<Error />}/>
        <Route path="/results" element={<Results />}/>
        <Route path='/freelances' element={<Freelances />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)