
import React from 'react';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import FontCard from '@/components/FontCard';
import TypePlayground from '@/components/TypePlayground';

const Index = () => {
  const fontData = [
    {
      title: "Playfair Display",
      fontFamily: "'Playfair Display', serif",
      category: "Serif",
      description: "Playfair Display is an elegant serif typeface with high contrast between thick and thin strokes, giving it a classical feel.",
      useCases: ["Headlines", "Editorial", "Fashion", "Luxury Brands", "Formal Invitations"]
    },
    {
      title: "Montserrat",
      fontFamily: "'Montserrat', sans-serif",
      category: "Sans-Serif",
      description: "Montserrat is a geometric sans-serif typeface with clean lines and excellent readability at various sizes.",
      useCases: ["Corporate", "Tech", "UI Design", "Headings", "Modern Websites"]
    },
    {
      title: "Roboto Mono",
      fontFamily: "'Roboto Mono', monospace",
      category: "Monospace",
      description: "Roboto Mono features fixed-width characters, making it perfect for displaying code snippets and technical content.",
      useCases: ["Code Examples", "Technical Documentation", "Pricing Tables", "Forms", "Terminal Displays"]
    },
    {
      title: "Lobster",
      fontFamily: "'Lobster', cursive",
      category: "Display",
      description: "Lobster is a bold script font with flowing letterforms that create a casual yet elegant appearance.",
      useCases: ["Logos", "Headers", "Creative Projects", "Packaging", "Event Posters"]
    },
    {
      title: "Abril Fatface",
      fontFamily: "'Abril Fatface', display",
      category: "Display",
      description: "Abril Fatface is a display typeface with dramatic thick-thin transitions and strong presence on the page.",
      useCases: ["Posters", "Book Covers", "Magazine Titles", "Large Headlines", "Branding"]
    },
    {
      title: "Merriweather",
      fontFamily: "'Merriweather', serif",
      category: "Serif",
      description: "Merriweather is a transitional serif designed for optimal readability on screens with generous x-height and open forms.",
      useCases: ["Long-form Reading", "Blog Posts", "Academic Papers", "Editorial Design", "Books"]
    }
  ];
  
  return (
    <div className="min-h-screen relative">
      <Background />
      
      <div className="relative z-10">
        <Hero />
        
        <section className="py-16 px-4" id="fonts">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-abril mb-4">
                Font <span className="bg-clip-text text-transparent bg-gradient-2 animate-gradient-shift">Showcase</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore a curated collection of typefaces and learn where and how to use them effectively in your designs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fontData.map((font, index) => (
                <FontCard
                  key={index}
                  title={font.title}
                  fontFamily={font.fontFamily}
                  category={font.category}
                  description={font.description}
                  useCases={font.useCases}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 bg-gray-50/80 backdrop-blur">
          <TypePlayground />
        </section>
        
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-abril mb-4">Typography Guidelines</h2>
              <p className="text-gray-600">Essential principles for effective typography in digital and print design.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-montserrat mb-4">Hierarchy & Contrast</h3>
                <p className="mb-4 text-gray-700">
                  Establish a clear visual hierarchy with different sizes, weights, and styles to guide users through content.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Use size differences for clear differentiation between headings and body text</li>
                  <li>Create contrast through weight variations within the same typeface</li>
                  <li>Pair complementary fonts for visual interest</li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-montserrat mb-4">Readability & Legibility</h3>
                <p className="mb-4 text-gray-700">
                  Prioritize readability with appropriate spacing, sizing, and color contrast for your content.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Maintain adequate line height (1.4-1.6 for body text)</li>
                  <li>Keep line length between 45-75 characters for optimal reading</li>
                  <li>Ensure high contrast between text and background colors</li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-montserrat mb-4">Font Pairing</h3>
                <p className="mb-4 text-gray-700">
                  Create harmony by pairing fonts that complement each other while maintaining contrast.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Pair serifs with sans-serifs for classic contrast</li>
                  <li>Use fonts from the same family for a cohesive look</li>
                  <li>Limit to 2-3 typefaces per design to avoid visual confusion</li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-montserrat mb-4">Responsive Typography</h3>
                <p className="mb-4 text-gray-700">
                  Design typography systems that adapt gracefully across devices and screen sizes.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Use relative units (rem, em) instead of fixed pixels</li>
                  <li>Scale font sizes proportionally on different screen sizes</li>
                  <li>Test readability on various devices and viewing distances</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="py-12 px-4 bg-black/70 backdrop-blur text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-abril mb-6">Typography Wonderland</h2>
              <p className="max-w-lg mx-auto mb-8 text-gray-300">
                Exploring and celebrating the art, science and beauty of typography in all its forms.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#fonts" className="hover:text-purple-300 transition-colors">Fonts</a>
                <a href="#playground" className="hover:text-purple-300 transition-colors">Playground</a>
                <a href="#" className="hover:text-purple-300 transition-colors">Resources</a>
                <a href="#" className="hover:text-purple-300 transition-colors">About</a>
              </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-400">
              © 2025 Typography Wonderland. All fonts used are under open licenses.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
