import React from 'react';
import vector from '../assets/vector1.png';
import indexStyles from '../styles/index.module.css';


function FeatureCard({head, text,img}) {
  return (
    <div className={`${indexStyles.featureCard} w-[70%] h-[350px] md:h-[404px] md:w-[282px] xl:w-[20%] xl:h-[80%] 2xl:h-[70%] my-5 lg:my-0 mx-auto md:mx-0 flex pt-[2%]  items-center flex-col justify-around px-[0.5%]`}>
        <div className='self-center'>
           <img src={img} className='w-[52px] xl:w-[3vw]'/>
        </div>
        <h1 className={`${indexStyles.cardHead} text-[16px] xl:text-[1.1vw] leading-[6%] self-center font-openSans font-extrabold`}>{head}</h1>
        <p className={`${indexStyles.cardText} text-[#1A1919B0] h-[60%] text-center px-[2%] font-semibold font-openSans text-[15px] leading-[31px] 3xl:leading-[3.5%]`}>{text}</p>
    </div>
  )
}
export default FeatureCard;

