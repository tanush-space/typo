
import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundProps {
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ className }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 shape-blob bg-gradient-1 opacity-50 blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 shape-blob-2 bg-gradient-2 opacity-40 blur-2xl animate-float"></div>
      <div className="absolute top-3/4 left-1/5 w-64 h-64 shape-blob-3 bg-gradient-3 opacity-30 blur-xl animate-pulse-slow"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-32 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-yellow-200 opacity-20 rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
      
      <div className="absolute top-40 left-1/3 text-[200px] font-abril text-white opacity-5 rotate-12">A</div>
      <div className="absolute bottom-60 right-1/4 text-[180px] font-montserrat font-bold text-white opacity-5 -rotate-15">T</div>
    </div>
  );
};

export default Background;
