import React from 'react'
import Header from '../components/Fifthpg/Header'
import Main5 from '../components/Fifthpg/Main'
import Section from '../components/Fifthpg/Section'
import Section2 from '../components/Fifthpg/Section2'
import Footerblue from '../components/Fourthpg/FooterBlue'
import Footer from '../components/Footer'
const Fifth = () => {
    return (
        <div>
            <div className='m-3'>
                <Header />
                <h1 className='text-black font-medium text-xl'>My Cart</h1>
                <Main5 />
                <Section/>
                <Section2/>
                <Footerblue/>
                <Footer/>
            </div>
        </div>
    )
}

export default Fifth
