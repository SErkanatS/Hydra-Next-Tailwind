import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <nav className=' flex items-center justify-between uppercase flex-col lg:flex-row text-xs mb-[112px]'>
        <div className=' flex items-center gap-4'>
        <Image src={'/hydralogo.svg'} width={102} height={103} alt='logo'/>
        <Image src={'/hydra-text-logo.svg'} width={76} height={46} alt='logo'/>
        </div>
        <ul className='flex items-center gap-10 flex-col lg:flex-row '>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">How to</a></li>
        </ul>
        <div className='flex gap-10 flex-col lg:flex-row '>
            <button className=' uppercase border-solid border-2 border-white py-4 px-9 rounded-full font-bold'>Contact Us</button>
            <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>Join Hydra</button>
        </div>
    </nav>
  )
}



export default Navbar