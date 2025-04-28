
import React from 'react';
import { cn } from '@/lib/utils';
import { Type } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none">
        {/* Background decorative text elements */}
        <div className="absolute -top-10 left-0 text-[30vw] font-abril text-black/5 leading-none">
          Aa
        </div>
        <div className="absolute bottom-0 right-10 text-[25vw] font-montserrat font-bold text-white/5 leading-none">
          Bb
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center justify-center space-x-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full">
          <Type size={20} className="text-purple-500" />
          <span className="font-raleway text-sm">TYPOGRAPHY WONDERLAND</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-abril mb-6 tracking-tight">
          <span className="block">Discover The</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 animate-gradient-shift">
            Power of Type
          </span>
        </h1>
        
        <p className="font-raleway text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Explore the art and science of typography. Learn how different fonts evoke emotions, 
          communicate messages, and enhance user experiences across digital and print media.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#fonts" className="px-6 py-3 bg-black text-white rounded-lg font-montserrat font-medium hover-grow">
            Explore Fonts
          </a>
          <a href="#playground" className="px-6 py-3 bg-transparent border border-black text-black rounded-lg font-montserrat font-medium hover-grow">
            Try Typography
          </a>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-16">
        <div className="w-16 h-16 border border-gray-300 rounded-full animate-bounce delay-100"></div>
        <div className="w-16 h-16 bg-purple-500/20 rotate-45 animate-bounce delay-200"></div>
        <div className="w-16 h-16 bg-gradient-4 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Hero;
