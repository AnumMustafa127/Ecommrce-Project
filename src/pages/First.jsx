import React from 'react'
import '../index.css'
import '../App.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Form from '../components/Form'
import Section from '../components/Section'
import Section2 from '../components/Section2'
import Nav2 from '../components/Nav2'
import Form2 from '../components/Form2'
import Footer from '../components/Footer'
import { Navigate, useNavigate } from 'react-router-dom'
export const First = () => {
  const navigate = useNavigate()
  return (
  <div className='flex flex-col min-h-screen'>
        <Header />
        <hr style={{ color: 'black' }} />
        <Navbar />
        <hr style={{ color: 'black' }} />
        <Main />
        <hr style={{ color: 'black' }} />
        <Form />
        <hr style={{ color: 'black' }} />
        <h1 className='m-3 text-2xl font-bold text-wrap cursor-pointer' onClick={()=>{navigate('/Fourth')}} >Recommended Items</h1>
        <Section />
        <hr style={{ color: 'black' }} />
        <h1 className='m-3 text-2xl font-bold text-wrap'>Our Extra Services</h1>
        <Section2 />
        <hr style={{ color: 'black' }} />
        <h1 className='m-3 text-2xl font-bold text-wrap'>Supplier by region</h1>
        <Nav2/>
        <hr style={{ color: 'black' }} />
        <Form2/>
        <Footer/>


      </div>
  )
}
export default First; 