import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Knowledge() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(1);
  const [activeTechTab, setActiveTechTab] = useState('FDM / FFF');

  useEffect(() => {
    if (location.state && location.state.activeSection) {
      setActiveSection(location.state.activeSection);
    }
  }, [location.state]);

  const handleEnrere = () => {
    navigate('/');
  };

  const sections = [
    { id: 1, title: "1. Impacte Ocult" },
    { id: 2, title: "2. El mite del PLA" },
    { id: 3, title: "3. Disseny Conscient" },
    { id: 4, title: "4. Maquinària Local" },
    { id: 5, title: "5. Tecnologies i Materials" }
  ];

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
      <div className="max-w-4xl w-full mx-auto px-4 md:px-6 pt-2 pb-12 flex flex-col justify-start z-20 relative overflow-visible">
      
      {/* 1. Page Header (Hero Section - letters scaled 1.5x larger, then reduced by 10%) */}
      <div className="w-full h-[80px] sm:h-[100px] md:h-[120px] relative flex justify-center items-center overflow-visible z-0 mt-1">
        <img 
          src="/assets/aprofundeix-lletres.png" 
          alt="Aprofundeix" 
          className="absolute h-full w-auto object-contain pointer-events-none select-none z-0 origin-center scale-[0.608] sm:scale-[0.72] md:scale-[0.848]"
        />
      </div>

      {/* 2. Subtitle (Top margin reduced by 5mm/20px to compress vertical gap, centered horizontally with mx-auto) */}
      <p className="font-normal text-sm sm:text-base text-neutral-800 leading-relaxed text-center max-w-2xl mx-auto mt-[-28px] sm:mt-[-20px] md:mt-[-12px] z-20 relative italic">
        Formació i aprenentatge sobre sostenibilitat digital en espais de fabricació
      </p>

      {/* 2. Tab-based Sub-navigation Menu (Flat single rectangles with no shadows, responsive grid) */}
      <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full relative z-20 mt-5">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`border-2 border-black py-3 px-2 sm:px-4 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer select-none text-center rounded-none ${
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
      <div className="border-2 border-black bg-[#fffcf6] p-6 md:p-10 text-left flex flex-col gap-6 relative z-20 animate-fade-in min-h-[380px] mt-6">
        
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

        {/* SECTION 5: TECNOLOGIES I MATERIALS */}
        {activeSection === 5 && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="border-b-2 border-black pb-4">
              <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                5. TECNOLOGIES I MATERIALS
              </h2>
            </div>

            <p className="font-medium text-xs sm:text-sm text-neutral-800 leading-relaxed">
              Els espais de fabricació digital treballen amb un rang de materials molt ampli que cal analitzar individualment per entendre les seves propietats i la seva reciclabilitat. Tenint en compte que els residus principals són plàstics i fustes, a continuació es desglossen els materials segons la tecnologia utilitzada.
            </p>

            {/* Sub-tabs Navigation Menu */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full mt-2 relative z-20">
              {["FDM / FFF", "PBF", "SLA", "Tall Làser", "Fresat CNC", "Tall de Vinil"].map((tech) => {
                const isTechActive = activeTechTab === tech;
                return (
                  <button
                    key={tech}
                    onClick={() => setActiveTechTab(tech)}
                    className={`border border-black py-2 px-1 font-bold text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center transition-all duration-200 cursor-pointer select-none text-center rounded-none ${
                      isTechActive 
                        ? 'bg-black text-[#fffcf6] border-black' 
                        : 'bg-transparent text-black hover:bg-gray-100'
                    }`}
                  >
                    <span>{tech}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-tab Content Area */}
            <div className="flex flex-col gap-5 mt-4 p-5 border border-black bg-[#fffcf6]">
              {activeTechTab === 'FDM / FFF' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    És la tecnologia més estesa als espais de creació. Funciona fonent un filament de polímer termoplàstic capa per capa per construir una peça tridimensional.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PLA (Àcid Polilàctic)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        És un polímer <strong>d'origen biològic</strong> (fet de sucres i midons). S'utilitza massivament per a prototips perquè no és tòxic, requereix un <strong>65% menys d'energia</strong> per fabricar-se i genera un <strong>68% menys de gasos</strong> d'efecte hivernacle. Tot i això, és fràgil, s'estova a baixes temperatures i requereix un control tèrmic molt exacte. Encara que es ven com a "biodegradable", necessita <strong>instal·lacions de compostatge industrial</strong> (90 dies a 50-60 °C) i pot trigar fins a <strong>5 anys a degradar-se</strong> a la natura. Mecànicament es degrada ràpid: després de dos cicles de reciclatge <strong>perd fins a un 25% de resistència</strong>. Les opcions reals per reciclar-lo són reprocessar-lo al laboratori per a peces de baixa exigència (làmines, injecció) o separar-lo estrictament per enviar-lo a un <strong>Punt Verd o gestor especialitzat</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        ABS (Acrilonitril Butadiè Estirè)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        És un plàstic <strong>derivat del petroli</strong> molt utilitzat en la indústria per la seva tenacitat i resistència mecànica. És ideal per a peces funcionals sotmeses a estrès mecànic. El seu reciclatge a petita escala és altament desaconsellat perquè <strong>emet fums tòxics en fondre's</strong>. A nivell industrial aguanta bé fins a <strong>tres cicles de reciclatge</strong> si es barreja amb material verge, però al laboratori l'única opció de circularitat és <strong>dissoldre restes amb acetona</strong> per fer pasta adhesiva.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PETG (Tereftalat de Polietilè Glicotitzat)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Destaca per la seva <strong>resistència química</strong>, a la humitat i a l'impacte. A l'hora de reciclar-lo és un <strong>plàstic Tipus 7</strong>. Barrejar-lo amb PET pur (ampolles d'aigua comunes) <strong>arruïna el reciclatge d'aquest últim</strong>, acabant sovint a l'abocador. A més, <strong>absorbeix molta humitat</strong>. La millor opció local és assecar-lo bé i fer-ne planxes o filament nou, o portar els residus a la deixalleria com a <strong>plàstic especial</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        TPU (Poliuretà Termoplàstic)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Pertany a la família dels <strong>elastòmers</strong> i destaca per la flexibilitat. La seva naturalesa elàstica <strong>encalla les trituradores locals</strong>, fent gairebé impossible el seu reciclatge al laboratori. La via més eficaç és crear una <strong>"xarxa consorciada"</strong> entre diferents espais maker per acumular prou residu i enviar-lo a <strong>plantes industrials</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PC (Policarbonat)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Plàstic d'enginyeria transparent, rígid i <strong>extremadament resistent</strong> a l'impacte i a la calor. El seu reciclatge local és inviable: és <strong>massa dur per a les trituradores petites</strong> i perd dràsticament la resistència a la compressió. S'ha de <strong>gestionar externament</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTechTab === 'PBF' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    Aquesta tecnologia utilitza un làser per fondre i fusionar pols de polímer. La pols no fosa serveix de suport natural per a la peça.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        Nylon / PA12 (Poliamida)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        És el rei de la tecnologia PBF per la seva <strong>biocompatibilitat</strong> i resistència al desgast. Crea peces finals funcionals. El residu principal és la pols no fosa o semifusa. L'exposició prolongada a la calor <strong>"envelleix" tèrmicament</strong> la pols. Es pot reutilitzar barrejant un <strong>30-50% de pols verge</strong> amb la degradada, o bé <strong>convertir la pols sobrant en filament</strong> per a impressores FFF.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        TPU (Poliuretà Termoplàstic)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Pertany a la família dels <strong>elastòmers</strong> i destaca per la flexibilitat. La seva naturalesa elàstica <strong>encalla les trituradores locals</strong>, fent gairebé impossible el seu reciclatge al laboratori. La via més eficaç és crear una <strong>"xarxa consorciada"</strong> entre diferents espais maker per acumular prou residu i enviar-lo a <strong>plantes industrials</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTechTab === 'SLA' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    Utilitza llum UV per curar (endurir) líquids fotopolimeritzables capa per capa, aconseguint una precisió i un detall extrems.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        Resines Termoestables
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        A diferència dels plàstics comuns (que es fonen), aquestes resines líquides creen <strong>enllaços químics irreversibles</strong>. Això vol dir que si s'escalfen, <strong>se cremen, no es fonen</strong>. La seva naturalesa fa <strong>impossible re-fondre-les</strong>. El reciclatge mecànic industrial implica triturar les peces fallides fins a fer-ne pols per a <strong>càrrega estructural</strong>. L'Alcohol Isopropílic (IPA) usat per netejar es satura de resina tòxica; s'hauria de <strong>destil·lar per recuperar-ne el 85%</strong>, tractant la resta com a <strong>residu perillós</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTechTab === 'Tall Làser' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    Màquines que utilitzen un feix de llum d'alta potència per tallar o gravar planxes de materials plans.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        Cartró
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        És el <strong>material més recomanat</strong> i ecològic. S'ha de <strong>prioritzar sempre</strong> per a les primeres iteracions. El seu reciclatge és tan senzill com dipositar-lo al <strong>contenidor blau</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        Contraxapat
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Tauler format per múltiples capes de fusta natural unides amb adhesius. Té un <strong>alt impacte ambiental</strong> per les coles i resines que conté; si es barregen amb fusta natural neta, <strong>contaminen tot el procés</strong> de reciclatge. La prioritat és portar els residus a la deixalleria <strong>sense barrejar-los</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        MDF (Tauler de Fibra de Densitat Mitjana)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Creat aglutinant fibres de fusta i resines. L'adhesiu més comú és l'urea-formaldehid, que és <strong>cancerigen</strong> i dificulta enormement el reciclatge. La millor opció d'ús és buscar <strong>planxes NAF</strong> (sense formaldehid afegit) i portar els residus a la deixalleria per a processos industrials tancats.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PMMA (Metacrilat)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Termoplàstic rígid i transparent com el vidre. A nivell industrial es pot despolimeritzar <strong>recuperant el 97%</strong> del material, però a la realitat <strong>només el 10% mundial es recicla</strong>. Al laboratori, l'única via és <strong>optimitzar els talls</strong> per no generar mermes i portar els retalls a la deixalleria.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTechTab === 'Fresat CNC' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    Màquines de mecanitzat subtractiu que utilitzen broques rotatòries per rebaixar blocs de material i esculpir formes.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        Contraxapat
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Tauler format per múltiples capes de fusta natural unides amb adhesius. Té un <strong>alt impacte ambiental</strong> per les coles i resines que conté; si es barregen amb fusta natural neta, <strong>contaminen tot el procés</strong> de reciclatge. La prioritat és portar els residus a la deixalleria <strong>sense barrejar-los</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        MDF (Tauler de Fibra de Densitat Mitjana)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Creat aglutinant fibres de fusta i resines. L'adhesiu més comú és l'urea-formaldehid, que és <strong>cancerigen</strong> i dificulta enormement el reciclatge. La millor opció d'ús és buscar <strong>planxes NAF</strong> (sense formaldehid afegit) i portar els residus a la deixalleria per a processos industrials tancats.
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PMMA (Metacrilat)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        Termoplàstic rígid i transparent com el vidre. A nivell industrial es pot despolimeritzar <strong>recuperant el 97%</strong> del material, però a la realitat <strong>només el 10% mundial es recicla</strong>. Al laboratori, l'única via és <strong>optimitzar els talls</strong> per no generar mermes i portar els retalls a la deixalleria.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTechTab === 'Tall de Vinil' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="font-bold text-xs sm:text-sm text-neutral-800 leading-relaxed italic border-l-2 border-black pl-4">
                    Plotters amb una petita fulla rotatòria guiada per ordinador que talla patrons sobre rotlles de material prim adhesiu.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-xs sm:text-sm text-black uppercase tracking-wide">
                        PVC (Vinil Adhesiu)
                      </span>
                      <p className="font-medium text-xs text-neutral-700 leading-relaxed">
                        És el plàstic més utilitzat per a senyalística i adhesius. De la mateixa manera que les planxes rígides de PVC, el vinil adhesiu és <strong>impossible de reciclar a un espai maker</strong> i té un <strong>alt impacte per la seva toxicitat</strong> si es crema o es fon. Els retalls s'han de gestionar a la deixalleria. L'acció més sostenible és canviar-lo per opcions <strong>"PVC-Free Vinyl"</strong> (basades en PET o PP).
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* 4. Global Navigation Layout Element */}
      <div className="flex justify-start w-full relative z-20 mt-6">
        <button
          onClick={handleEnrere}
          className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 border-none bg-transparent cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Tornar a l'inici</span>
        </button>
      </div>

      </div>
    </section>
  );
}
