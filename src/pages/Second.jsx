import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ThirdNav from '../components/Secondpg/ThirdNav'
import Sidebar from '../components/Secondpg/Sidebar'
import Card from '../components/Secondpg/Card'
import Main2 from '../components/Secondpg/Main2'
import Footerlast from '../components/Secondpg/Footerlast'
import Form2 from '../components/Form2'
import Footer from '../components/Footer'
const Second = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <hr style={{ color: 'black' }} />
            <Navbar />
            <hr style={{ color: 'black' }} />
            <div className='ml-9 mr-9 '>
                <ThirdNav />
                <hr style={{ color: 'black' }} />
                <div className='flex'>
                    <Sidebar/>
                   <div className="flex flex-col">
                     <Card/>
                     <Main2/>
                   </div>
                </div>
                <Footerlast/>
                <Form2/>
                <Footer/>
            </div>
        </div>
    )
}

export default Second