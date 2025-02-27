import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Homepage from './pages/Homepage'


function App() {
  return (
    <>
      <Header/>
      <hr />
      <ContactForm/>
    </>
  )
}

export default App
