// eslint-disable-next-line no-unused-vars
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/animation.json'
import Shop from '../assets/shop.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center  text-color-secondary bg-color-accent1'>
      
      
      <div className='text-center space-y-4'>
      <Lottie animationData={animationData} className='h-40'/>
        <div className='w-full px-14 py-2 glass flex flex-wrap gap-3 mx-3 sm:gap-0 md:gap-3 lg:gap-3 '>

            <div className='  max-sm:w-5/6 md:w-3/6  lg:6/10 '>
                <img src={Shop} alt=""  className='md:object-contain sm:object-scale-down sm:w-1/2 md:w-fit  lg:w-fit' />
            </div>
          
            <div className='my-14   max-sm:my-4 max-sm:w-11/12 max-sm:py-2 md:w-3/11 md:px-6 lg:6/15 '>
                <h1 className='text-8xl bold my-5 max-sm:text-4xl max-sm:my-0 md:text-6xl  lg:text-8xl '>404</h1>
                <h3 className='text-2xl py-4 max-sm:text-sm md:text-2xl  lg:text-2xl'>Ooppss! Page Not Found</h3>

                
                <Link to='/' type='button' className='bg-color-secondary text-color-light text-md rounded-md my-5 px-4 py-3 hover:bg-color-primary  hover:text-color-light'>
                    Back To Home
                </Link>
               
            </div>
           
        </div>
      </div>
    </div>
  )
}
