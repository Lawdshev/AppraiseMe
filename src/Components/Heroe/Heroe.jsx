import React from 'react';
import heroStyles from './Heroe.module.css';

function Heroe() {
    return (
      <div className={heroStyles.container} id='heroe' >
          <div className={heroStyles.overlay}>
             <div className={` md:w-[85%] h-[90%] lg:h-[60%] md:h-[80%] xl:h-[37%] mx-auto text-white flex flex-col items-center justify-between text-center ${heroStyles.contTexts}`}>
              <h1 className={`${heroStyles.heading} lg:text-[2.5vw] md:text-[3vw] font-[700] leading-[3vh] lg:leading-[40px] xl:leading-[3vh]`}>Track, Evaluate And Manage <span className='text-[#9BE150]'> Employee Performance </span>  In Real-time</h1>
              <p className={`lg:text-[1.4vw] md:text-[2.4vw] font-[600] leading-[2.6vh] md:leading-[33.5px] w-[70%] 3xl:leading-[3.4vh] ${heroStyles.midText}`}>Fetch an up-to-date employee information with  AppraiseMe...Allows you to implement best practice appraisal processes.</p>
              <div className={` ${heroStyles.btn} bg-[#9BE150] flex items-center justify-center w-[30%] xl:w-[15%] rounded-[3.4vw] xl:text-[1.1vw] md:text-[2.1vw] text-[12px] py-[1.5%] hover:py-[1.3%] hover:bg-[transparent] hover:border-[#9BE150] hover:border-2`}> Get Started </div> 
             </div>
          </div>
      </div>
    )
}
export default Heroe;