import React from 'react';

function FooterOne() {
  return (
    <>
    <div className='flex flex-col h-[602px] mx-auto bg-black text-white overflow-x-hidden ' id='contact'>
        <div className='flex flex-col items-center justify-center py-2 lg:py-12'>
           <h1 className='font-extrabold text-[20px] leading-[36px] md:text-[30px] md:leading-[48px] lg:text-[36px] lg:leading-[54px] font-workSans' id='contact'>Contact Us</h1>
           <p id='inTouch' className='text-[#9BE150] text-[14px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[30px] font-bold font-inter'>Keep in touch with Us</p>
        </div>
        <div className=' mx-auto  flex flex-wrap h-[70%] pl-[10%] py-4 md:px-8 lg:px-0 xl:px-8 md:py-8 lg:py-4 lg:w-[90%]'>
          <div className='flex flex-col h-[33%] lg:w-1/4 w-1/2 md:w-[33%] md:h-[52%] lg:h-[60%] justify-between xl:pl-4'>
             <h1 className='text-[#9BE150] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter'>Lagos Office</h1>
             <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] h-[70%] font-workSans font-medium'>Plot 1187, Abimbola Awoniyi Close,<br/>
                off Kasumu Ekemode Str, Via Saka <br />
                Tinubu Street, Victoria island, <br /> Nigeria.
             </p>
             <div className=' font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter'>   
                <p>T: 234-1-9049320, 234-1-2710670-2</p>
                <p>E: info@vatebra.com</p>
                <p>E: customersupport@vatebra.com</p>
             </div>
          </div>
          <div className='flex flex-col h-[29%] lg:w-1/4 w-1/2 md:w-[36%] md:h-[46%] lg:h-[53%] justify-between lg:pl-8 md:pl-4'>
              <h1 className='text-[#9BE150] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter'>Abuja Office</h1>
              <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px]  h-[70%] font-workSans font-medium '>Suite 302 Fortune Place, <br /> No 9 Nairobi Street, off <br /> Aminu Kano Cresent, <br /> Wuse 2, Abuja, Nigeria.</p>
              <div className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter'>
                <p>T: 234-1-9049320, 234-1-2710670-2</p>
                <p>E: abujaoffice@vatebra.com</p>
              </div> 
          </div>
          <div className='flex flex-col h-[23%] p-0 lg:w-1/4 w-1/2 md:w-[30%] md:h-[39%] lg:h-[46%] justify-between md:pl-6 lg:pl-20'>
             <h1 className='text-[#9BE150] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] w-full font-inter'>Nairobi Office</h1>
             <p className='text-[10px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] h-[70%] font-medium font-workSans '>AG02, Madonna House, <br /> Westlands Road, Nairobi, <br /> Kenya</p>
             <p className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter'>E: nairobioffice@vatebra.com</p>
          </div>
          <div className='flex flex-col h-[29%] lg:w-1/4 w-1/2 md:mt-4 lg:mt-0 md:w-[33%] md:h-[45%] lg:h-[53%] justify-between lg:pl-20'>
             <h1 className='text-[#9BE150] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter'>Accra Office</h1>
             <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-medium h-[70%] font-workSans'>202, Westland Boulevard, <br /> west Legon, Accra, Ghana, <br /> PO Box AN 5208 Accra- <br /> North, Accra Ghana.</p>
             <div className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter'>
              <p>T: 233(0) 302402339</p>
              <p>E; ghanaoffice@vatebra.com</p>
             </div>
          </div>
          <div className='md:ml-[2%] lg:ml-[0] before:flex flex-col h-[18%] lg:w-[30%] w-4/5 md:w-[33%] lg:mt-4 lg:h-[27%] md:h-[33%] justify-between md:mt-4 xl:pl-4 text-white'>
              <h1 className='text-[#9BE150] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter'>Sierra Leone Office</h1>
              <div className='font-medium text-white text-[9px] mt-[2%] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter'>
                <p>55A Wilkinson Road, Freetown, Sierra Leone</p>
                <p>T: +2349062547274</p>
                <p>E: info@vatebra.com</p>
              </div> 
          </div>
        </div>
    </div>
      
        <div className='bg-[#9BE150] flex pl-[10%] py-8 f h-[98px]'>
          <div className='flex text-white font-normal font-inter items-center'>
            <p className='text-lg md:text-2xl lg:text-4xl'> &copy;</p>
            <p className='text-[9px] leading-[12px] md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[21px]' id='copyright font-inter'>Copyright 2022 by Vatebra.com</p>
          </div> 
        </div>
    </>
  )
}

export default FooterOne;