
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




import image from '../images/projects/gaming.png'
import image1 from '../images/projects/honey.png'
import image8 from '../images/projects/ferrari.png'
import image2 from '../images/projects/travel.png'
import image3 from '../images/projects/kanabav.png'
import image4 from '../images/projects/quickbooks.png'
import image5 from '../images/projects/medical.png'
import image6 from '../images/projects/portfolio.png'
import image7 from '../images/projects/courses.png'
import js1 from '../images/projects/QR.png'
import js2 from '../images/projects/XO.png'
import js3 from '../images/projects/calculater.png'
import js4 from '../images/projects/Game.png'
import js5 from '../images/projects/BIANO.png'
import js6 from '../images/projects/weather.png'


function Carousel() {
  
  
  
  useEffect(() => {
      AOS.init({
        duration: 1400, 
        easing: 'ease-in-out'
      });
    }, []);



  const slides = [
    {
      image: image,
      link : "https://gaming-lilac-kappa.vercel.app/",
      name:"Gaming Template",
      skills:"React JS & Tailwind Css"
    },
        {
          image: image1,
          link : "https://honey-lemon.vercel.app/",
          name:"Honey Products Template",
          skills:"Html & Tailwind Css"
        },
        
        {
          image: image5,
          link: '',
          name:"Medical Website",
          skills:"Html & Bootstrap"
        },
        {
          image: image7,
          link: 'https://courses-website-chi.vercel.app/',
          name:"Caurses Template",
          skills:"Html & Tailwind Css"
        },
        {
          image: image8,
          link: 'https://ferrari-eight.vercel.app/',
          name:"Ferrari Website Template",
          skills:"React JS & Tailwind Css"
        },
        
        {
          image: image3,
          link: 'https://shady-mahmoud.vercel.app/sofa/ui%20ux%202.html',
          name:"Furniture Template ",
          skills:"Html & Bootstrap"
        },
        {
          image: image2,
          link : "https://travel-to-island.vercel.app/",
          name:"Travel Template",
          skills:"Html & Tailwind Css"
        },
       
        {
          image: image4,
          link : "",
          name:"Quick Books Template",
          skills:"Html & Bootstrap"
        },
        {
          image: image6,
          link: 'https://shady-mahmoud.vercel.app/',
          name:"Portfolio",
          skills:"Html & Bootstrap"
        },
        
        {
          image: js2,
          link:"https://shady-mahmoud.vercel.app/js%20projects/xo%20game/xo%20gameee.html",
          name:"XO Game",
          skills:"HTML & CSS & JS"
        },
        {
          image: js1,
          link:"https://shady-mahmoud.vercel.app/js%20projects/QR/qr.html",
          name:"QR Generator",
          skills:"HTML & CSS & JS"
        },
        {
          image: js3,
          link:"https://shady-mahmoud.vercel.app/js%20projects/calculater/calculater.html",
          name:"Calculater",
          skills:"HTML & CSS & JS"
        },
        {
          image: js5,
          link:"https://shady-mahmoud.vercel.app/js%20projects/biano/biano.html",
          name:"Biano",
          skills:"HTML & CSS & JS"
        },
        {
          image: js4,
          
          name:"Game",
          skills:"HTML & CSS & JS"
        },
        {
          image: js6,
          link:"  https://weather-app-ten-beta-37.vercel.app/",
          name:"Weather App",
          skills:"React js "
        },
        
      ];
      
   



 
  return (
    <div id='Projects' className='bg-black pt-40'>

<div className= 'flex  text-4xl  lg:text-7xl justify-center gap-1 pt-60'>
<i class="fa-solid fa-p text-orange-600 border-b-8 pb-2 border-white"></i>
<i class="fa-solid fa-r text-white border-b-8 pb-2 border-orange-600"></i>
<i class="fa-solid fa-o text-orange-600 border-b-8 pb-2 border-white"></i>
<i class="fa-solid fa-j text-white border-b-8 pb-2 border-orange-600"></i>
<i class="fa-solid fa-e text-orange-600 border-b-8 pb-2 border-white"></i>
<i class="fa-solid fa-c text-white border-b-8 pb-2 border-orange-600"></i>
<i class="fa-solid fa-t text-orange-600 border-b-8 pb-2 border-white"></i>
<i class="fa-solid fa-s text-white border-b-8 pb-2 border-orange-600"></i>
</div>


    

    <div  className=' flex flex-col gap-20 items-center justify-center md:flex-col flex-wrap lg:flex-row pt-40 p-5'>
         {
          slides.map((project,index)=>(
            <div data-aos="zoom-in" data-aos-duration='1600'  className={`hover:scale-105 duration-1000 ${index % 2 === 0  ? 'bg-orange-600' : 'bg-white'}   gap-7 rounded-lg w-full md:w-2/3 lg:w-[35%] h-full flex flex-col ${index % 2 === 0  ? 'mt-0':'mt-32'}`}>
            <img src={project.image} className=' p-5 shadow-lg rounded-lg h-1/3 md:h-[350px] hover:opacity-90 cursor-pointer' alt="" />
            <div className='flex flex-col md:flex-row justify-between p-5 items-start md:items-center'>
              <div className='flex flex-col gap-2 md:gap-5'>
                  <div >
                  <h1 className={`text-2xl md:text-4xl ${index % 2 === 0  ? 'text-white' : 'text-orange-600'} px-1 md:px-3 font-bold`}>{project.name}</h1>
                  <h1 className='text-lg md:text-2xl text-black px-1 md:px-3 w-full mt-5 font-bold'>{project.skills}</h1>
                  </div>
                  
         
              </div>
             <button className={`bg-black text-orange-600 p-3 rounded font-semibold ${index % 2 === 0  ? 'hover:bg-white hover:text-orange' : 'hover:bg-orange-600 hover:text-black'} `}><a href={project.link}>Visit Now</a></button>
            </div>
        
        </div>
          ))
         }
         
       
    

      
        </div>

       
    </div>
  );
}

export default Carousel;


