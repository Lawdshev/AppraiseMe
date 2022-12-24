import React from 'react';
import dami from '../assets/Ellipse 3.png'

function TestimonialCard({img, name, testimonial}) {
  return (
    <div className={`w-[282px] h-[400px] bg-[#FFFFFF] flex flex-col relative px-8 mt-[20%] lg:mt-[7%] xl:mt-[2%]`} style={{boxShadow: '0px 16px 40px rgba(117, 142, 254, 0.25)'}}>
        <img src={img} className='w-[150px] h-[150px] rounded-full absolute -top-[15%] right-[23%]' /> 
         <div className='flex flex-col text-center mt-[60%] justify-between h-[60%]'>
            <h1 className='text-openSans font-[800] text-[20px] leading-[54px]'>{name}</h1>
            <p className='h-[80%] text-[16px] font-openSans font-[600] leading-[32px]'>{testimonial}</p>
         </div>
    </div>
  )
}

export default TestimonialCard;

