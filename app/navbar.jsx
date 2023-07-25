"use client"

import Image from 'next/image'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <nav className=' flex items-center justify-between uppercase text-xs lg:mb-[112px]'>
        <div className=' flex items-center gap-4'>
          <Image src={'/hydralogo.svg'} width={102} height={103} alt='logo' />
          <Image src={'/hydra-text-logo.svg'} width={76} height={46} alt='logo' />
        </div>
        <div className='hidden lg:flex gap-10'>
          <ul className='flex items-center gap-10 flex-col lg:flex-row '>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">How to</a></li>
          </ul>
          <div className='flex justify-around gap-10 flex-col lg:flex-row '>
            <a href="#contact">
              <button className=' uppercase border-solid border-2 border-white py-4 px-9 rounded-full font-bold'>Contact Us</button>
            </a>
            <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>Join Hydra</button>
          </div>
        </div>
        <div className='lg:hidden'>
          <Image src={'/toggle.svg'} alt="toggle" width={33} height={26} onClick={toggle} />
        </div>
      </nav>
      {isOpen && (
        <div className='lg:hidden flex gap-[40px] flex-col pb-[112px]'>
          <ul className='flex items-center gap-[40px] flex-col'>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">How to</a></li>
          </ul>
          <div className='flex justify-around gap-[40px] flex-col w-fit mx-auto'>
            <a href="#contact">
              <button className=' uppercase border-solid border-2 border-white py-4 px-9 rounded-full font-bold'>Contact Us</button>
            </a>
            <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>Join Hydra</button>
          </div>
        </div>
      )
      }
    </>
  )
}



export default Navbar