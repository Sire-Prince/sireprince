import React from 'react'
import { FaGlobe, FaMobile, FaTools, FaPaintBrush, FaArrowCircleUp, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link'
import { 
  FadeUp, 
  FadeDown, 

} from '../components/Reveal';

const Projects = () => {
  const projectsData = [
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    },
     
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    },
     
    {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-commence.vercel.app'
    },
    {
      image: '/pro-2.jpg',
      title: 'Real Estate Website',
      description: 'Ensuring easy access to properties worth while',
      href: 'https://sire-estate.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
    {
      image: '/pro-3.jpg',
      title: 'A University School Website',
      description: 'Offering a full expirence through the school',
      href: 'https://sire-school.vercel.app'
    },
       {
      image: '/pro-1.jpg',
      title: 'E-commence Website',
      description: 'A platform offering cloth services with ease',
      href: 'https://sire-e-ecommence.vercel.app'
    }
  ];

  return (
    <div id="projects" className=" flex items-center justify-end bg-black/50  pt-36 sm:pt-14 py-6 px-5 sm:py-22 lg:px-38">
      <div className=' w-full text-white'>
        <FadeDown>    <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight py-2 px-8 sm:py-20 lg:px-18">
          Featured Projects 
        </h1></FadeDown>
    <FadeUp><div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-15 sm:gap-6 p-8 sm:p-4'>
         {projectsData.map((project,index)=>(
                     <div  key={index}
      className="relative w-full h-45 border border-white/20 rounded-lg overflow-hidden group shadow-lg p-4 cursor-pointer"
      style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='flex items-center justify-between cursor-pointer'>
        <FaGlobe className="w-7 h-7 hover:text-blue-600 text-white/90" title="Website" />
        <h2 className=' text-gray-900  hover:text-blue-600 transition-colors duration-300'>
          <a href={project.href} target="_blank" rel="noreferrer" className='text-sm'>
            {project.href}
          </a>
        </h2>
      </div>

  
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/80 p-4">
        <div>
          <h3 className="text-ms sm:text-lg font-bold text-white">{project.title}</h3>
          <p className="text-xm sm:text-sm text-white/90">{project.description}</p>
        </div>
      </div>
    </div>
                           
                       ))}
        </div></FadeUp>

   <FadeDown>
          <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 my-6 sm:my-12 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. Get in touch for a free consultation.
            </p>
            <FadeUp>  <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="cursor-pointer bg-blue-400 text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors duration-300">
                  Start a Project
                </button>
              </Link>
              
            </div></FadeUp>
          
          </div>
          </FadeDown>
        

        
      </div>
    </div>
  )
}

export default Projects
