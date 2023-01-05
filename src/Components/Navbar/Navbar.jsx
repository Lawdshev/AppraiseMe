import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/AppraiseMe-Logo-3.png';
import '../Navbar/Navbar.css';


function Navbar() {
  const [sidebar,setSidebar] = useState(false);
   
  const toggleNavbar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
    <div className='absolute xl:h-[10vh] 3xl:h-auto  md:flex justify-between px-[5%] hidden top-0 left-0 right-0  largeNav'>
      <Link to='/' className='w-[15%] flex items-center '>
          <img src={logo} className="w-full"/>
      </Link>
      <div className='w-[55%] flex justify-between items-center'>
            <div className=" flex justify-around items-center b w-[70%]" >
                <Link to='/about'> <p  className=' text-[1.11vw] font-[700] hover:text-[#9BE150] active:text-[#9BE150] text-white'> About</p></Link>
                <p className='text-[1.11vw] font-[700] hover:text-[#9BE150] active:text-[#9BE150] text-white '>Blog</p>
                <p className='text-[1.11vw] font-[700] hover:text-[#9BE150] active:text-[#9BE150] text-white'>Contact</p>
                <p className='text-[1.11vw] font-[700] hover:text-[#9BE150] active:text-[#9BE150] text-white'>FAQ</p>
            </div>
            <button className='text-[1.11vw] font-[700] w-[15%] h-[50%] bg-[#9BE150] text-white hover:bg-[#004A00] rounded-2xl'>Register</button>
      </div>
    </div>
    <div className=' md:hidden md:fixed  top-0 left-0 right-0 z-20   w-full smallNav'>
    <div className='absolute right-5 z-20 block top-3 bar md:hidden' onClick={toggleNavbar}>
            <i className="fa-solid fa-bars text-[20px] text-[#9BE150] " ></i>
    </div>
    <Link to='/' className=' w-full '>
        <img src={logo} className="w-[30%] top-[0.5%] absolute md:fixed lg:-top-[0%] md:top-[1%] 3xl z-20 md:w-[20%] lg:w-[16%] ml-[3.5%] logo 2xl:w-[10%] logo"  />
    </Link>
    <div className={sidebar ? 'nav active' : 'nav'}>
        <div className='navbars'>
            <div className="navItemsDiv cursor-pointer" onClick={toggleNavbar}>
                <Link to='/about' className='navItems'>About</Link>
                <p className='navItems font-[700] font-openSans'>Blog</p>
                <p className='navItems'>Contact</p>
                <p className='navItems'>FAQ</p>
            </div>
            <button className='joinUsBtn'>Join us</button>
        </div>
    </div>
    </div>
    </>

  )
}
export default Navbar;

