import React from 'react';
import indexStyles from '../styles/index.module.css'

function TestimonialCard({img, name, testimonial}) {
  return (
    <div className={`w-[282px] h-[400px] hover:bg-[#9BE150] 2xl:w-[20%] 2xl:h-[80%] bg-[#FFFFFF] flex flex-col relative xl:justify-between px-8 mt-[20%] lg:mt-[7%] xl:mt-[2%] 3xl:h-[550px]`} style={{boxShadow: '0px 16px 40px rgba(117, 142, 254, 0.25)'}}>
      <div className='self-center w-[60%] -mt-[30%] h-[40%] '>
        <img src={img} className='w-full rounded-full' /> 
      </div>
         <div className='flex flex-col text-center justify-between h-[75%]'>
            <h1 className={`${indexStyles.testimonialName} text-openSans font-[800] text-[20px] leading-[54px]`}>{name}</h1>
            <p className={`${indexStyles.testimonies} text-[#1A1919B0] h-[80%] text-[16px] font-openSans font-[600] leading-[32px]`}>{testimonial}</p>
         </div>
    </div>
  )
}
export default TestimonialCard;