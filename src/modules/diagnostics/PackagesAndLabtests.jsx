import React from 'react'
import Packages from './Packages/Packages'
import Labtests from './Labtests/Labtests'
import Footer from "@components/Footer";
import Header from "@components/Header";

function PackagesAndLabtests() {
  return (
    <div className="">
     <Header className='bg-[#fbe9df]'/>
     <Packages/>
     <Labtests/>
     <Footer />
    </div>
  )
}

export default PackagesAndLabtests