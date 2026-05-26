import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Knowledge() {
  const [activeSection, setActiveSection] = useState(1);
  const navigate = useNavigate();

  const handleEnrere = () => {
    navigate('/');
  };

  const sections = [
    { id: 1, title: "1. Impacte Ocult" },
    { id: 2, title: "2. El mite del PLA" },
    { id: 3, title: "3. Disseny Conscient" },
    { id: 4, title: "4. Maquinària Local" }
  ];

  return (
    <div className="max-w-4xl w-full mx-auto px-4 md:px-6 py-12 flex flex-col gap-8 flex-grow z-20">
      
      {/* 1. Header Section */}
      <div className="flex flex-col gap-3 text-left w-full relative z-20 mt-2">
        <img 
          src="/assets/aprofundeix-lletres.png" 
          alt="Aprofundeix" 
          className="h-[63px] sm:h-[84px] md:h-[105px] w-auto object-contain pointer-events-none select-none self-start"
        />
        <p className="font-semibold text-xs text-neutral-500 uppercase tracking-widest leading-relaxed">
          // Formació i aprenentatge sobre sostenibilitat digital en espais de fabricació
        </p>
      </div>

      {/* 2. Tab-based Sub-navigation Menu (Flat single rectangles with no shadows) */}
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full relative z-20">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`border-2 border-black py-3 px-4 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer select-none text-center rounded-none ${
                isActive 
                  ? 'bg-black text-[#fffcf6] border-black' 
                  : 'bg-[#fffcf6] text-black hover:bg-neutral-50'
              }`}
            >
              <span>{sec.title}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. Main Content Card (Flat container with no double-rectangle shadow) */}
      <div className="border-2 border-black bg-[#fffcf6] p-6 md:p-10 text-left flex flex-col gap-6 relative z-20 animate-fade-in min-h-[380px]">
        
        {/* CONDITIONAL RENDERED SECTIONS */}

        {/* SECTION 1: L'IMPACTE OCULT */}
        {activeSection === 1 && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4">
              <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                L'IMPACTE OCULT DEL MOVIMENT MAKER
              </h2>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Els Ateneus de Fabricació i FabLabs són motors increïbles d'innovació i educació. Democratitzen la creació i ens permeten desenvolupar habilitats en noves tecnologies pero, tot i la forta consciència ecològica de la comunitat, sovint passem per alt un efecte secundari silenciós: la gran quantitat de residus que generem.
            </p>

            {/* Metrics Grid (Flat cards with no shadows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2">
              {/* Card A */}
              <div className="border-2 border-black p-5 bg-[#fffcf6] flex flex-col gap-2.5">
                <span className="font-black text-3xl sm:text-4xl text-black">22%</span>
                <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                  de residus directes generats per prototips impresos en 3D (suports, impressions fallides, purgues i obsolescència). Gairebé la meitat d'aquests prototips es guarden als prestatges més d'un any abans de ser llançats.
                </p>
              </div>
              
              {/* Card B */}
              <div className="border-2 border-black p-5 bg-[#fffcf6] flex flex-col gap-2.5">
                <span className="font-black text-3xl sm:text-4xl text-black">37%</span>
                <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                  de pèrdues i residus generats de mitjana en projectes de tall làser, sumant-hi a més un alt consum energètic i fums de combustió.
                </p>
              </div>
              
              {/* Card C */}
              <div className="border-2 border-black p-5 bg-[#fffcf6] flex flex-col gap-2.5">
                <span className="font-black text-2xl sm:text-4xl text-black whitespace-nowrap">25% a 45%</span>
                <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                  d'excedents de fusta. El 25% del MDF esdevé deixalleria per errors de mecanitzat o retalls. En el contraxapat, les pèrdues assoleixen el 45% a nivell industrial i el 10% als tallers locals.
                </p>
              </div>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              A nivell global, el panorama és crític: ens enfrontem a una taxa de reciclatge de tan sols el 9% del plàstic mundial. Als espais maker, la gran majoria d'aquests residus no es reciclen per falta de programes propis. Això no obstant, la solució és a les nostres mans: plàstics, fustes i components es poden recuperar si apliquem les eines adequades.
            </p>
          </div>
        )}

        {/* SECTION 2: LA REALITAT DEL PLA */}
        {activeSection === 2 && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4">
              <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                LA REALITAT DEL PLA: ÉS REALMENT BIODEGRADABLE?
              </h2>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              El PLA (Àcid Polilàctic) està guanyant molta popularitat als espais de creació, i amb raó: és un polímer d'origen biològic que no emet gasos tòxics durant la impressió. A més, les dades de la seva producció són molt encoratjadores, ja que requereix un 65% menys d'energia i genera un 68% menys de gasos d'efecte hivernacle en comparació amb els plàstics tradicionals derivats del petroli.
            </p>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Aquesta intenció per part dels makers d'utilitzar materials sostenibles s'ha de mantenir i fomentar. Ara bé... fins a quin punt el PLA és realment biodegradable? Tot i la seva naturalesa biològica (prové de la polimerització de sucres i midons), presenta reptes importants per a la seva correcta eliminació al final de la seva vida útil que sovint es desconeixen.
            </p>

            {/* Centered Highlight Alert Card (Flat with no icon) */}
            <div className="border-2 border-black p-5 bg-[#fffcf6] flex items-center justify-center text-center my-1 select-none">
              <p className="font-extrabold text-sm sm:text-base text-black leading-snug">
                El PLA és compostable a nivell industrial en condicions de temperatura i humitat controlades.
              </p>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Moltes vegades es té la falsa creença que un residu de PLA desapareixerà ràpidament si es llença al medi ambient. La realitat és que per degradar-se necessita condicions molt específiques: requereix temperatures constants i elevades (entre 50 i 60 °C) durant un mínim de 90 dies. Condicions que només es donen en instal·lacions de compostatge industrial. A la natura, pot trigar de 3 a 5 anys a degradar-se.
            </p>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              La clau és assumir-ne la responsabilitat un cop la peça ja no serveix. Gràcies a processos com el reciclatge mecànic dins dels propis Ateneus (triturant-lo per fer-ne nou filament o noves peces) podem assegurar-nos que aquest material mantingui el seu impacte positiu.
            </p>
          </div>
        )}

        {/* SECTION 3: PENSAR ABANS DE FABRICAR */}
        {activeSection === 3 && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4">
              <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                PENSAR ABANS DE FABRICAR: L'EDUCACIÓ I EL DISSENY CONSCIENT
              </h2>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Els espais de creació tenen una relació directa i molt positiva amb l'educació. Són entorns ideals per adquirir habilitats tecnològiques on la imaginació i la creativitat es disparen. A través de teories d'aprenentatge com el constructivisme, el coneixement es genera a través del propi acte de fer (aprendre fent), i mitjançant el Design Thinking, les idees abstractes es tradueixen en productes tangibles.
            </p>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Aquests espais tenen un potencial enorme per impulsar el disseny sostenible gràcies a la producció local. No obstant això, actualment hi ha una gran mancança: si observem els requisits per obrir un espai de la xarxa oficial de Fab Labs, no n'hi ha cap de relacionat amb la sostenibilitat o la circularitat. Molts creadors no trien intencionadament materials respectuosos ni avaluen el seu impacte real per falta d'instruments tècnics.
            </p>

            <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-relaxed border-l-2 border-black pl-4 my-1 italic">
              Per conduir les decisions cap a la sostenibilitat, el disseny sostenible s'ha d'integrar des del primer esbós. El problema dels residus no comença a la impressora, comença a l'ordinador. Per avaluar la sostenibilitat d'un projecte abans de prémer el botó de fabricar, ens hem de fer aquestes preguntes clau:
            </p>

            {/* Brutalist Checklist */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-black mt-1.5 flex-shrink-0"></span>
                <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  <strong className="text-black font-extrabold uppercase text-[11px] sm:text-xs block mb-0.5">Selecció de materials:</strong>
                  Puc fer servir materials respectuosos amb el medi ambient (com biomaterials o cartró) o que estiguin disponibles localment?
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-black mt-1.5 flex-shrink-0"></span>
                <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  <strong className="text-black font-extrabold uppercase text-[11px] sm:text-xs block mb-0.5">Optimització del disseny:</strong>
                  He ajustat el disseny fent servir el programari adequat (laminar correctament, reduir suports) abans de la fabricació?
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-black mt-1.5 flex-shrink-0"></span>
                <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  <strong className="text-black font-extrabold uppercase text-[11px] sm:text-xs block mb-0.5">Eficiència de recursos:</strong>
                  He seleccionat la màquina i la tecnologia més adequades per a aquesta tasca concreta?
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 bg-black mt-1.5 flex-shrink-0"></span>
                <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  <strong className="text-black font-extrabold uppercase text-[11px] sm:text-xs block mb-0.5">Cicle de vida del prototip:</strong>
                  He considerat el nombre mínim d'iteracions necessàries per validar el prototip? Quines parts seran útils o es podran reciclar després de fer-hi les proves?
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: DE RESIDU A RECURS */}
        {activeSection === 4 && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4">
              <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                DE RESIDU A RECURS: LA REVOLUCIÓ DE LA MAQUINÀRIA LOCAL
              </h2>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Més enllà de les plataformes digitals d'informació, el repte tècnic de processar materials complexos ha impulsat una autèntica revolució tecnològica a petita escala. Durant els últims anys, han sorgit petites trituradores, extrusores i premses —tant comercials com de codi obert (Open Source)— que estan canviant les regles del joc. Aquestes màquines permeten tancar el cicle de vida dels residus plàstics sense sortir del propi laboratori, transformant la brossa en un recurs valuós.
            </p>

            {/* Three Machine Highlight Cards (Flat with no shadows or icon banners) */}
            <div className="flex flex-col gap-5 mt-2">
              {/* Card 1 */}
              <div className="border-2 border-black bg-[#fffcf6] w-full flex flex-col">
                <div className="border-b-2 border-black bg-black text-[#fffcf6] font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-4">
                  Triturar per començar el canvi
                </div>
                <p className="p-4 sm:p-5 font-medium text-xs text-neutral-700 leading-relaxed">
                  Plataformes globals com Precious Plastic han democratitzat aquest procés oferint plànols oberts per fabricar trituradores de baixa escala, assequibles i fàcils de muntar. D'altra banda, per als espais que busquen solucions comercials compactes existixen opcions d'alt rendiment com la trituradora de sobretaula '3Devo' o la potent 'GP20 Shredder'.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-black bg-[#fffcf6] w-full flex flex-col">
                <div className="border-b-2 border-black bg-black text-[#fffcf6] font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-4">
                  Crear nou filament: el cicle de la impressió 3D
                </div>
                <p className="p-4 sm:p-5 font-medium text-xs text-neutral-700 leading-relaxed">
                  Un cop tenim el plàstic reduït a petites escates (flakes), les extrusores de filament entren en acció. Aquests equips apliquen calor i pressió per fondre les escates i extruir un fil calibrat. Marques com Filabot, ARTME 3D o Extrudex són referents en aquest camp, permetent que un residu d'impressió es converti directament en filament de gran qualitat.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-2 border-black bg-[#fffcf6] w-full flex flex-col">
                <div className="border-b-2 border-black bg-black text-[#fffcf6] font-bold text-[10px] sm:text-xs uppercase tracking-wider py-2.5 px-4">
                  Transformació en planxes: la versatilitat de la calor
                </div>
                <p className="p-4 sm:p-5 font-medium text-xs text-neutral-700 leading-relaxed">
                  Sistemes com la Precious Plastic Sheetpress o la premsa R30 de CR Clarke —utilitzada amb èxit a l'Ateneu de Fabricació de la Fàbrica del Sol i al CircuLab— apliquen pressió i temperatura controlades sobre un motlle. El plàstic es fon en planxes rígides 100% reciclades ideals per volver a ser tallades al làser o fresades a la CNC.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. Global Navigation Layout Element */}
      <div className="flex justify-start w-full relative z-20">
        <button
          onClick={handleEnrere}
          className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 border-none bg-transparent cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Tornar a l'inici</span>
        </button>
      </div>

    </div>
  );
}
