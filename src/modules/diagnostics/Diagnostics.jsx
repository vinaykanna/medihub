import React from 'react'
import Packages from './Packages/Packages'
import Labtests from './Labtests/Labtests'
import Footer from "@components/Footer";
import Header from "@components/Header";

function Diagnostics() {
  return (
    <div className="">
     <Header className='bg-[#fbe9df]' isCart={true} />
     <Packages/>
     <Labtests/>
     <Footer />
    </div>
  )
}

export default Diagnostics