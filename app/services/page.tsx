import React from 'react'
import Link from 'next/link'
import Myprocess from '../components/Myprocess'
import { FaGlobe, FaMobile, FaTools, FaPaintBrush, FaArrowCircleUp, FaHandsHelping } from 'react-icons/fa';
import { 
  FadeUp, 
  FadeDown, 

} from '../components/Reveal';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites and web applications built with modern frameworks to establish your strong online presence.",
      features: ["Hoisting / Domain Registration", "Responsive Design", "Performance Optimization", "SEO-friendly Structure", "Cross-browser Compatibility"],
      icon: <div className='p-2 bg-amber-800 rounded-md'>
        <FaGlobe className="w-7 h-7" title="Website" />
      </div>
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences on all devices.",
      features: ["iOS & Android Development", "React Native/Flutter", "App Store Deployment", "Offline Functionality", "Push Notifications"],
      icon: <div className='p-2 bg-red-500 rounded-md'>
        <FaMobile className="w-7 h-7" title="Phone" />
      </div>
    },
    {
      title: "SEO",
      description: "Search Engine Optimization strategies to improve your website's visibility and drive organic traffic.",
      features: ["Keyword Research & Analysis", "On-page Optimization", "Technical SEO Audit", "Content Strategy", "Ranking Monitoring"],
      icon: <div className='p-2 bg-purple-800 rounded-md'>
        <FaArrowCircleUp className="w-7 h-7 transform rotate-45" />
      </div>
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
      features: ["Regular Security Updates", "Performance Monitoring", "Content Updates", "Backup Management", "Technical Support"],
      icon: <div className='p-2 bg-green-800 rounded-md'>
        <FaTools className="w-7 h-7" title="Tools" />
      </div>
    },
    {
      title: "Graphic Design",
      description: "Creative visual design solutions that enhance your brand identity and user engagement.",
      features: ["Logo & Brand Identity", "UI/UX Design", "Marketing Materials", "Social Media Graphics", "Visual Content Creation"],
      icon: <div className='p-2 bg-yellow-400 rounded-md'>
        <FaPaintBrush className="w-7 h-7" title="brush" />
      </div>
    },
    {
      title: "IT Consultancy",
      description: "Strategic technology guidance to help you make informed decisions and optimize your digital infrastructure.",
      features: ["Technology Strategy", "System Architecture", "Digital Transformation", "Security Assessment", "IT Infrastructure Planning"],
      icon: <div className='p-2 bg-blue-800 rounded-md'>
        <FaHandsHelping className="w-7 h-7" title="help" />
      </div>
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "We design wireframes and prototypes for your approval."
    },
    {
      step: "03",
      title: "Development",
      description: "Our team brings your project to life with clean, efficient code."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing followed by deployment and launch."
    }
  ]

  return (
    <div className="min-h-screen bg-black/90 text-white pt-36 sm:pt-14">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
         <FadeDown>   <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your online presence and drive business growth.
            </p>
          </div></FadeDown>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <FadeUp>  <div className="flex items-center justify-start mb-7 gap-5">
                  {service.icon}
                  <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                </FadeUp>
              </div>
            ))}
          </div>
    <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Book A Demo Of A project You Have In Mind 
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create prototypes at affordable price
            </p>
            <div className="flex items-center gap-4 justify-center">
              <Link href="/contact">
                <button className="cursor-pointer bg-blue-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-blue-300 transition-colors duration-300">
                  Book a Project
                </button>
              </Link>
             
            </div>
          </div>
          <Myprocess />
          
          {/* CTA Section */}
           <FadeDown>
          <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
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
      </section>
    </div>
  )
}

export default Services








