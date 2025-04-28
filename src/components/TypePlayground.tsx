
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  AlignCenter, 
  AlignLeft, 
  AlignRight, 
  Palette, 
  Type 
} from 'lucide-react';

interface TypePlaygroundProps {
  className?: string;
}

const fontOptions = [
  { value: "font-playfair", label: "Playfair Display", category: "Serif" },
  { value: "font-raleway", label: "Raleway", category: "Sans-serif" },
  { value: "font-roboto-mono", label: "Roboto Mono", category: "Monospace" },
  { value: "font-lobster", label: "Lobster", category: "Display" },
  { value: "font-abril", label: "Abril Fatface", category: "Display" },
  { value: "font-merriweather", label: "Merriweather", category: "Serif" },
  { value: "font-montserrat", label: "Montserrat", category: "Sans-serif" }
];

const colorOptions = [
  { value: "text-black", label: "Black" },
  { value: "text-white", label: "White" },
  { value: "text-purple-600", label: "Purple" },
  { value: "text-blue-600", label: "Blue" },
  { value: "text-pink-600", label: "Pink" },
  { value: "text-amber-600", label: "Amber" },
  { value: "text-emerald-600", label: "Emerald" }
];

const backgroundOptions = [
  { value: "bg-white", label: "White" },
  { value: "bg-black", label: "Black" },
  { value: "bg-gradient-1", label: "Gradient Red" },
  { value: "bg-gradient-2", label: "Gradient Purple" },
  { value: "bg-gradient-3", label: "Gradient Orange" },
  { value: "bg-gradient-4", label: "Gradient Teal" }
];

const TypePlayground: React.FC<TypePlaygroundProps> = ({ className }) => {
  const [text, setText] = useState("Typography is the art and technique of arranging type to make written language legible, readable and appealing.");
  const [selectedFont, setSelectedFont] = useState("font-playfair");
  const [fontSize, setFontSize] = useState(4);
  const [alignment, setAlignment] = useState("text-left");
  const [textColor, setTextColor] = useState("text-black");
  const [background, setBackground] = useState("bg-white");
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [fontWeight, setFontWeight] = useState("font-normal");
  
  return (
    <div className={cn("w-full", className)} id="playground">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-abril mb-4">
            Typography <span className="text-outline text-transparent">Playground</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiment with different typographic styles, sizes, and colors to see how they affect 
            readability and visual impact.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 border-b">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 border rounded-lg resize-none h-32"
              placeholder="Enter your text here..."
            ></textarea>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  <Type size={16} className="mr-2" /> Font Family
                </label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {fontOptions.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label} ({font.category})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Font Size: {fontSize}rem
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.25"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Font Weight
                </label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="font-light">Light</option>
                  <option value="font-normal">Regular</option>
                  <option value="font-medium">Medium</option>
                  <option value="font-semibold">Semibold</option>
                  <option value="font-bold">Bold</option>
                </select>
              </div>
            </div>
            
            <div className="md:col-span-4 space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Letter Spacing
                </label>
                <input
                  type="range"
                  min="-0.05"
                  max="0.3"
                  step="0.01"
                  value={letterSpacing}
                  onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Line Height
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="3"
                  step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Alignment
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setAlignment("text-left")}
                    className={cn(
                      "flex-1 p-2 border rounded-lg flex justify-center",
                      alignment === "text-left" ? "bg-gray-100" : ""
                    )}
                  >
                    <AlignLeft size={20} />
                  </button>
                  <button
                    onClick={() => setAlignment("text-center")}
                    className={cn(
                      "flex-1 p-2 border rounded-lg flex justify-center",
                      alignment === "text-center" ? "bg-gray-100" : ""
                    )}
                  >
                    <AlignCenter size={20} />
                  </button>
                  <button
                    onClick={() => setAlignment("text-right")}
                    className={cn(
                      "flex-1 p-2 border rounded-lg flex justify-center",
                      alignment === "text-right" ? "bg-gray-100" : ""
                    )}
                  >
                    <AlignRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  <Palette size={16} className="mr-2" /> Text Color
                </label>
                <select
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {colorOptions.map((color) => (
                    <option key={color.value} value={color.value}>
                      {color.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="flex items-center text-sm font-medium mb-2">
                  Background
                </label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {backgroundOptions.map((bg) => (
                    <option key={bg.value} value={bg.value}>
                      {bg.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className={cn("p-8", background)}>
            <div 
              className={cn(
                selectedFont,
                fontWeight,
                textColor,
                alignment,
                "transition-all"
              )}
              style={{ 
                fontSize: `${fontSize}rem`, 
                letterSpacing: `${letterSpacing}em`,
                lineHeight: lineHeight
              }}
            >
              {text || "Enter some text above to see how it looks with different typography styles."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypePlayground;
