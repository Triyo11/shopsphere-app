// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import Header from '../components/macro/Header'
import Footer from '../components/macro/Footer'
import DescriptionPayment from '../components/macro/DescriptionPayment';

export default function Payment() {
  return (
    <div >
        <Header/>
        <div className='min-h-screen items-center flex flex-wrap justify-center bg-color-light text-color-secondary'>

            <div className='flex w-full justify-around max-sm:mb-2 md:mb-0 '>
                <div className='max-sm:mt-2'>
                <Link to='/' type='button' className=' border-color-primary border-2 text-color-light text-md rounded-2xl my-2 px-2 py-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm hover:border-color-secondary  hover:text-color-light'>
                    <IoArrowBackCircle className='text-4xl fill-color-primary hover:fill-color-secondary max-sm:text-2xl'/>
                </Link>
                </div>
                
              
                <h1 className='text-4xl justify-center text-center max-sm:text-2xl max-sm:mt-3'>Payment</h1>

                <div>

                </div>

            </div>
            
        <DescriptionPayment/>
       
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}
