
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Text } from 'lucide-react';

interface FontCardProps {
  title: string;
  fontFamily: string;
  category: string;
  description: string;
  useCases: string[];
  className?: string;
}

const FontCard: React.FC<FontCardProps> = ({ 
  title, 
  fontFamily, 
  category, 
  description, 
  useCases,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSize, setFontSize] = useState(4); // 1-8 scale

  return (
    <div 
      className={cn(
        "bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
        isExpanded ? "md:col-span-2" : "col-span-1",
        className
      )}
    >
      <div className="mb-4 flex justify-between items-center">
        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
          {category}
        </span>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-gray-500 hover:text-gray-800"
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      </div>

      <h3 className="text-2xl mb-2 font-bold">{title}</h3>
      
      <div className="mb-6">
        <div 
          className={`mb-4 text-4xl sm:text-5xl transition-all overflow-hidden`} 
          style={{ 
            fontFamily, 
            fontSize: `${fontSize/2 + 1}rem`,
            lineHeight: 1.2 
          }}
        >
          {isExpanded ? "Aa Bb Cc 123" : "Aa"}
        </div>
        
        {isExpanded && (
          <div className="mb-6">
            <p className="mb-4 text-gray-700" style={{ fontFamily }}>
              {description}
            </p>
            
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm text-gray-500">Font Size:</span>
              <input 
                type="range" 
                min="1" 
                max="8" 
                step="0.5" 
                value={fontSize} 
                onChange={(e) => setFontSize(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm" style={{ fontFamily }}>
                The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-lg" style={{ fontFamily }}>
                Typography is the art and technique of arranging type.
              </p>
              <p className="text-xl font-bold" style={{ fontFamily }}>
                Beautiful typography makes reading easier.
              </p>
            </div>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="border-t border-gray-100 pt-4">
          <h4 className="flex items-center text-sm font-semibold mb-2">
            <Text size={16} className="mr-2" /> Best Used For:
          </h4>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      )}

      {!isExpanded && (
        <div className="flex items-center text-sm text-gray-500">
          <Sparkles size={14} className="mr-1" />
          <span>{useCases.slice(0, 2).join(", ")}{useCases.length > 2 ? "..." : ""}</span>
        </div>
      )}
    </div>
  );
};

export default FontCard;
