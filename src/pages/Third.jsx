import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ThirdNav from '../components/Secondpg/ThirdNav'
import Sidebar from '../components/Secondpg/Sidebar'
import Card from '../components/Secondpg/Card'
import Main3 from '../components/Thirdpg/Main3'
import Card2 from '../components/Thirdpg/card2'
import Form2 from '../components/Form2'
import Footer from '../components/Footer'
const Third = () => {
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
                     <Card2/>
                     <Main3/>
                   </div>
                </div>
              
                <Form2/>
                <Footer/>
            </div>
        </div>
    )
}

export default Third