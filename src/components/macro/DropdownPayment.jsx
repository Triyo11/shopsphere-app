// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function DropdownPayment() {
  return (
    
       <div className='w-11/12 my-3 ml-14 mr-4  max-sm:my-0 max-sm:w-full max-sm:mr-0  max-sm:ml-0 max-sm:py-2 md:w-full md:mr-0 md:ml-0 '>
                <form action="" className='inline-block py-4 max-sm:w-full  md:w-full lg:w-11/12'>
                    <div className='py-3 max-sm:w-full md:w-full lg:w-full'>
                    <label htmlFor="" className='text-2xl py-3'>Province</label>
                    <select id="" className='block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full'>
                        <option  disabled  selected className=''> Choose province</option>
                        <option value="">Jawa Barat</option>
                        <option value="">Jawa Tengah</option>
                        <option value="">Jawa Timur</option>
                        <option value="">Banda Aceh</option>
                        <option value="">Kalimantan</option>
                        <option value="">Papua</option>
                    </select>
                    </div>
                    
                    <div className='py-3 max-sm:w-full md:w-full lg:w-full'>
                    <label htmlFor="" className='text-2xl py-3'>City</label>
                    <select className='block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full' id="">
                        <option disabled selected>Choose City</option>
                        <option value="">Jakarta</option>
                        <option value="">Bandung</option>
                        <option value="">Bekasi</option>
                        <option value="">Karawang</option>
                        <option value="">Surabaya</option>
                        <option value="">Jogjakarta</option>
                    </select>
                    </div>
                    
                    <div className='py-3 max-sm:w-full md:w-full'>
                    <label htmlFor="" className='text-2xl mb-3'>Ekspedisi</label>
                    <select className='block w-80 h-12 bg-color-accent1 px-2 rounded max-sm:w-full outline-none md:w-full ' id="">
                        <option selected disabled>Choose Expedisi</option>
                        <option value="">JNE</option>
                        <option value="">JNT</option>
                        <option value="">Tiki</option>
                        <option value="">Pos</option>
                    </select>
                    </div>
                   
                </form>
            </div>
    
  )
}
