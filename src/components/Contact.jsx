import React ,{useEffect} from 'react'
import brand from '../images/icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

    useEffect(() => {
        AOS.init({
          duration: 1400, 
          easing: 'ease-in-out'
        });
      }, []);

  return (
    <div>
      

<footer class="bg-black pt-40 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={brand} class="h-20 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white cursor-pointer hover:text-orange-600">Shady</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline hover:text-orange-600">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline hover:text-orange-600">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline hover:text-orange-600 ">Github</a>
                      </li>
                      <li  class="mb-4">
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline hover:text-orange-600">Linked In</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline hover:text-orange-600">FaceBook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                  <ul class="text-white dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#!" class="hover:underline hover:text-orange-600">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#!" class="hover:underline hover:text-orange-600">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline hover:text-orange-600">Shady</a>
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0 cursor-pointer">
              <a href="https://www.facebook.com/profile.php?id=100074005852470&mibextid=ZbWKwL" class="text-white hover:text-orange-600 dark:hover:text-orange-600">
                  <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              
              <a href="https://www.linkedin.com/in/shady-mahmoud-600321293/" class="text-white hover:text-orange-600 dark:hover:text-orange-600 ms-5">
              <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
  </svg>  
    
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/Shady-Mahmoud9" class="text-white hover:text-orange-600 dark:hover:text-orange-600 ms-5">
                  <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer