'use client';
import { useEffect, useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { SiZapier, SiSpotify, SiZoom, SiSlack, SiAmazon, SiAdobe } from 'react-icons/si';
import { Wrench, Settings, Briefcase } from 'lucide-react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const logos = [
    { name: 'Zapier', icon: <SiZapier size={32} className="text-white" />, alt: 'Zapier' },
    { name: 'Spotify', icon: <SiSpotify size={32} className="text-white" />, alt: 'Spotify' },
    { name: 'Zoom', icon: <SiZoom size={32} className="text-white" />, alt: 'Zoom' },
    { name: 'Slack', icon: <SiSlack size={32} className="text-white" />, alt: 'Slack' },
    { name: 'Amazon', icon: <SiAmazon size={32} className="text-white" />, alt: 'Amazon' },
    { name: 'Adobe', icon: <SiAdobe size={32} className="text-white" />, alt: 'Adobe' },
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-green-400" />,
      title: "Design",
      description: "At SquareUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
      link: "Learn More"
    },
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: "Engineering",
      description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      link: "Learn More"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      title: "Project Management",
      description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      link: "Learn More"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32">
            <svg viewBox="0 0 1200 200" className="w-full h-full">
              <path
                d="M0,100 C300,150 600,50 900,100 C1050,125 1150,100 1200,100 L1200,200 L0,200 Z"
                fill="rgba(34, 197, 94, 0.1)"
              />
              <path
                d="M0,120 C300,170 600,70 900,120 C1050,145 1150,120 1200,120 L1200,200 L0,200 Z"
                fill="rgba(34, 197, 94, 0.05)"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              A Digital Product Studio
              <br />
              <span className="text-white">that will Work</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-gray-300 text-lg md:text-xl">
              <span className="text-gray-400">For</span>
              <span className="text-white font-medium">Startups</span>
              <span className="text-gray-400">,</span>
              <span className="text-white font-medium">Enterprise leaders</span>
              <span className="text-gray-400">,</span>
              <span className="text-white font-medium">Media & Publishers</span>
              <span className="text-gray-400">and</span>
              <span className="text-white font-medium">Social Good</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-transparent border border-gray-500 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg">
                Our Works
              </button>
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors duration-300 font-medium text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Section with Slider */}
      <section className="w-full bg-gray-900 overflow-hidden">
        <div className="max-w-full mx-auto">
          <div className="bg-gray-800 py-8 overflow-hidden">
            <div className="flex animate-[scroll_25s_linear_infinite] hover:animate-none space-x-12">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center bg-gray-700 rounded-lg px-8 py-4 min-w-[180px]"
                >
                  <div className="flex items-center space-x-3">
                    {logo.icon}
                    <span className="text-white font-medium">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Animation Keyframes */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-66.666%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative bg-black py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 border border-gray-800 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-gray-800 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-800 rounded-full opacity-10"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-gray-800 rounded-full opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your brand with our innovative digital solutions that captivate and engage your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="text-green-400 font-medium hover:text-green-300 transition-colors duration-300 flex items-center group/link">
                  {service.link}
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}