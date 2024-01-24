import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Services() {
  
      useEffect(() => {
          AOS.init({
            duration: 1400, 
            easing: 'ease-in-out'
          });
        }, []);
  
  return (
<div id='Services' className='bg-black p-5 md:p-20'>

      <div className=' gap-4 flex justify-center text-5xl font-bold pt-32 mb-16'>
        <h1 className=' text-white'>Our</h1>
        <h1 className=' text-orange-600'>Services</h1>
      </div>


      <div data-aos="fade-up" data-aos-duration="1400" className='w-full mt-40 flex gap-16 justify-center items-center flex-col md:flex-row '>
        <div  className='hover:scale-105 duration-1000 hover:bg-gray-200 text-orange-600  cursor-pointer bg-white p-6 gap-3 items-center lg:items-start rounded-lg w-full md:w-[40%] h-full md:h-[400px] lg:h-[330px] flex flex-col mt-10 '>
          <i className="lg:text-6xl text-5xl    fa-solid fa-computer"></i>
          <h1 className='text-2xl md:text-4xl text-center lg:text-start '>UIUX Design</h1>
          <h1 className='text-lg  lg:text-2xl  text-center lg:text-start'>I has some Experience in making ui_ux templates and Marketing them.</h1>
        </div>

        <div  className=' hover:scale-105 duration-1000 cursor-pointer text-white  bg-orange-600 hover:bg-orange-500 p-6 gap-3 items-center lg:items-start rounded-lg w-full md:w-[40%] h-full md:h-[400px] lg:h-[330px] flex flex-col mt-10 '>
          <i className="lg:text-6xl text-5xl    fa-solid fa-laptop-code"></i>
          <h1 className='text-2xl md:text-4xl text-center lg:text-start '>Front End</h1>
          <h1 className='text-lg  lg:text-2xl  text-center lg:text-start'>I can deal with all front end templates and convert them to websites by React js and other ways and Receive Data from apis . </h1>
        </div>
      </div>
      
      
      <div data-aos="fade-up" data-aos-duration="1400" className='w-full flex gap-16 justify-center items-center flex-col md:flex-row mt-10'>
        <div  className=' hover:scale-105 duration-1000 cursor-pointer text-white  hover:bg-orange-500 bg-orange-600 p-6 gap-3 items-center lg:items-start rounded-lg w-full md:w-[40%] h-full md:h-[400px] lg:h-[330px] flex flex-col mt-10 '>
          <i className="lg:text-6xl text-5xl    fa-solid fa-database"></i>
          <h1 className='text-2xl md:text-4xl text-center lg:text-start '>Back End</h1>
          <h1 className='text-lg  lg:text-2xl  text-center lg:text-start'>I also can deal with Backend projects and create different databases and Pass Them to Front End Developer to Show the data.</h1>
        </div>
        
        <div  className='hover:scale-105 duration-1000 hover:bg-gray-200 text-orange-600   cursor-pointer bg-white p-6 gap-3 items-center lg:items-start rounded-lg w-full md:w-[40%] h-full md:h-[400px] lg:h-[330px] flex flex-col mt-10 '>
          <i className="lg:text-6xl text-5xl    fa-solid fa-code"></i>
          <h1 className='text-2xl md:text-4xl text-center lg:text-start '>Full Stack</h1>
          <h1 className='text-lg  lg:text-2xl  text-center lg:text-start'>Fianlly Because I had the knowledge of Back-End And Front-End languages together I Now as Full Stack </h1>
        </div>
      </div>
 
</div>
  )
}

export default Services