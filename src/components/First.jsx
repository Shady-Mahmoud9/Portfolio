import React, { useState, useEffect } from 'react';
import Shady from '../images/shadynew.png'


import AOS from 'aos';
import 'aos/dist/aos.css';



   

function First() {
  
  useEffect(() => {
    AOS.init({
      duration: 1400, 
      easing: 'ease-in-out'
    });
  }, []);

  
    const [textColor, setTextColor] = useState('white');
  const [textColor1, setTextColor1] = useState('orange-600');

  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      setTextColor((prevColor) => (prevColor === 'white' ? 'orange-600' : 'white'));
      setTextColor1((prevColor) => (prevColor === 'orange-600' ? 'white' : 'orange-600'));
    }, 2000);

    return () => clearInterval(colorChangeInterval);
  }, []);

  return (
    <div className=' bg-black mt-16 p-2 md:p-10'>
      <div data-aos='fade-right'  className=' flex flex-col md:flex-row justify-center gap-5 md:gap-40 items-center p-10 md:pt-0 pt-20'>
        <div className=' flex flex-col w-full md:w-1/2 gap-5'>
          <h1 className='text-orange-600 text-4xl  lg:text-5xl font-bold mb-10'>Hello !</h1>
          <h1 className='text-white text-2xl font-bold'>Hello in my portfolio <br /> my name is </h1>
          <div className='flex md:flex-row flex-col gap-3 text-4xl  lg:text-5xl font-bold'>
            <h1 className={`text-${textColor}`}>Shady</h1>
            <h1 className={`text-${textColor1}`}>Mahmoud </h1>
          </div>
          
        </div>
        <div data-aos='zoom-in'    className=' w-full md:w-1/3  '>
          <img className='w-full  ' src={Shady} alt="" />
        </div>
      </div>
    </div>
  );
}

export default First;
