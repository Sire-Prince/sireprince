
import React from 'react'
import Link from 'next/link'
import Corevalues from "../components/Corevalues";
import Testimonials from "../components/Testimonials";
import Myprocess from "../components/Myprocess";
import Contact from "../components/Contact"
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight, 

} from '../components/Reveal';

const about = () => {
  return (
    <div>
    <div className="bg-black/50 w-full pt-36 sm:pt-14 py-16 sm:py-20 lg:py-30 px-4 sm:px-8 md:px-12 lg:px-18 flex flex-col-reverse lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-0">
      
      {/* Left Column - Main Content & Buttons */}
      <div className='flex flex-col items-start justify-between w-full lg:w-[35%] h-full gap-8 sm:gap-12 lg:gap-42  '> 
        <FadeLeft> <div className='text-2xl sm:text-3xl md:text-6xl  leading-tight sm:leading-snug lg:leading-20 font-bold'>
          A developer specializing in crafting innovative solutions. 
        </div></FadeLeft>
       
        
   
           <div className='flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 w-full'>
          <div className='w-full sm:w-auto'> 
          
        
        <a 
            href="/resume.pdf" 
            download="Sire_Prince_CV.pdf"
            className="w-[35%]"
          >
              <button 
              type="button"
              className="bg-[#272727] cursor-pointer hover:text-blue-400 w-full px-6 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#373737] rounded"
            >
              Download CV
            </button>
          
          </a>
         
              
          </div>
       <Link href="/contact" className='w-full sm:w-auto'> 
            <button className="bg-[#272727] btn hover:text-blue-400 w-full sm:w-auto px-6 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#373737] rounded">
              Contact Me
            </button>
          </Link>
        </div>
   
      </div>
 
      {/* Right Column - About Text */}
      <div className='text-base sm:text-lg lg:text-lg w-full lg:w-[50%] text-white/90 leading-6 sm:leading-7 lg:leading-7'>
      <FadeDown>  <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10'>About Me</h2></FadeDown>
      <FadeRight> <div className='space-y-4 sm:space-y-6'>
          <p>
          A developer specialized in crafting innovative solutions. 
          Transforming ideas into seamless, responsive, and user-centric applications.
          </p>
          <p>
          My journey into web development began 
              by wondering why and how things worked. That curiosity 
              to know how things worked turned into a passion for building over the years.
          </p>
          
           
      <p>  I bridge the gap between design and development, ensuring that the final work is up to expectation.
          My process in creating is collaborative and research-driven, starting with user point of view
              and moving through wireframing, prototyping, and user testing until launching or deployment. 
          </p>
        
            <p>
              When I am not coding or creating, you might find me creating chances on a park or scoring.
              Relaxing in solitude, or reading a good old book.
            </p>
        </div></FadeRight>
       
      </div>
    </div>
    <Corevalues />
    <Testimonials />
    <Myprocess />
    <Contact />
    </div>
  )
}

export default about








// const about = () => {
//   return (
  
//     <div id='about' className="bg-black/90 w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
//     <FadeDown> <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12'>About</h2></FadeDown> 
//       <FadeUp><div className='bg-black/50 flex flex-col lg:flex-row items-start justify-between w-full gap-6 sm:gap-8 lg:gap-12'> 
//    <div className='text-xl sm:text-2xl lg:text-3xl leading-relaxed sm:leading-loose lg:leading-16 font-bold w-full lg:w-1/2'>
//           A developer specialized in crafting innovative solutions. 
//           Transforming ideas into seamless, responsive, and user-centric applications.
//         </div>
       
//      <div className='flex flex-col items-start justify-start gap-4 sm:gap-6 w-full lg:w-1/2'>
//           <div className='text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose'>
//             <p>My journey into web development began 
//               by wondering why and how things worked. That curiosity 
//               to know how things worked turned into a passion for building over the years.
//             </p>
//             <br />
//             <p>I bridge the gap between design and development, ensuring that the final work is up to expectation.</p>
//             <br />
//             <p>My process in creating is collaborative and research-driven, starting with user point of view
//               and moving through wireframing, prototyping, and user testing until launching or deployment. 
//             </p>
//             <br />
        
//           </div>
//           <FadeUp><div className='w-full sm:w-auto'>
//             <Link href="/about"> 
//               <button className="bg-[#272727] btn hover:text-blue-400 mt-3 sm:mt-8 lg:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-[#373737]">
//                 Learn More 
//               </button>
//             </Link> 
//           </div></FadeUp>
          
//         </div>
       
//       </div></FadeUp>
      
//     </div>
//   )
// }

// export default about