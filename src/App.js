import React from 'react'
import { Card, Footer } from './containers'
import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='container' role="main">
            <Card /> 
        </div>
        <Footer />
    </div>
  )
}

export default App