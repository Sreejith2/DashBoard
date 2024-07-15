import React from 'react'
import NavBar from "../components/NavBar"
import Footer from '../components/Footer'
import DashBoard from './DashBoard'

function Home() {
  return (
    <div className='flex justify-between flex-col min-h-screen'>
      <NavBar/>
      <DashBoard/>
      <Footer/>
    </div>
  )
}

export default Home