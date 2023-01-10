import React from 'react';
import blg1 from '../assets/Rectangle 20.png'
import blg2 from '../assets/Rectangle 21.png'
import blg3 from '../assets/Rectangle 22.png'
import BlogCard from '../Components/BlogCard';
import indexStyles from '../styles/index.module.css';
import book from '../assets/vector1.png';
import FeatureCard from '../Components/FeatureCard';
import TopArrow from '../Components/TopArrow';
import testi1 from '../assets/Ellipse 3.png';
import testi2 from '../assets/Ellipse 4.png';
import testi3 from '../assets/Ellipse 5.png';
import testi4 from '../assets/Ellipse 6.png';
import feat1 from '../assets/Group.png'
import feat2 from '../assets/Vector (3).png';
import feat3 from '../assets/Vector (4).png';
import feat4 from '../assets/Vector (5).png';
import TestimonialCard from '../Components/TestimonialCard';
import Heroe from '../Components/Heroe/Heroe'

//testimonials
const testimonials=[
  {
    img: testi1,
    name: 'Dammy Akinpelu',
    testimonial: '“ AppraiseMe is a great solution every company that’s serious about appraisal must look at. The deployment is pretty easy and the platform is easy to use.”'
  },
  {
    img: testi2,
    name: 'Akintola Seun',
    testimonial: ' “ When an unknown printer took a galley of type and scrambled it to make a type specimen book ”'
  },
  {
    img: testi3,
    name: 'Alex Doe',
    testimonial: '“ When an unknown printer took a galley of type and scrambled it to make a type specimen book”'
  },
  {
    img:  testi4,
    name: 'Michael Doe',
    testimonial: '“ When an unknown printer took a galley of type and scrambled it to make a type specimen book ”'
  },
];


// blog write up
const blogs =[
  {
    img: blg1,
    head: 'Employee Performance Rating',
    text: 'It is has come to stay and our desire as learning institution has been fulfilled knowing we can deliver to our students from anywhere they are all  around .',
  },
  {
    img: blg2,
    head: 'Appraisal Technique has come to stay',
    text: 'It is true tha has come to stay nd our deng institution has been fulfilled can deliver to our students from anywhere they are all around the year anoom.',
  },
  {
    img: blg3,
    head: 'Welcome To a New Dispensation',
    text: ' has come to stay and our desire as learning institution has been fulfilled knowing we can deliver to our students from anywhere they are all around the year.',
  },
]

// our Features write up
 const features = [
      {
        img: feat1,
        head: 'Employee Data Management',
        text: 'Our data management services includes individual employee data like benefits enrollment,job change, job re-classification,new hires and updating events.',
      },
      {
        img: feat2,
        head: 'Promotion Management',
        text: 'This module manages the promotion of staffs based on outcomes of  appraisal processes. Promotion is recorded strictly based on merit and highly automated',
      },
      {
        img: feat3,
        head: 'Job Schedule Upload',
        text: 'Provides a common platform for dispersed organization units and staff to communicate as regards performance management simplifies the process of defining reporting lines.',
      },
      {
        img: feat4,
        head: 'Appraisal Period Setup',
        text: 'This feature supports the setting up of an automated period of appraisal creating an annual process called the performance appraisal.',
      }
 ]

