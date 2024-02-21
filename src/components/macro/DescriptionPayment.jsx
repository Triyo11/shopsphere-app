// eslint-disable-next-line no-unused-vars
import React from 'react'
import DropdownPayment from './DropdownPayment'

export default function DescriptionPayment() {
  return (
    
      <div className='w-10/12 px-14 py-5 glass flex justify-between gap-1 mx-24 mb-24  max-sm:block max-sm:pl-2 max-sm:pr-2 max-sm:mx-10 max-sm:w-11/12 max-sm:py-2 max-sm:mb-32
        md:mt-2 md:py-1 md:w-11/12 md:block md:mb-40 lg:flex 
        '>

           <DropdownPayment/>

            <div className='w-11/12 my-14 flex justify-between mx-8  max-sm:my-4 max-sm:w-full max-sm:py-2 max-sm:mx-1 md:w-full  lg:w-full '>
                <div className='text-2xl max-sm:text-sm w-full md:w-full md:text-2xl lg:w-full'>
                    <p className='text-center text-sm mb-5'>Description</p>
                    <div className='w-10/15 flex justify-between gap-24  mb-5 max-sm:gap-2 max-sm:w-full md:w-full lg:w-full'>
                        <div>Sub Total:</div>
                        <div className='px-20 max-sm:px-5 lg:px-3'> $ 45000</div>
                    </div>
                    <div className='w-10/15 flex justify-between gap-24  mb-3 max-sm:gap-2 max-sm:w-full md:w-full lg:w-full'>
                        <div>Shipping Cost:</div>
                        <div className='px-20 max-sm:px-5 lg:px-3'>$ 45000</div>
                    </div>
                    <div className='border-b-color-secondary border-b-4 mb-3 max-sm:gap-2 max-sm:w-full md:w-full'></div>
                    <div className='w-10/15 flex justify-between gap-24 '>
                        <div className='text-3xl max-sm:text-2xl'>Total:</div>
                        <div className='px-20 max-sm:px-5 lg:px-3'>$ 90000</div>
                    </div>
                    
                    <div className='flex justify-center mt-3'>
                    <button className='bg-color-primary text-color-light px-4 py-3 mt-5 text-sm hover:bg-color-secondary hover:text-color-light rounded'>Process Payment</button>

                    </div>
                  
                    
                    
                </div>

                
            </div>

        </div>
    
  )
}
