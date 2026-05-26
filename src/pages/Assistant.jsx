import React from 'react';
import Questionari from '../components/Questionari';

export default function Assistant() {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center px-4 md:px-12 max-w-7xl mx-auto overflow-visible select-none">
      
      {/* Floating Collage Decorative Elements (Exact same positioning, dimensions and slants as Home.jsx, placed in z-0 to stay behind the questionnaire) */}
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

      <div className="max-w-[820px] w-full mx-auto px-6 py-16 flex flex-col justify-center flex-grow z-10 relative -translate-y-[1cm]">
        {/* Main Interactive Questionnaire Component */}
        <Questionari />
      </div>
    </section>
  );
}