function Index() {
  return (
    <div>
      <Heroe/>
      {/* Get on Board */}
      <div className='h-[100px] md:h-[200px] xl:h-[25vh] bg-[#9BE150] flex items-center justify-center'>
        <div className='lg:w-[90%] xl:w-[80%] w-full h-[40%] md:h-[70%] lg:h-[70%] text-[#ffffff] justify-between font-openSans font-bold lg:text-[24px] lg:leading-[51px] md:text-[20px] md:leading-[40px] text-[10px] leading-[20px] mx-auto flex flex-col text-center '>
          <p className={`text-center ${indexStyles.onboard}`}>AppraiseMe aids objectivity in Employee Appraisals, Promotes and Rewards <br /> Systems.</p>
          <p className={`text-center ${indexStyles.onboard}`}>Get Onboard NOW!</p>
        </div>
      </div>

      {/* Our features */}
    <div className=' bg-[#ffffff] lg:h-[1250px] xl:h-[100vh] flex items-end mb-[10%] md:mb-[5%] lg:mb-[0%] my-[3%] lg:my-[0%] ' >
        <div className='h-[90%] w-full mt-[10%] lg:mt-[0%] flex flex-col justify-aroundround'>
          <div className='text-center text-[#464545] font-openSans'>
              <h1 className={` text-[26px] font-[800] leading-[54px] md:text-[28px] md:leading-[40px] lg:text-[32px] lg:leading-[54px] text-[#464545]  ${indexStyles.featHead}`}>Our Features</h1>
              <p className={`text-[18px] leading-[31px]  md:text-[16px] md:leading-[40px] lg:leading-[51px] font-bold lg:text-[20px] ${indexStyles.featSubHead}`} >Explore some of our exciting features here</p>
          </div>
          <div className={`flex py-8 lg:py-0 flex-col lg:mt-[10%] xl:mt-[3%] 2xl:mt-[5%] md:flex-row md:flex-wrap lg:h-[90%] xl:h-[70%] justify-around w-full ${indexStyles.featContainer}`}>
            {
              features.map((feature) => {
                return <FeatureCard {...feature}/>
              })
            }
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className={`${indexStyles.missionDiv} lg:h-[1300px] xl:h-[100vh] 2xl:h-[80vh] flex items-center justify-center`} id='about'>
          <div className='w-[90%] xl:h-[80%] lg:h-[85%] flex justify-between mb-[10%] lg:mb-0 flex-col-reverse xl:flex-row px-1 py-8 lg:py-0'>
              <div className='bg-blue-800 w-full h-[300px] md:h-[500px] lg:h-[600px] xl:h-full xl:w-[50%] flex items-center justify-center rounded-[5px] mt-[3%] xl:mt-0'>
                 <div className='bg-[#9BE150] text-white text-[27px] h-[83px] w-[83px] rounded-full flex items-center justify-center'>
                    <i className="fa-solid fa-play"></i>
                 </div> 
              </div> 
              <div className='xl:w-[48%] xl:mt-[10%] font-openSans'>
                  <div className='h-[28%]'>
                      <h1 className={`text-[#464545] font-bold text-[22px] leading-[32px] md:text-[28px] md:leading-[40px] lg:text-[32px] text-center xl:text-start lg:leading-[54px] xl:ml-[10%] ${indexStyles.mission}`}>Know About Our Mission</h1>
                      <p className={`text-[#1A1919A6] text-[13px] leading-[20px] md:text-[16px] md:leading-[25px] lg:text-[20px] lg:leading-[30px] text-center xl:w-[90%] ${indexStyles.missionText}`}> <span className='text-[#9BE150]'> AppraiseMe </span> is a flexible and insightful <br /> platform</p>
                  </div>
                  <div className={`${indexStyles.missionComments} mt-[2%] xl:mt-0 h-[72%] w-full pt-[5%] pb-[5%] flex flex-col justify-between `}>
                      <p className={`w-4/5 text-center mx-auto text-[12px] leading-[200%] md:text-[15px] h-[80%] md:leading-[290%] ${indexStyles.missionCommentsText}`}>Our approach to performance appraisal is simple: leverage your employees’ skills while rewarding performance. AppraiseMe is a flexible and insightful platform that will help you grow your people so you can grow your business.</p>
                      <div className='flex self-center w-[40%] md:w-[15%] mt-[10%] justify-around'>
                          <div className='w-[18px] h-[20px] rounded-full bg-[#9BE150]'></div>
                          <div className='w-[18px] h-[20px] rounded-full bg-white'></div>
                          <div className='w-[18px] h-[20px] rounded-full bg-white'></div>
                      </div>
                  </div>
              </div>
          </div> 
      </div>

       {/* testimonials */}
       <div className={` mb-[5%] 2xl:h-[100vh] flex flex-col ${indexStyles.testimonial} `}>
        <h2 className={`${indexStyles.testimonials} text-[#464545] font-openSans text-[26px] font-[800] leading-[54px] mt-[5%] text-center`}>Testimonials</h2>
        <p className={`${indexStyles.users} px-3 mt-[1.5%] font-openSans font-[700] text-[18px] leading-[31px] text-center text-[#1a1919A6] `}>See what some of our users are saying <br className='hidden md:block' /> about us</p>
        <div className='flex flex-wrap h-[80%] justify-around mt-[10%] '>
           {
            testimonials.map(testimonial=>{
              return <TestimonialCard {...testimonial}/>
            })
           }
        </div>
      </div>

      {/* the top arrow component */}
        <TopArrow/>
  
      {/* business */}
      <div className=' h-[500px] md:h-[700px] xl:h-[60vh] bg-[#9BE150] flex flex-col xl:flex-row'>
        <div className=' w-[90%] md:w-4/5 xl:w-[50%] mx-auto xl:mx-0 h-full flex items-center justify-center '>
          <div className={`w-[80%] h-[60%] rounded-3xl ${indexStyles.business}`}>
            <div className='w-[100%] h-[100%] bg-[#5ade9e44] rounded-3xl'></div>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row h-full xl:w-[50%] justify-start items-center'>
          <div className={`w-[80%] h-full md:h-[70%] xl:h-[21%] flex flex-col xl:flex-row justify-between items-center xl:items-start `}>
            <div className= {`h-full w-[19%] xl:w-[20%] ${indexStyles.businessCont}`} >
              <div className='w-full h-[50%] md:h-full rounded-full bg-white flex justify-center items-center'>
                <img src={book} alt="" className='w-[50%]'  /> 
              </div>
            </div>
            <div className={`h-full flex items-center justify-center md:w-[80%] mb-3 md:mb-0 `}>
              <p className={`font-openSans  w-[90%] font-[600] flex text-[24px] leading-[32px] mx-auto text-white ${indexStyles.businessText} text-center xl:text-start`}>Eliminate the influence of double standards, favoritism and Godfathers on employee performance review</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* blog */}
       <div className=' flex flex-col items-center justify-around mt-8' id='blog'>
            <div className='flex flex-col items-center justify-center '>
                <h3 className={`text-[#464545] text-[26px] font-[800] font-OpenSans leading-[54px] ${indexStyles.blogHead}`}>Blog</h3>
                <h2 className={`text-[18px] md:text-[24px] font-[700] font-OpenSans leading-[31px] ${indexStyles.blogSubHead}`}>Some of the latest news on our blog </h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-around mx-auto px-[5%] mt-[5%] mb-[5%]'>
                {
                    blogs.map(blog=>{
                        return <BlogCard {...blog}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Index

