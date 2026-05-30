import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Inspirat() {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    { id: 1, image: "/assets/bustia-suggeriments.jpeg", title: "Bústia suggeriments" },
    { id: 2, image: "/assets/cutting-board.jpg", title: "Taula de tallar" },
    { id: 3, image: "/assets/clipboard.jpg", title: "Porta-retalls" },
    { id: 4, image: "/assets/portatil-stand.jpg", title: "Suport portàtil" },
    { id: 5, image: "/assets/keyclip.jpg", title: "Clauer" },
    { id: 6, image: "/assets/tamburet.jpg", title: "Tamboret" },
    { id: 7, image: "/assets/clips.jpg", title: "Sivella clipatge" },
    { id: 8, image: "/assets/rellotge.jpg", title: "Rellotge" }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-start px-4 md:px-12 max-w-7xl mx-auto overflow-visible select-none pb-12 pt-2">
      
      {/* Background Collage Images Container (Sized exactly to match Home.jsx viewport section to guarantee identical absolute positions) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[88vh] sm:h-screen pointer-events-none select-none overflow-visible z-0">
        <img 
          src="/assets/wooden-letters.png" 
          alt="Wooden letters decoration" 
          className="absolute top-[calc(10%+80px)] right-[-10px] sm:right-[-14px] md:right-[-17px] lg:right-[-21px] xl:right-[-25px] w-[50px] sm:w-[70px] md:w-[85px] lg:w-[105px] xl:w-[125px] pointer-events-none select-none z-0"
        />
        <img 
          src="/assets/crumpled-paper.png" 
          alt="Crumpled paper decoration" 
          className="absolute top-[calc(38%+40px)] left-[-13px] sm:left-[-18px] md:left-[-22px] lg:left-[-26px] xl:left-[-30px] w-[44px] sm:w-[60px] md:w-[72px] lg:w-[88px] xl:w-[100px] pointer-events-none select-none z-0"
        />
        <img 
          src="/assets/wood-scraps.png" 
          alt="Wood scraps decoration" 
          className="absolute bottom-[calc(10%-80px)] left-[3%] sm:left-[8%] w-[95px] sm:w-[133px] md:w-[162px] lg:w-[200px] xl:w-[238px] pointer-events-none select-none z-0"
        />
        <img 
          src="/assets/3d-print.png" 
          alt="3D print benchy decoration" 
          className="absolute bottom-[calc(3%-20px)] sm:bottom-[calc(5%-20px)] right-0 sm:right-[10px] md:right-[20px] lg:right-[30px] xl:right-[40px] w-[116px] sm:w-[160px] md:w-[193px] lg:w-[237px] xl:w-[281px] rotate-[10deg] pointer-events-none select-none z-0"
        />
      </div>

      {/* Main Page Container */}
      <div className="max-w-[820px] w-full mx-auto px-2 md:px-6 pt-2 pb-12 flex flex-col justify-start z-20 relative overflow-hidden">
        
        {/* 1. Page Header (Hero Section - letters scaled 1.5x larger, then reduced by 10%) */}
        <div className="w-full h-[80px] sm:h-[100px] md:h-[120px] relative flex justify-center items-center overflow-visible z-0 mt-1">
          <img 
            src="/assets/inspirat-lletres.png" 
            alt="Inspira't" 
            className="absolute h-full w-auto object-contain pointer-events-none select-none z-0 origin-center scale-[0.76] sm:scale-[0.9] md:scale-[1.06]"
          />
        </div>

        {/* 2. Subtitle (Top margin reduced by 5mm/20px to compress vertical gap, centered horizontally with mx-auto) */}
        <p className="font-normal text-sm sm:text-base text-neutral-800 leading-relaxed text-center max-w-2xl mx-auto mt-[-36px] sm:mt-[-28px] md:mt-[-20px] z-20 relative italic">
          Troba projectes d’altres creadors per inspirar-te i comparteix els teus
        </p>

        {/* 3. Main Container (Neobrutalist card with exactly 5mm / mt-5 spacing to subtitle) */}
        <div className="max-w-4xl w-full mx-auto mt-5 z-20 relative border-2 border-black bg-[#fffcf6] p-5 pt-6 pb-3 sm:p-6 sm:pt-7 sm:pb-3.5 flex flex-col gap-3.5 h-auto sm:h-[480px] overflow-hidden">
          
          {/* 4. Search input field (Thinner 1.5px border and Search icon placed on the right end) */}
          <div className="relative flex items-center border-b-[1.5px] border-black pb-1.5 w-[240px] flex-shrink-0">
            <input
              type="text"
              placeholder="Buscar a la biblioteca"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none p-0 pr-8 text-black placeholder-neutral-500 font-semibold text-xs focus:outline-none w-full"
              style={{ boxShadow: 'none', fontFamily: "'Montserrat', sans-serif" }}
            />
            <Search className="w-4 h-4 text-black absolute right-0 top-1/2 -translate-y-[60%] stroke-[2.5]" />
          </div>

          {/* 5. Grid Container (Scrollbar removed, matrix cannot scroll, completely visible) */}
          <div className="flex-grow overflow-hidden">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pb-0">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="border-[1.5px] border-black bg-[#fffcf6] flex flex-col overflow-hidden transition-all duration-300 relative z-20"
                  >
                    {/* Project Image (Thinner 1.5px bottom border) */}
                    <div className="aspect-[4/3] w-full border-b-[1.5px] border-black bg-neutral-100 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </div>

                    {/* Bottom Caption Box (Interactive hover area, normal-weight sentence-case text adapted to fit entirely) */}
                    <div className="bg-[#fffcf6] text-black border-t-0 p-2 sm:p-3 text-center transition-colors duration-200 hover:bg-black hover:text-[#fffcf6] cursor-pointer select-none">
                      <span className="font-normal text-[10px] sm:text-[11.4px] block leading-tight">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-2 border-2 border-dashed border-neutral-400">
                <span className="font-extrabold text-xs uppercase tracking-widest text-neutral-400">
                  Cap projecte trobat
                </span>
                <p className="text-neutral-500 text-xs font-semibold">
                  Prova de cercar una altra paraula clau de la biblioteca.
                </p>
              </div>
            )}
          </div>

          {/* 6. Neobrutalist Pagination Bar (Inside the rectangle, at the bottom - border removed, text size +10%, "de" lowercase, top spacing reduced further) */}
          <div className="flex justify-center items-center gap-1.5 font-normal text-[7.7px] sm:text-[8.8px] tracking-wider pt-0 -mt-[28px] flex-shrink-0">
            <span className="underline underline-offset-2 decoration-[1px]">1</span>
            <span className="text-neutral-400 select-none lowercase">de</span>
            <span>6</span>
            <span className="text-neutral-400 cursor-not-allowed mx-0.5 hover:text-black transition-colors duration-200 select-none">&gt;</span>
            <span className="text-neutral-400 cursor-not-allowed hover:text-black transition-colors duration-200 select-none">&gt;&gt;</span>
          </div>

        </div>

        {/* 7. Centered Bottom Neobrutalist Button (Matches Comunitat's hollow shadow buttons style) */}
        <div className="flex justify-center w-full mt-6 z-20 relative">
          <div className="relative group/btn inline-flex w-[290px]">
            {/* Hollow offset shadow box */}
            <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[4px] translate-y-[4px] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-all duration-200"></div>
            <button 
              onClick={() => alert("Funció de compartir projectes en desenvolupament")}
              className="relative w-full border-2 border-black bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-extrabold text-xs uppercase py-3.5 px-6 flex items-center justify-between transition-all duration-200 cursor-pointer select-none"
            >
              <span>Comparteix el teu projecte</span>
              <span className="text-sm font-black">➔</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
