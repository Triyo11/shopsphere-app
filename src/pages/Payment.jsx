// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import Header from '../components/macro/Header'
import Footer from '../components/macro/Footer'

export default function Payment() {
  return (
    <div >
        <Header/>
        <div className='min-h-screen items-center flex flex-wrap justify-center bg-color-light text-color-secondary'>

            <div className='flex w-11/12 justify-around'>
                <div className=''>
                <Link to='/' type='button' className=' border-color-primary border-2 text-color-light text-md rounded-2xl my-2 px-2 py-2 hover:border-color-secondary  hover:text-color-light'>
                    <IoArrowBackCircle className='text-4xl fill-color-primary hover:fill-color-secondary'/>
                </Link>
                </div>
                
              
                <h1 className='text-4xl justify-center text-center'>Payment</h1>

                <div>

                </div>

            </div>

        <div className='w-10/12 px-14 py-8 glass flex justify-between gap-1 mx-24 mb-24'>

            <div className='w-11/12 my-3 ml-14 mr-4'>
                <form action="" className='inline-block py-4'>
                    <div className='py-3'>
                    <label htmlFor="" className='text-2xl py-3'>Province</label>
                    <select id="" className='block w-80 h-12 bg-color-accent1 px-4  outline-none'>
                        <option  disabled  selected> Choose province</option>
                        <option value="">Jawa Barat</option>
                        <option value="">Jawa Tengah</option>
                        <option value="">Jawa Timur</option>
                        <option value="">Banda Aceh</option>
                        <option value="">Kalimantan</option>
                        <option value="">Papua</option>
                    </select>
                    </div>
                    
                    <div className='py-3'>
                    <label htmlFor="" className='text-2xl py-3'>City</label>
                    <select className='block w-80 h-12 bg-color-accent1 px-4  outline-none' id="">
                        <option disabled selected>Choose City</option>
                        <option value="">Jakarta</option>
                        <option value="">Bandung</option>
                        <option value="">Bekasi</option>
                        <option value="">Karawang</option>
                        <option value="">Surabaya</option>
                        <option value="">Jogjakarta</option>
                    </select>
                    </div>
                    
                    <div className='py-3'>
                    <label htmlFor="" className='text-2xl mb-3'>Ekspedisi</label>
                    <select className='block w-80 h-12 bg-color-accent1 px-4  outline-none' id="">
                        <option selected disabled>Choose Expedisi</option>
                        <option value="">JNE</option>
                        <option value="">JNT</option>
                        <option value="">Tiki</option>
                        <option value="">Pos</option>
                    </select>
                    </div>
                   
                </form>
            </div>

            <div className='w-11/12 my-14 flex justify-between mx-8'>
                <div className='text-2xl '>
                    <p className='text-center text-sm mb-5'>Description</p>
                    <div className='w-10/15 flex justify-between gap-24  mb-5'>
                        <div>Sub Total:</div>
                        <div className='px-20'> $ 45000</div>
                    </div>
                    <div className='w-10/15 flex justify-between gap-24  mb-3'>
                        <div>Shipping Cost:</div>
                        <div className='px-20'>$ 45000</div>
                    </div>
                    <div className='border-b-color-secondary border-b-4 mb-3'></div>
                    <div className='w-10/15 flex justify-between gap-24 '>
                        <div className='text-3xl'>Total:</div>
                        <div className='px-20'>$ 90000</div>
                    </div>
                    
                    <div className='flex justify-center mt-3'>
                    <button className='bg-color-primary text-color-light px-4 py-3 mt-5 text-sm hover:bg-color-secondary hover:text-color-light rounded'>Process Payment</button>

                    </div>
                  
                    
                    
                </div>

                
            </div>

        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  )
}
