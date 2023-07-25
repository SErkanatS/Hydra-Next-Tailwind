import Image from 'next/image'
import React from 'react'

function Card(props) {
  return (
      
      <div className='flex flex-col w-[250px] md:w-[310px] items-center gap-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a3456f2] to-[#211E2E] p-5 md:p-12 rounded-[40px] shadow-2xl shadow-black '>
        <div className=' relative rounded-full border-[#0e0e0e52] border-8 w-[190px] h-[190px] overflow-hidden'>
          <Image src={props.img} fill sizes='100' alt='card' blurDataURL={props.img} />
        </div>
        <p className=' uppercase font-extrabold text-2xl'>{props.title}</p>
        <p className='text-center text-[12px]'>{props.body}</p>
        <div>
          <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>
            {props.button}
          </button>
        </div>
        
      </div>
    
  )
}

export default Card