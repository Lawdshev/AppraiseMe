import React from 'react';
import vector from '../assets/vector1.png';
import indexStyles from '../styles/index.module.css';


function FeatureCard({head, text,img}) {
  return (
    <div className={`${indexStyles.featureCard} h-[404px] w-[282px] my-5 lg:my-0 mx-auto md:mx-0 flex py-7 items-center flex-col justify-around`}>
        <div className='self-center'>
           <img src={img} className=' w-[52px] h-[47px]' />
        </div>
        <h1 className='text-[16px] leading-[54px] self-center font-openSans font-extrabold'>{head}</h1>
        <p className='h-[60%] text-center px-2 font-semibold font-openSans text-[15px] leading-[31px]'>{text}</p>
    </div>
  )
}

export default FeatureCard

