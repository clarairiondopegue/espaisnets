import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Recycle,
      title: "ASSISTENT DE RECICLATGE",
      description: "Descobreix a l'instant les millors vies per gestionar, transformar o donar una segona vida a qualsevol material sobrant del teu taller."
    },
    {
      icon: Users,
      title: "Xarxa Col·laborativa",
      description: "Connecta't amb altres Maker Spaces i FabLabs per compartir excedents i tancar el cicle de materials."
    },
    {
      icon: GraduationCap,
      title: "DISSENY I SOSTENIBILITAT",
      description: "Aprèn tècniques de disseny conscient. Informa't sobre l'impacte ambiental dels materials que utilitzem i descobreix alternatives més ecològiques."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20 w-full overflow-x-clip relative">

      {/* Hero Section (Center Alignment matching Mockup, exactly h-screen/min-h-screen) */}
      <section className="relative h-[88vh] sm:h-screen w-full flex flex-col items-center justify-center text-center px-4 md:px-12 max-w-7xl mx-auto overflow-visible select-none">
        
        {/* Floating Collage Decorative Elements (Inside the h-screen container, no animations, smaller sizing) */}
        <img 
          src="/assets/wooden-letters.png" 
          alt="Wooden letters decoration" 
          className="absolute top-[calc(10%+80px)] right-[-10px] sm:right-[-14px] md:right-[-17px] lg:right-[-21px] xl:right-[-25px] w-[50px] sm:w-[70px] md:w-[85px] lg:w-[105px] xl:w-[125px] pointer-events-none select-none z-10"
        />
        <img 
          src="/assets/crumpled-paper.png" 
          alt="Crumpled paper decoration" 
          className="absolute top-[calc(38%+40px)] left-[-13px] sm:left-[-18px] md:left-[-22px] lg:left-[-26px] xl:left-[-30px] w-[44px] sm:w-[60px] md:w-[72px] lg:w-[88px] xl:w-[100px] pointer-events-none select-none z-10"
        />
        <img 
          src="/assets/wood-scraps.png" 
          alt="Wood scraps decoration" 
          className="absolute bottom-[calc(10%-80px)] left-[3%] sm:left-[8%] w-[95px] sm:w-[133px] md:w-[162px] lg:w-[200px] xl:w-[238px] pointer-events-none select-none z-10"
        />
        <img 
          src="/assets/3d-print.png" 
          alt="3D print benchy decoration" 
          className="absolute bottom-[calc(3%-20px)] sm:bottom-[calc(5%-20px)] right-0 sm:right-[10px] md:right-[20px] lg:right-[30px] xl:right-[40px] w-[116px] sm:w-[160px] md:w-[193px] lg:w-[237px] xl:w-[281px] rotate-[10deg] pointer-events-none select-none z-10"
        />

        <div className="z-20 relative flex flex-col items-center justify-center text-center max-w-4xl w-full min-h-[460px] -translate-y-[2cm]">
          {/* Main Collage Logo in the background layer */}
          <img 
            src="/assets/espais-nets-phtoshop.png" 
            alt="ESPAISNETS" 
            className="absolute top-[-1cm] left-1/2 -translate-x-1/2 w-full max-w-[819px] h-auto object-contain pointer-events-none z-10"
          />
          
          {/* Subtitle and button in the foreground layer, pulled upwards to reduce distance */}
          <div className="relative z-20 flex flex-col items-center gap-3.5 mt-[220px] sm:mt-[250px] md:mt-[280px] w-full px-4">
            {/* Subtitle */}
            <p className="font-medium italic text-neutral-800 tracking-tight leading-relaxed max-w-2xl text-[13.4px] -translate-y-[2.5mm]">
              La plataforma digital enfocada a la comunitat maker i als espais de fabricació digital per ajudar a gestionar els seus residus i aprendre sobre sostenibilitat.
            </p>

            {/* Neobrutalist Double-Border CTA Button */}
            <div className="relative group inline-block cursor-pointer">
              {/* Shadow rectangle */}
              <div className="absolute inset-0 border-2 border-black bg-transparent translate-x-[6px] translate-y-[6px] transition-all duration-300 hover:!bg-black group-hover:!bg-black"></div>
              
              {/* Front button */}
              <Link 
                to="/assistant" 
                className="relative block border-2 border-black bg-[#fffcf6] text-black font-extrabold text-[17.4px] px-8 py-3.5 flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-x-[1px] hover:-translate-y-[1px] group-hover:-translate-x-[1px] group-hover:-translate-y-[1px]"
              >
                <span>Començar reciclatge</span>
                <span className="text-xl leading-none">➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Content Container below the Hero section */}
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col gap-24 z-20">
        
        {/* Grid Highlights Section */}
        <section className="flex flex-col gap-8 w-full">
          <h2 className="font-bold text-xs uppercase tracking-widest border-b-2 border-black pb-2 text-black/75">
            // Objectius del Sistema
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="border-2 border-black bg-[#fffcf6] text-black p-6 flex flex-col gap-4"
                >
                  <div className="border-2 border-black p-2 w-fit bg-[#fffcf6] text-black">
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h3 className="font-bold text-base uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="font-medium text-xs text-neutral-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Overview Stats Block */}
        <section className="border-2 border-black grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black text-center bg-[#fffcf6] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-6">
            <div className="text-3xl font-black">154</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-2 font-bold">Persones Assessorades</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-black">12</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-2 font-bold">Centres Connectats</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-black">45</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-2 font-bold">Intercanvis Realitzats</div>
          </div>
        </section>

        {/* CTA Bottom Banner */}
        <section className="border-2 border-black p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-[#fffcf6] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold uppercase text-black">Estàs a punt per reduir la teva petjada de carboni?</h3>
            <p className="font-semibold text-xs text-neutral-600">Comença a registrar els teus residus de manera senzilla.</p>
          </div>
          <Link 
            to="/assistant" 
            className="flex items-center gap-2 border-2 border-black bg-black text-[#fffcf6] px-6 py-3 font-bold text-xs uppercase hover:bg-[#fffcf6] hover:text-black hover:border-black transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
          >
            <span>Anar a l'Assistent</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </section>
        
      </div>
    </div>
  );
}
