import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';






import html from '../images/skills/HTML.png'
import css from '../images/skills/Css.png'
import js from '../images/skills/js.jpg'
import react from '../images/skills/react.png'
import node from '../images/skills/node.png'
import tailwind from '../images/skills/tailwind.png'
import bootstrap from '../images/skills/bootstrap.png'
import php from '../images/skills/php.png'
import laravel from '../images/skills/laravel.png'

function Skills() {
  
  useEffect(() => {
      AOS.init({
        duration: 1400, 
        easing: 'ease-in-out'
      });
    }, []);
  
  
    const skills =[
        {"image" :  html ,
        "title" :"HTML",
        "Percentage":"95%",
        "Percentagecolor":"blue-600",
        "description" :"Standard markup language for creating web pages and web applications.", 
    },
        {"image" :  css ,
        "title" :"CSS",
        "Percentage":"90%",
        "Percentagecolor":"yellow-500",
        "description" :"Style language used for describing the look and formatting of a document written in HTML.", 
    },
        {"image" :  js ,
        "title" :"JS",
        "Percentage":"80%",
        "Percentagecolor":"pink-600",
        "description" :"Versatile scripting language primarily used for adding interactivity and dynamic behavior to web pages.", 
    },
        {"image" :  react ,
        "title" :"React",
        "Percentage":"70%",
        "Percentagecolor":"green-600",
        "description" :"JavaScript library for building user interfaces, developed by Facebook. It allows for the creation of reusable UI components.", 
    },
        {"image" :  node ,
        "title" :"Node",
        "Percentage":"80%",
        "Percentagecolor":"cyan-600",
        "description" :"Server-side JavaScript runtime that enables building scalable and high-performance network applications.", 
    },
        {"image" :  tailwind ,
        "title" :"Tailwind",
        "Percentage":"90%",
        "Percentagecolor":"pink-600",
        "description" :"Utility-first CSS framework that provides low-level utility classes to build designs directly in the markup.", 
    },
        {"image" :  bootstrap ,
        "title" :"Bootstrap",
        "Percentage":"95%",
        "Percentagecolor":"cyan-600",
        "description" :"Front-end framework that simplifies the development of responsive and attractive web pages and web applications.", 
    },
        {"image" :  php ,
        "title" :"Php",
        "Percentage":"80%",
        "Percentagecolor":"yellow-500",
        "description" :"Server-side scripting language used for web development and creating dynamic web pages.", 
    },
        {"image" :  laravel ,
        "title" :"Laravel",
        "Percentage":"60%",
        "Percentagecolor":"green-600",
        "description" :" PHP web application framework known for its elegant syntax and tools for tasks such as routing, authentication, and caching.", 
    },
    ]

  return (
    <div id='Skills' className='bg-black '>

<div className= 'flex  text-4xl  lg:text-7xl justify-center gap-1 pt-20'>
<i class="fa-solid fa-s text-white border-b-8 pb-2 border-orange-700"></i><i class="fa-solid fa-k text-orange-700 border-b-8 pb-2 border-white"></i><i class="fa-solid fa-i text-white border-b-8 pb-2 border-orange-700"></i><i class="fa-solid fa-l text-orange-700 border-b-8 pb-2 border-white"></i><i class="fa-solid fa-l text-white border-b-8 pb-2 border-orange-700"></i><i class="fa-solid fa-s text-orange-700 border-b-8 pb-2 border-white"></i>
</div>

<div className='flex flex-col p-4 md:p-16 flex-wrap gap-10 md:flex-row   mt-40'>
{
  skills.map((skill, index) => (
    <div data-aos='fade-up' key={index} className={`  cursor-pointer relative  rounded-lg p-5 w-full md:w-[45%] lg:w-[30%] mt-5 flex flex-col gap-8 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-orange-600'}`}>
      <img src={skill.image} className='object-contain w-2/3 md:w-[40%] h-[200px]' alt="" />
      <h1 className='text-3xl text-center font-bold'>{skill.title}</h1>
      <h1 className={`text-xl text-center font-semibold ${index%2 ===0 ? 'text-orange-600':'text-white'}`}>{skill.description}</h1>
      <div className={`absolute top-1/3 left-[60%] p-10 w-[70px] h-[70px] rounded-full bg-opacity-50 border-[6px] ${index % 2 === 0 ? ' border-orange-600' : ' border-white'}  ${index % 2 === 0 ? ' bg-orange-600' : ' bg-white'} flex justify-center items-center`}>
        <h1 className={`text-2xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-orange-600'}`}>{skill.Percentage}</h1>
      </div>
    </div>
  ))
}

        
</div>

{/* <img src={html}  alt="" /> */}
    </div>
  )
}

export default Skills