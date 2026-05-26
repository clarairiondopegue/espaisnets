import React from 'react';
import { MapPin, RefreshCw, Send, Filter } from 'lucide-react';

export default function Network() {
  const centers = [
    {
      name: "FabLab Barcelona",
      location: "Poblenou, Barcelona",
      type: "Recycle Hub & FabLab",
      materials: ["PLA", "PETG", "Acrílic (PMMA)"],
      machinery: ["Trituradora de Plàstic", "Extrusora de Filament", "Bobinadora"],
      status: "Actiu - Obert a Intercanvis",
      badge: "HUB RECEPTOR"
    },
    {
      name: "Maker Space Girona",
      location: "Girona Centre, Girona",
      type: "Espai Maker Associatiu",
      materials: ["PLA", "ABS", "TPU"],
      machinery: ["Impressores FDM", "Fresa CNC"],
      status: "Només Generació d'Excedents",
      badge: "DONANT"
    },
    {
      name: "Ateneu de Fabricació de Gràcia",
      location: "Gràcia, Barcelona",
      type: "Ateneu Públic de Fabricació",
      materials: ["PLA", "PETG", "Fusta de DM"],
      machinery: ["Premsa de Plàstic", "Talladora Làser"],
      status: "Recollida per Projectes Socials",
      badge: "EDUCATIU"
    }
  ];

  return (
    <div className="max-w-4xl w-full mx-auto px-6 py-16 flex flex-col gap-8 flex-grow z-20">
      
      {/* Page Header (Neobrutalist White Paper Card) */}
      <div className="bg-[#fffcf6] border-2 border-black p-6 flex flex-col gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="font-bold text-xs uppercase tracking-wider text-neutral-500">// Xarxa Maker Col·laborativa</div>
        <h1 className="font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-black">
          Xarxa Maker de Materials
        </h1>
        <p className="font-medium text-xs text-neutral-700 max-w-3xl leading-relaxed">
          Connecta't amb FabLabs, Maker Spaces i tallers del territori. Troba centres que processen plàstic, ofereixen serveis de trituració de peces fallides o disposen d'excedents de filaments per a intercanvi.
        </p>
      </div>

      {/* Filter and Status Header (Neobrutalist Opaque White Card) */}
      <div className="border-2 border-black p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#fffcf6] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-wrap items-center gap-2 font-bold text-xs">
          <Filter className="w-4 h-4 text-black stroke-[2.5]" />
          <span className="text-black uppercase">Filtrar per:</span>
          <button className="border-2 border-black px-2.5 py-0.5 bg-black text-[#fffcf6] font-bold text-[10px] uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)]">Tots</button>
          <button className="border-2 border-black px-2.5 py-0.5 bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-bold text-[10px] uppercase transition-colors duration-200 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]">Hubs Receptors</button>
          <button className="border-2 border-black px-2.5 py-0.5 bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-bold text-[10px] uppercase transition-colors duration-200 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)]">Donants</button>
        </div>
        <div className="font-bold text-[9px] text-neutral-500 uppercase tracking-wider">
          S'estan mostrant 3 laboratoris actius
        </div>
      </div>

      {/* Maker Centers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {centers.map((center, index) => (
          <div 
            key={index} 
            className="border-2 border-black bg-[#fffcf6] text-black flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            {/* Header of the Card */}
            <div className="p-6 border-b-2 border-black flex flex-col gap-2 bg-[#fffcf6]">
              <div className="flex justify-between items-center gap-2">
                <span className="font-bold border-2 border-black bg-black text-[#fffcf6] px-2 py-0.5 text-[9px] uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)]">
                  {center.badge}
                </span>
                <span className="text-[9px] text-neutral-500 uppercase flex items-center gap-0.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-black stroke-[2.5]" /> {center.location.split(',')[0]}
                </span>
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight leading-snug mt-2 text-black">
                {center.name}
              </h3>
              <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">{center.type}</p>
            </div>

            {/* Content of the Card */}
            <div className="p-6 flex flex-col gap-4 flex-grow bg-[#fffcf6]">
              {/* Materials managed */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">// Materials Gestionats:</span>
                <div className="flex flex-wrap gap-1">
                  {center.materials.map((mat, i) => (
                    <span key={i} className="border-2 border-black px-2 py-0.5 text-[9px] bg-[#fffcf6] font-bold text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Machinery / Capabilities */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">// Maquinària de Reciclatge:</span>
                <ul className="text-[10px] text-neutral-600 list-disc list-inside space-y-0.5 font-semibold">
                  {center.machinery.map((mach, i) => (
                    <li key={i}>{mach}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer / Actions of the Card */}
            <div className="p-6 border-t-2 border-black bg-[#fffcf6] flex flex-col gap-3">
              <div className="text-[9px] flex items-center gap-1.5 text-black font-extrabold">
                <RefreshCw className="w-3.5 h-3.5 text-black stroke-[2.5] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="uppercase text-[9px] tracking-wide">{center.status}</span>
              </div>
              
              <button 
                onClick={() => alert(`Connectant amb ${center.name}... (Missatgeria de xarxa en desenvolupament)`)}
                className="w-full border-2 border-black bg-[#fffcf6] hover:bg-black hover:text-[#fffcf6] text-black font-bold text-xs uppercase py-2.5 px-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              >
                <span>Sol·licitar Enllaç</span>
                <Send className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
