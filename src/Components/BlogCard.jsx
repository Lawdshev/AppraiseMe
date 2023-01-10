import React from 'react';
import indexStyles from '../styles/index.module.css';

function BlogCard({img,head,text}) {
  return (
    <div className='lg:w-[30%] mt-4 h-[60%] ' style={{boxShadow:'0px 16px 40px rgba(117, 142, 254, 0.25)'}}>
        <img src={img} alt="" className='w-full' />
        <div className='p-[8%] lg:p-[5%] xl:p-[8%] flex flex-col justify-between  h-[50%]'>
            <h3 className={`font-inter text-[16px] md:text-[24px] lg:text-[14px] xl:text-[16px] font-[700] leading-[24px] ${indexStyles.blogCardHead}`}>{head}</h3>
            <p className={`font-workSans text-[13px] md:text-[18px] lg:text-[12px] xl:text-[13px] font-[500] leading-[20px]  md:leading-[25px] lg:leading-[20px] xl:text-start mt-[2%] ${indexStyles.blogCardText}`}>{text}</p>
            <button className='mt-[7%] bg-[#9BE150] w-[60%] md:w-[50%]  lg:w-[63%]  mx-auto rounded-full text-OpenSans text-[20px] md:text-[24px] lg:text-[14px] xl:text-[20px] font-[700] leading-[54px] text-white hover:text-[#9BE150] hover:bg-[transparent] hover:border-[#9BE150] hover:border-[0.5px] '>Read More</button>
        </div>
    </div>
  )
}
export default BlogCard;