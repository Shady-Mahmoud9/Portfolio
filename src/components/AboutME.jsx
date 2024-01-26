import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




import think from '../images/Thinking face-cuate.png'

function AboutME() {
 
 
  useEffect(() => {
      AOS.init({
        duration: 1400, 
        easing: 'ease-in-out'
      });
    }, []);
 
 
    const text = `Hello  everybody , My name is Shady Mahmoud ,Iam a Full Stack Developer
  ,Iam Studying at We School For Applied
Technology At The 3th grade ,In This Website I acheived
  alot of projects for websites I had acheived 
them with Front End Languages and also alot
  of Projects I had acheived them with Back 
End Languages, I will show them Later , 
Of Cuarse Thiese Projects need alot of skills  
to make them and I will Show Them ,too .
Finally I will Make Contact Section To Set Links
to My Social Media Accounts to Contact with me if you need Developer. `
  const words = text.split(' ');
  return (

    
    <div id='AboutME' className='bg-black pt-60'>
     
     <div className='flex gap-10 flex-col items-center md:flex-row P-2 MD:p-10'>
        <div data-aos='fade-right' className='md:w-[40%]  w-full'>
            <img className='w-full  h-[450px] md:h-[500px] lg:h-[600px]' src={think} alt="" />
        </div>
        <div data-aos='flip-up' className='md:w-1/2 w-full p-2 md:p-10 border-orange-600 shadow-orange-600 shadow-lg border-2 rounded-lg '>
          <h1 className='text-orange-600 text-4xl  lg:text-5xl font-bold mb-5 text-center'>About Me</h1>
          <div className='flex gap-3 text-xl justify-center lg:text-3xl font-bold mb-12 '>
            <h1 className='text-white '>Full Stack</h1>
            <h1 className='text-orange-600 '>Developer </h1>
          </div>
          <h1 className='cursor-pointer text-white text-base md:text-start text-center md:text-2xl font-semibold'>
      {words.map((word, index) => (
        <span key={index} className="inline-block hover:text-orange-600 mr-2">
          {word}
        </span>
      ))}
    </h1>

        </div>
     </div>
     
     
     
     
    </div>
  )
}

export default AboutME