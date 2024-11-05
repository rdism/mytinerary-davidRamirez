import React from "react";
import CalltoAction from './CalltoAction';

const Hero = () => {
  return (
    
    <div className="w-full relative overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
      <img 
        src="/images/hero.jpg"
        alt="Explore"
        className="w-full h-full object-cover absolute object-center brightness-[.65] shadow-lg animate-zoom"
      />
      <div className="absolute w-full"> 
        <CalltoAction />
      </div>
    </div>
    
  );
};

export default Hero;
