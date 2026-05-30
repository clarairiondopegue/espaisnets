import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, ChevronRight } from 'lucide-react';

const DECISION_TREE = {
  "steps": {
    "start": {
      "question": "De quina tecnologia prové el teu residu?",
      "options": [
        { "text": "Impressió FFF/FDM (Filament)", "next": "mono_multi", "techRoute": "fff_mat" },
        { "text": "Impressió PBF (Pols)", "next": "mono_multi", "techRoute": "pbf_state" },
        { "text": "Impressió SLA (Resina)", "next": "mono_multi", "techRoute": "sla_state" },
        { "text": "Tall làser", "next": "mono_multi", "techRoute": "laser_mat" },
        { "text": "Fresadora CNC", "next": "mono_multi", "techRoute": "cnc_mat" },
        { "text": "Talladora de vinil", "resultId": "vinil_res" },
        { "text": "No ho sé/Desconec l'origen del residu", "resultId": "contaminat_res" },
        { "text": "Altres", "customView": "altres_form" }
      ]
    },
    "mono_multi": {
      "question": "El residu està format per un sol material o és una barreja?",
      "description": "Entenem multimaterial com: Impressions de diferents materials, residus amb coles, inserts, helicoils, etc.",
      "options": [
        { "text": "Monomaterial", "dynamicNext": true },
        { "text": "Multimaterial", "customView": "multi_view" }
      ]
    },
    "fff_mat": {
      "question": "De quin material és?",
      "options": [
        { "text": "PLA", "resultId": "pla_res" },
        { "text": "PETG", "resultId": "petg_res" },
        { "text": "TPU", "resultId": "tpu_fff_res" },
        { "text": "ABS", "resultId": "abs_res" },
        { "text": "PC", "resultId": "pc_res" },
        { "text": "Altres", "customView": "altres_material_form" }
      ]
    },
    "pbf_state": {
      "question": "En quin estat es troba el residu?",
      "options": [
        { "text": "Sòlid (Peça impressa)", "next": "pbf_mat" },
        { "text": "Pols sobrant no fosa", "resultId": "pbf_viable_res" },
        { "text": "Pols semifusa", "resultId": "pbf_inutilitzable_res" },
        { "text": "Pols barrejada", "resultId": "pbf_inutilitzable_res" }
      ]
    },
    "pbf_mat": {
      "question": "De quin material és?",
      "options": [
        { "text": "TPU", "resultId": "pbf_solid_res" },
        { "text": "PA12/Nylon", "resultId": "pbf_solid_res" }, 
        { "text": "Altres", "customView": "altres_material_form" }
      ]
    },
    "sla_state": {
      "question": "En quin estat es troba el residu?",
      "options": [
        { "text": "Líquid / Fang i restes d'IPA", "resultId": "sla_liquid_res" },
        { "text": "Sòlid (Completament curat)", "resultId": "sla_solid_res" }
      ]
    },
    "laser_mat": {
      "question": "De quin material és?",
      "options": [
        { "text": "MDF i Contraxapat", "resultId": "mdf_res" },
        { "text": "PMMA - Metacrilat", "resultId": "pmma_res" },
        { "text": "Altres", "customView": "altres_material_form" }
      ]
    },
    "cnc_mat": {
      "question": "De quin material és?",
      "options": [
        { "text": "MDF i Contraxapat", "resultId": "cnc_mdf_res" },
        { "text": "PMMA - Metacrilat", "resultId": "cnc_pmma_res" },
        { "text": "Altres", "customView": "altres_material_form" }
      ]
    }
  },
  "results": {
    "pla_res": {
      "isFFF": true,
      "primaria": {
        "titol": "Reciclatge mecànic a nivell local",
        "descripcio": "Per reciclar-ho a nivell local es poden utilitzar trituradores, laminadores, injectors, etc.",
        "extra": "Recomanació: Deshumidificar el residu i barrejar PLA verge amb PLA reciclat per obtenir millors resultats."
      },
      "secundaries": [
        { "titol": "Enviar a gestors externs de reciclatge", "descripcio": "Grups o consorcis que agrupen el material per reciclar-lo a gran escala.", "linkAction": "Xarxa Maker" },
        { "titol": "Portar-ho al Punt Verd o Deixalleria", "descripcio": "Gestió municipal per a residus plàstics.", "btnAction": "Cercar Punts Verds" }
      ]
    },
    "abs_res": {
      "isFFF": true,
      "primaria": {
        "titol": "Reciclatge químic local",
        "descripcio": "Generar adhesiu (ABS juice) a partir de l'ABS diluint-lo amb acetona.",
        "extra": "Important: El reciclatge mecànic (tèrmic) local no és recomanable per l'expulsió de gasos tòxics."
      },
      "secundaries": [
        { "titol": "Enviar a gestors externs de reciclatge", "descripcio": "Gestió industrial i segura del material.", "linkAction": "Xarxa Maker" },
        { "titol": "Portar-ho al Punt Verd o Deixalleria", "descripcio": "Gestió municipal per a residus plàstics.", "btnAction": "Cercar Punts Verds" }
      ]
    },
    "petg_res": {
      "isFFF": true,
      "warning": "No barrejar el PETG amb PET perquè contamina tot el procés de reciclatge.",
      "primaria": {
        "titol": "Reciclatge mecànic a nivell local",
        "descripcio": "Per reciclar-ho a nivell local es poden utilitzar trituradores, laminadores, injectors, etc.",
        "extra": "Recomanació: Deshumidificar el residu i barrejar PETG verge amb PETG reciclat per obtenir millors resultats."
      },
      "secundaries": [
        { "titol": "Enviar a gestors externs de reciclatge", "descripcio": "Grups o consorcis que agrupen el material.", "linkAction": "Xarxa Maker" },
        { "titol": "Portar-ho al Punt Verd o Deixalleria", "descripcio": "Gestió municipal.", "btnAction": "Cercar Punts Verds" }
      ]
    },
    "tpu_fff_res": {
      "isFFF": true,
      "primaria": {
        "titol": "Enviar a gestors externs de reciclatge que generen filament",
        "descripcio": "No es recomanable reciclar el TPU a nivell local ja que la seva naturalesa flexible impedeix que es trituri i fongui bé. Existeixen gestors externs que reciclen el TPU per convertir-lo de nou en filament.",
        "linkAction": "Xarxa Maker"
      },
      "secundaries": [
        { "titol": "Portar-ho al Punt Verd o Deixalleria", "descripcio": "Gestió municipal.", "btnAction": "Cercar Punts Verds" }
      ]
    },
    "pc_res": {
      "isFFF": true,
      "primaria": {
        "titol": "Enviar a gestors externs de reciclatge per al seu reciclatge",
        "descripcio": "No es recomanable reciclar a nivell local el PC degut a les altes temperatures de fusió del material i la màquinaria industrial especialitzada. Existeixen gestors externs que reciclen el PC.",
        "linkAction": "Xarxa Maker"
      },
      "secundaries": [
        { "titol": "Portar-ho al Punt Verd o Deixalleria", "descripcio": "Gestió municipal.", "btnAction": "Cercar Punts Verds" }
      ]
    },
    "pbf_viable_res": {
      "primaria": {
        "titol": "Reutilització directa a la mateixa màquina",
        "descripcio": "La pols no fosa és viable per tornar a imprimir afegint entre un 30% i un 50% de material verge (taxa de refresc)."
      },
      "secundaries": [
        { 
          "titol": "Conversió a filament", 
          "descripcio": "Tant per PA12 com per TPU es pot transformar i extruir la pols sobrant en filament per a impressores FFF.", 
          "linkAction": "Xarxa Maker" 
        }
      ]
    },
    "pbf_inutilitzable_res": {
      "primaria": {
        "titol": "Portar-ho al Punt Verd o Deixalleria",
        "descripcio": "La pols semifusa o barrejada són inutilitzables per a la impressió i l'única via viable és descartar-les de forma segura.",
        "btnAction": "Cercar Punts Verds"
      }
    },
    "pbf_solid_res": {
      "primaria": {
        "titol": "Enviar a gestors externs de reciclatge",
        "descripcio": "A nivell local no es poden reciclar perquè són molt difícils de triturar: el TPU encalla les màquines i la PA12 és massa dura.",
        "linkAction": "Xarxa Maker"
      },
      "secundaries": [
        { 
          "titol": "Portar-ho al Punt Verd o Deixalleria (Incineració)", 
          "descripcio": "Com a darrera opció per al rebuig municipal.", 
          "btnAction": "Cercar Punts Verds" 
        }
      ]
    },
    "sla_liquid_res": {
      "warning": "L'alcohol IPA saturat i la resina líquida són residus perillosos. Prohibit llençar pel desguàs.",
      "primaria": {
        "titol": "Inactivació i Destil·lació Local",
        "descripcio": "La resina líquida s'ha de curar (solidificar) amb llum UV. L'alcohol IPA saturat es pot destil·lar a nivell local per recuperar l'alcohol net i separar-lo del fang de resina."
      },
      "secundaries": [
        { 
          "titol": "Punt Verd (Gestió de Residus Especials)", 
          "descripcio": "Si no es disposa de maquinària de destil·lació, cal portar-ho a la deixalleria com a residu tòxic.", 
          "btnAction": "Cercar Punts Verds" 
        }
      ]
    },
    "sla_solid_res": {
      "primaria": {
        "titol": "Enviar a gestors externs de reciclatge",
        "descripcio": "La resina curada és un material termoestable. Com que no es pot fondre, una opció de reciclatge possible és la seva trituració per generar farciment estructural."
      },
      "secundaries": [
        {
          "titol": "Portar-ho al Punt Verd o Deixalleria",
          "descripcio": "Pots portar el residu a la deixalleria o punt verd municipal de referència. Altrament, en ser un plàstic completament inert i no perillós un cop curat, es pot llençar de forma segura al contenidor del rebuig.",
          "btnAction": "Cercar Punts Verds"
        }
      ]
    },
    "mdf_res": {
      "primaria": {
        "titol": "Reutilització directa dels retalls sobrants",
        "descripcio": "La millor gestió passa per reutilitzar els retalls sobrants en altres projectes de tall làser"
      },
      "secundaries": [
        {
          "titol": "Portar-ho al punt verd o deixalleria",
          "descripcio": "Contenen coles i resines (urea-formaldehid), essent inviables per a reciclatge orgànic o compostatge a nivell local.",
          "btnAction": "Cercar Punts Verds"
        }
      ]
    },
    "pmma_res": {
      "eduText": "El reciclatge industrial del metacrilat permet una recuperació del 97% del monòmer MMA a temperatures relativament baixes.",
      "primaria": {
        "titol": "Reutilització directa dels retalls sobrants",
        "descripcio": "La millor gestió passa per reutilitzar els retalls sobrants en altres projectes de tall làser"
      },
      "secundaries": [
        {
          "titol": "Portar-ho al punt verd o deixalleria",
          "descripcio": "El reciclatge químic per obtenir PMMA pur (metacrilat) requereix processos industrials de piròlisi que no es poden realitzar al propi espai maker o taller.",
          "btnAction": "Cercar Punts Verds"
        }
      ]
    },
    "cnc_mdf_res": {
      "eduText": "La reutilització de MDF per obtenir plaques d'aïllament tèrmic i acústic ha demostrat ser factible, substituint materials com la llana mineral, poliestirè i poliuretà.",
      "primaria": {
        "titol": "Portar-ho al punt verd o deixalleria",
        "descripcio": "S’utilitzen diferents estratègies per a l'eliminació d'aquests residus, com la desintegració, el reciclatge de circuit tancat, la reutilització per reforçar materials compostos, la producció d'energia i la piròlisi.",
        "btnAction": "Cercar Punts Verds"
      }
    },
    "cnc_pmma_res": {
      "eduText": "El reciclatge industrial del metacrilat permet una recuperació del 97% del monòmer MMA a temperatures relativament baixes.",
      "primaria": {
        "titol": "Portar-ho al punt verd o deixalleria",
        "descripcio": "El reciclatge químic per obtenir PMMA pur (metacrilat) requereix processos industrials de piròlisi que no es poden realitzar al propi espai maker o taller.",
        "btnAction": "Cercar Punts Verds"
      }
    },
    "vinil_res": {
      "warning": "Els residus de PVC són tòxics i cal separar-los correctament.",
      "eduText": "Existeixen altres vinils més sostenibles lliures de PVC, com els basats en PET o PP.",
      "primaria": {
        "titol": "Portar-ho al punt verd o deixalleria",
        "descripcio": "El vinil (PVC) allibera gasos tòxics al escalfar-se i conté coles que fan inviable el seu reciclatge. La gestió més segura és dipositar-los al punt verd o deixalleria.",
        "btnAction": "Cercar Punts Verds"
      }
    },
    "contaminat_res": {
      "solucio": "Segregació al Punt Verd / Rebuig",
      "justificacio": "Risc extrem de contaminació creuada o trencament de ganivetes per inserts metàl·lics."
    }
  }
};

const getBreadcrumbLabel = (text) => {
  if (!text) return "";
  if (text.includes("FFF/FDM")) return "FFF";
  if (text.includes("PBF")) return "PBF";
  if (text.includes("SLA")) return "SLA";
  if (text.includes("làser")) return "Tall làser";
  if (text.includes("CNC")) return "CNC";
  if (text.includes("vinil")) return "Talladora de vinil";
  if (text.includes("No ho sé")) return "Desconegut";
  if (text.includes("Altres")) return "Altres";
  
  if (text === "Monomaterial") return "Monomaterial";
  if (text === "Multimaterial") return "Multimaterial";
  
  if (text.includes("Sòlid (Peça")) return "Sòlid";
  if (text.includes("Pols sobrant")) return "Pols no fosa";
  if (text.includes("Líquid")) return "Líquid";
  if (text.includes("Completament curat")) return "Sòlid";
  if (text.includes("MDF")) return "MDF/Contraxapat";
  if (text.includes("PMMA")) return "PMMA";
  
  return text;
};

export default function Questionari() {
  const navigate = useNavigate();
  const [isLanding, setIsLanding] = useState(true);
  const [currentStep, setCurrentStep] = useState('start');
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [customView, setCustomView] = useState(null);
  const [selectedTechRoute, setSelectedTechRoute] = useState(null);
  const [altresTecnologia, setAltresTecnologia] = useState('');
  const [altresMaterial, setAltresMaterial] = useState('');

  const resultScrollRef = React.useRef(null);
  const fallbackScrollRef = React.useRef(null);
  const optionsScrollRef = React.useRef(null);

  const [showResultScrollbar, setShowResultScrollbar] = useState(false);
  const [showFallbackScrollbar, setShowFallbackScrollbar] = useState(false);
  const [showOptionsScrollbar, setShowOptionsScrollbar] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (resultScrollRef.current) {
        setShowResultScrollbar(resultScrollRef.current.scrollHeight > resultScrollRef.current.clientHeight);
      }
      if (fallbackScrollRef.current) {
        setShowFallbackScrollbar(fallbackScrollRef.current.scrollHeight > fallbackScrollRef.current.clientHeight);
      }
      if (optionsScrollRef.current) {
        setShowOptionsScrollbar(optionsScrollRef.current.scrollHeight > optionsScrollRef.current.clientHeight);
      }
    };

    checkScroll();
    const timer = setTimeout(checkScroll, 100);
    
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [currentStep, result, customView]);

  const startQuiz = () => {
    setIsLanding(false);
    setCurrentStep('start');
    setHistory([]);
    setResult(null);
    setCustomView(null);
    setAltresTecnologia('');
    setAltresMaterial('');
    setSelectedTechRoute(null);
  };

  const handleOptionClick = (option) => {
    const label = getBreadcrumbLabel(option.text);
    const newHistory = [...history, { 
      step: currentStep, 
      customView: customView, 
      selectedTechRoute: selectedTechRoute,
      label: label 
    }];
    setHistory(newHistory);

    let nextTechRoute = selectedTechRoute;
    if (option.techRoute) {
      nextTechRoute = option.techRoute;
      setSelectedTechRoute(option.techRoute);
    }

    if (option.resultId) {
      setResult(DECISION_TREE.results[option.resultId]);
    } else if (option.customView) {
      setCustomView(option.customView);
    } else if (option.dynamicNext) {
      setCurrentStep(nextTechRoute);
      setCustomView(null);
    } else if (option.next) {
      setCurrentStep(option.next);
      setCustomView(null);
    }
  };

  const goBack = () => {
    if (result) {
      setResult(null);
      const prev = history[history.length - 1] || { step: 'start', customView: null, selectedTechRoute: null };
      setCurrentStep(prev.step || 'start');
      setCustomView(prev.customView || null);
      setSelectedTechRoute(prev.selectedTechRoute || null);
      setHistory(history.slice(0, -1));
    } else if (customView) {
      setCustomView(null);
      const prev = history[history.length - 1] || { step: 'start', customView: null, selectedTechRoute: null };
      setCurrentStep(prev.step || 'start');
      setCustomView(prev.customView || null);
      setSelectedTechRoute(prev.selectedTechRoute || null);
      setHistory(history.slice(0, -1));
    } else if (history.length > 0) {
      const prev = history[history.length - 1];
      setCurrentStep(prev.step || 'start');
      setCustomView(prev.customView || null);
      setSelectedTechRoute(prev.selectedTechRoute || null);
      setHistory(history.slice(0, -1));
    } else {
      setIsLanding(true);
      setCustomView(null);
      setSelectedTechRoute(null);
    }
  };

  const resetAll = () => {
    setIsLanding(true);
    setCurrentStep('start');
    setHistory([]);
    setResult(null);
    setCustomView(null);
    setAltresTecnologia('');
    setAltresMaterial('');
    setSelectedTechRoute(null);
  };

  const handleAltresSubmit = (e) => {
    e.preventDefault();
    if (altresTecnologia.trim()) {
      alert(`Gràcies! Hem registrat la tecnologia: "${altresTecnologia}". Treballarem per incloure-la a la plataforma.`);
      resetAll();
    }
  };

  const handleAltresMaterialSubmit = (e) => {
    e.preventDefault();
    if (altresMaterial.trim()) {
      alert(`Gràcies! Hem registrat el material: "${altresMaterial}". Treballarem per incloure-la a la plataforma.`);
      resetAll();
    }
  };

  const handleBreadcrumbClick = (index) => {
    const target = history[index];
    if (!target) return;
    
    setResult(null);
    setCurrentStep(target.step || 'start');
    setCustomView(target.customView || null);
    setSelectedTechRoute(target.selectedTechRoute || null);
    setHistory(history.slice(0, index));
  };

  const renderBreadcrumbs = () => {
    if (history.length === 0) return null;
    
    const activeItems = history
      .map((item, idx) => ({ ...item, originalIndex: idx }))
      .filter(item => item.label);
      
    if (activeItems.length === 0) return null;

    return (
      <p className="absolute top-4 left-8 md:top-5 md:left-12 font-normal text-xs uppercase tracking-wider text-[#9b968a] text-left flex flex-wrap items-center gap-1.5 z-10 select-none">
        {activeItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-neutral-400">/</span>}
            <button
              type="button"
              onClick={() => handleBreadcrumbClick(item.originalIndex)}
              className="hover:text-black hover:underline focus:outline-none bg-transparent border-none p-0 cursor-pointer font-normal text-xs uppercase tracking-wider text-neutral-500 transition-colors duration-200"
            >
              {item.label}
            </button>
          </React.Fragment>
        ))}
      </p>
    );
  };

  // 1. Landing introductory view matching mockup 2 exactly
  if (isLanding) {
    return (
      <div className="border-2 border-black grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#fffcf6] text-black">
        
        {/* Left Column: Assistent Reciclatge Letters Image with 5mm margins */}
        <div className="p-[5mm] flex items-center justify-center min-h-[200px] md:h-[432px] bg-[#fffcf6]">
          <img 
            src="/assets/assistent reciclatge lletres.png" 
            alt="Assistent Reciclatge" 
            className="w-full h-full object-contain pointer-events-none select-none scale-[1.5]"
          />
        </div>

        {/* Right Column: Information + Neobrutalist Button */}
        <div className="p-8 md:p-12 flex flex-col justify-between items-start min-h-[200px] md:h-[432px] bg-[#fffcf6]">
          <div className="flex flex-col gap-4 max-w-md my-auto">
            <p className="font-normal text-sm sm:text-base text-neutral-800 leading-relaxed italic text-left">
              Respon un qüestionari pas a pas per introduir els residus de fabricació digital al sistema i assignar-los el canal de gestió corresponent.
            </p>
            
            {/* Neobrutalist large button */}
            <div className="relative group inline-flex self-start mt-6 cursor-pointer" onClick={startQuiz}>
              {/* Background shadow box */}
              <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[6px] translate-y-[6px] transition-all duration-300 hover:!bg-black group-hover:!bg-black"></div>
              {/* Front button */}
              <button className="relative border-2 border-black bg-black text-[#fffcf6] font-extrabold text-xs sm:text-sm uppercase py-3.5 px-6 flex items-center gap-3 transition-all duration-300 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-[#fffcf6] hover:text-black group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] group-hover:bg-[#fffcf6] group-hover:text-black">
                <span>Qüestionari Guiat</span>
                <span className="text-base sm:text-lg leading-none">➔</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 2. Final Result page view
  if (result) {
    const isPlaResult = result === DECISION_TREE.results.pla_res;
    const isAbsResult = result === DECISION_TREE.results.abs_res;
    return (
      <div className="border-2 border-black grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#fffcf6] text-black relative">
        
        {isPlaResult && (
          <div 
            onClick={() => navigate('/knowledge', { state: { activeSection: 2 } })}
            className="hidden md:block absolute -left-[155px] lg:-left-[185px] top-[40px] w-[135px] lg:w-[155px] bg-[#e5c6e6] border border-black p-3.5 text-left -rotate-[13deg] cursor-pointer z-30 select-none"
          >
            <p className="font-medium text-[11px] lg:text-xs text-black leading-snug">
              Sabies que el PLA triga 5 anys a degradar-se en condicions normals?{' '}
              <span className="underline block mt-1">Més info -&gt;</span>
            </p>
          </div>
        )}

        {isAbsResult && (
          <div 
            onClick={() => navigate('/knowledge', { state: { activeSection: 5 } })}
            className="hidden md:block absolute -left-[155px] lg:-left-[185px] top-[40px] w-[135px] lg:w-[155px] bg-[#e5c6e6] border border-black p-3.5 text-left -rotate-[13deg] cursor-pointer z-30 select-none"
          >
            <p className="font-medium text-[11px] lg:text-xs text-black leading-snug">
              Sabies que l'ABS és considerat el material més contaminant d'impressió FDM?{' '}
              <span className="underline block mt-1">Més info -&gt;</span>
            </p>
          </div>
        )}

        {/* Left Column: Result Header and Començar de Nou */}
        <div className="relative p-8 md:p-12 flex flex-col justify-between items-start min-h-[240px] md:h-[432px] bg-[#fffcf6]">
          {renderBreadcrumbs()}
          <div className="flex flex-col gap-1 items-start w-full">
            <h2 className="font-extrabold text-2xl md:text-3xl leading-tight uppercase tracking-tight text-black text-left">
              Gestió recomanada
            </h2>
            <p className="font-medium text-xs text-neutral-600 leading-relaxed max-w-sm text-left">
              S'ha generat una via de tractament i reciclatge òptima d'acord amb la tecnologia i les especificacions del material introduït.
            </p>
          </div>

          {(result.isFFF || result.eduText) && (
            <div className="border-[1.5px] border-black p-4 bg-[#fffcf6] text-left flex flex-col gap-1 w-full mt-1">
              <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-[#a56aa6] flex items-center gap-1.5">
                💡 Ho sabies?
              </span>
              <p className="font-normal text-xs text-black leading-relaxed">
                {result.eduText || "Com a alternativa a la impressió FFF existeix la tecnologia FGF (Fused Granular Fabrication), que extrueix pellets de plàstic directament per fabricar peces, eliminant el procés de generació de filament i reduint l’impacte ambiental dràsticament."}
              </p>
            </div>
          )}

          {/* Go Back / Reset Button */}
          <button 
            onClick={goBack}
            className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 mt-3 border-none bg-transparent cursor-pointer"
          >
            <span>← Enrere</span>
          </button>
        </div>

        {/* Right Column: Solució and Justificació boxes or Overhauled FFF view */}
        {result.primaria ? (
          <div className="relative w-full h-full md:h-[432px] bg-[#fffcf6]">
            <div ref={resultScrollRef} className="pt-4 px-8 pb-8 md:pt-5 md:px-12 md:pb-12 flex flex-col justify-start gap-4 min-h-[240px] h-[calc(100%-24px)] my-3 overflow-y-auto w-full">

              {/* 2. Warning Card */}
              {result.warning && (
                <div className="border-2 border-[#ff4e4e] bg-[#fff0f0] p-4 text-left shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-1 w-full flex-shrink-0">
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-[#ff4e4e] flex items-center gap-1.5">
                    ⚠️ Atenció / Advertència
                  </span>
                  <p className="font-bold text-xs text-neutral-800 leading-relaxed">
                    {result.warning}
                  </p>
                </div>
              )}

              {/* 3. Primary Result Card */}
              <div className="border-2 border-[#4e6b48] bg-[#4e6b48] text-[#fffcf6] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex flex-col w-full overflow-hidden flex-shrink-0">
                <div className="border-t-2 border-x-2 border-b-2 border-black border-b-[#4e6b48] bg-[#fffcf6] text-black font-extrabold text-[9px] uppercase tracking-wider py-1.5 px-4 text-left -mt-[2px] -mx-[2px]">
                  {"// Via de gestió prioritària"}
                </div>
                <div className="pt-[6mm] px-5 pb-[6mm] flex flex-col gap-3 items-start">
                  <h3 className="font-black text-sm sm:text-base leading-snug uppercase tracking-tight text-[#fffcf6] text-left">
                    {result.primaria.titol}
                  </h3>
                  <p className="font-normal text-xs text-[#fffcf6] leading-relaxed text-left">
                    {result.primaria.descripcio}
                  </p>
                  {result.primaria.extra && (
                    <p className="font-normal text-xs text-[#fffcf6] italic leading-relaxed text-left border-l-2 border-[#fffcf6] pl-3 mt-1">
                      {result.primaria.extra}
                    </p>
                  )}
                  {result.primaria.linkAction === "Xarxa Maker" && (
                    <button
                      type="button"
                      onClick={() => navigate('/network', { state: { view: 'search_list' } })}
                      className="border-2 border-black bg-[#fffcf6] text-[#4e6b48] hover:bg-black hover:text-[#fffcf6] hover:border-black font-bold text-xs uppercase py-2 px-4 flex items-center gap-2 transition-all duration-200 mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer self-stretch text-center justify-center"
                    >
                      Buscar gestors externs ➔
                    </button>
                  )}
                  {result.primaria.btnAction === "Cercar Punts Verds" && (
                    <a
                      href="https://ajuntament.barcelona.cat/neteja-i-residus/ca/recollida-domestica/xarxa-de-punts-verds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black bg-[#fffcf6] text-[#4e6b48] hover:bg-black hover:text-[#fffcf6] hover:border-black font-bold text-xs uppercase py-2 px-4 flex items-center gap-2 transition-all duration-200 mt-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer self-stretch text-center justify-center"
                    >
                      Cercar Punts Verds ➔
                    </a>
                  )}
                </div>
              </div>

              {/* 4. "Altres opcions" Accordion */}
              {result.secundaries && result.secundaries.length > 0 && (
                <details className="w-full border-2 border-black bg-[#fffcf6] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group cursor-pointer text-left flex-shrink-0">
                  <summary className="font-extrabold text-xs uppercase tracking-wider p-3 select-none flex justify-between items-center hover:bg-black hover:text-[#fffcf6] transition-all duration-200">
                    <span>Altres opcions de gestió</span>
                    <span className="transition-transform duration-200 group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 border-t-[1.5px] border-black flex flex-col gap-4 bg-[#fffcf6] cursor-default">
                    {result.secundaries.map((sec, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-2 items-start text-left border-b-[1.5px] last:border-b-0 border-black pb-4 last:pb-0 w-full">
                        <h4 className="font-bold text-xs sm:text-sm text-black">{sec.titol}</h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">{sec.descripcio}</p>
                        {sec.btnAction === "Cercar Punts Verds" && (
                          <a
                            href="https://ajuntament.barcelona.cat/neteja-i-residus/ca/recollida-domestica/xarxa-de-punts-verds"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border-2 border-black bg-black text-[#fffcf6] hover:bg-[#fffcf6] hover:text-black font-bold text-[10px] uppercase py-1.5 px-3 transition-all duration-200 mt-1 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
                          >
                            Cercar Punts Verds ➔
                          </a>
                        )}
                        {sec.linkAction === "Xarxa Maker" && (
                          <button
                            type="button"
                            onClick={() => navigate('/network', { state: { view: 'search_list' } })}
                            className="inline-flex items-center gap-1.5 border-2 border-black bg-black text-[#fffcf6] hover:bg-[#fffcf6] hover:text-black font-bold text-[10px] uppercase py-1.5 px-3 transition-all duration-200 mt-1 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
                          >
                            Buscar gestors externs ➔
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              )}

              {/* 5. Restart Quiz Button */}
              <button
                onClick={resetAll}
                className="border-2 border-black bg-black text-[#fffcf6] hover:bg-[#fffcf6] hover:text-black font-bold text-xs uppercase py-2.5 px-4 w-full flex items-center justify-center gap-2 transition-all duration-200 mt-[6px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer flex-shrink-0"
              >
                <RefreshCw className="w-4 h-4 stroke-[2.5]" />
                <span>Gestionar un altre residu</span>
              </button>
            </div>
            {/* Scrollbar arrows */}
            {showResultScrollbar && (
              <>
                <div className="absolute right-0 top-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-black pointer-events-none z-30"></div>
                <div className="absolute right-0 bottom-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-black pointer-events-none z-30"></div>
              </>
            )}
          </div>
        ) : (
          <div className="relative w-full h-full md:h-[432px] bg-[#fffcf6]">
            <div ref={fallbackScrollRef} className="pt-4 px-8 pb-8 md:pt-5 md:px-12 md:pb-12 flex flex-col justify-start gap-4 min-h-[240px] h-[calc(100%-24px)] my-3 overflow-y-auto w-full">
              
              {/* Solution Alert Box */}
              <div className="border-2 border-black bg-black text-[#fffcf6] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex flex-col w-full">
                <div className="border-b-[1.5px] border-black bg-[#fffcf6] text-black font-extrabold text-[9px] uppercase tracking-wider py-1.5 px-4 text-left">
                  {"// Canvi de canal generat"}
                </div>
                <div className="p-5 font-black text-sm sm:text-base leading-snug text-left">
                  {result.solucio}
                </div>
              </div>

              {/* Justification Box */}
              <div className="flex flex-col gap-2 items-start w-full">
                <span className="font-extrabold text-[9px] uppercase tracking-wider text-neutral-400">{"// Justificació Tècnica:"}</span>
                <div className="border-2 border-black p-4 bg-[#fffcf6] text-black text-xs font-semibold leading-relaxed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left w-full">
                  {result.justificacio}
                </div>
              </div>

              {/* Interactive Extra: Restart Quiz / Manage Another Waste Button */}
              <button
                onClick={resetAll}
                className="border-2 border-black bg-black text-[#fffcf6] hover:bg-[#fffcf6] hover:text-black font-bold text-xs uppercase py-2.5 px-4 w-full flex items-center justify-center gap-2 transition-all duration-200 mt-[6px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 stroke-[2.5]" />
                <span>Gestionar un altre residu</span>
              </button>
            </div>
            {/* Scrollbar arrows */}
            {showFallbackScrollbar && (
              <>
                <div className="absolute right-0 top-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-black pointer-events-none z-30"></div>
                <div className="absolute right-0 bottom-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-black pointer-events-none z-30"></div>
              </>
            )}
          </div>
        )}

      </div>
    );
  }

  // 2.5 Custom Altres Form view
  if (customView === 'altres_form') {
    return (
      <div className="border-2 border-black grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#fffcf6] text-black">
        {/* Left Column: Custom Altres Form Header and Message */}
        <div className="relative p-8 md:p-12 flex flex-col justify-between items-start min-h-[176px] md:h-[432px] bg-[#fffcf6]">
          {renderBreadcrumbs()}
          <div className="flex flex-col gap-4 mt-2 items-start w-full">
            {/* Header Label: distinct box/badge */}
            <div className="border-2 border-black bg-black text-[#fffcf6] px-3 py-1 text-xs font-black uppercase tracking-wider select-none">
              ALTRES
            </div>
            <p className="font-normal text-xs sm:text-sm text-neutral-800 leading-relaxed max-w-sm mt-2 text-left">
              Ho sentim, no tenim dades sobre tecnologies fora de la llista. Si vols pots introduir la tecnologia de la qual prové el teu residu i treballarem per incloure-la a la plataforma.
            </p>
          </div>

          {/* Go Back button */}
          <button 
            onClick={goBack}
            className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 mt-8 border-none bg-transparent cursor-pointer"
          >
            <span>← Enrere</span>
          </button>
        </div>

        {/* Right Column: Form fields */}
        <form onSubmit={handleAltresSubmit} className="p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[176px] md:h-[432px] bg-[#fffcf6] w-full">
          <div className="flex flex-col gap-2 items-start">
            <label className="font-extrabold text-[9px] uppercase tracking-wider text-neutral-400">{"// Tecnologia sugerida:"}</label>
            <input 
              type="text" 
              placeholder="Ex: Impressió de cera, filosa, etc." 
              value={altresTecnologia}
              onChange={(e) => setAltresTecnologia(e.target.value)}
              className="w-full bg-[#fffcf6] border-2 border-black py-3 px-4 text-black placeholder-neutral-500 font-semibold text-xs sm:text-sm focus:bg-black focus:text-[#fffcf6] focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full text-center py-4 px-8 border-2 border-black bg-[#fffcf6] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-black hover:text-[#fffcf6] transition-all duration-200 cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }

  // 2.6 Custom Altres Material Form view
  if (customView === 'altres_material_form') {
    return (
      <div className="border-2 border-black grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#fffcf6] text-black">
        {/* Left Column: Custom Altres Material Form Header and Message */}
        <div className="relative p-8 md:p-12 flex flex-col justify-between items-start min-h-[176px] md:h-[432px] bg-[#fffcf6]">
          {renderBreadcrumbs()}
          <div className="flex flex-col gap-4 mt-2 items-start w-full">
            {/* Header Label: distinct box/badge */}
            <div className="border-2 border-black bg-black text-[#fffcf6] px-3 py-1 text-xs font-black uppercase tracking-wider select-none">
              ALTRES
            </div>
            <p className="font-normal text-xs sm:text-sm text-neutral-800 leading-relaxed max-w-sm mt-2 text-left">
              Ho sentim, no tenim dades sobre materials fora de la llista. Si vols, pots introduir el teu material i treballarem per incloure'l a la plataforma.
            </p>
          </div>

          {/* Go Back button */}
          <button 
            onClick={goBack}
            className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 mt-8 border-none bg-transparent cursor-pointer"
          >
            <span>← Enrere</span>
          </button>
        </div>

        {/* Right Column: Form fields */}
        <form onSubmit={handleAltresMaterialSubmit} className="p-8 md:p-12 flex flex-col justify-center gap-6 min-h-[176px] md:h-[432px] bg-[#fffcf6] w-full">
          <div className="flex flex-col gap-2 items-start">
            <label className="font-extrabold text-[9px] uppercase tracking-wider text-neutral-400">{"// Material sugerit:"}</label>
            <input 
              type="text" 
              placeholder="Ex: Alumini, PLA amb fusta, etc." 
              value={altresMaterial}
              onChange={(e) => setAltresMaterial(e.target.value)}
              className="w-full bg-[#fffcf6] border-2 border-black py-3 px-4 text-black placeholder-neutral-500 font-semibold text-xs sm:text-sm focus:bg-black focus:text-[#fffcf6] focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full text-center py-4 px-8 border-2 border-black bg-[#fffcf6] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-black hover:text-[#fffcf6] transition-all duration-200 cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }

  // 3. Active Step view matching mockup 1 exactly
  const stepData = DECISION_TREE.steps[currentStep];

  return (
    <div className="border-2 border-black grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#fffcf6] text-black">
      
      {/* Left Column: Bold Montserrat Question, Optional Description, and Go Back */}
      <div className="relative p-8 md:p-12 flex flex-col justify-between items-start min-h-[176px] md:h-[432px] bg-[#fffcf6]">
        {renderBreadcrumbs()}
        <div className="flex flex-col gap-2 max-w-sm mt-4 items-start w-full">
          <h2 className="font-extrabold text-[19.2px] md:text-[24px] leading-tight uppercase tracking-tight text-black text-left">
            {stepData.question}
          </h2>
          {stepData.description && (
            <p className="font-normal text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2 text-left">
              {stepData.description}
            </p>
          )}
        </div>

        {/* Go Back button */}
        <button 
          onClick={goBack}
          className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 mt-8 border-none bg-transparent cursor-pointer"
        >
          <span>← Enrere</span>
        </button>
      </div>

      {/* Right Column: Stack of answers or Custom multi_view */}
      {customView === 'multi_view' ? (
        <div className="p-8 md:p-12 flex flex-col justify-center items-start gap-6 min-h-[240px] md:h-[432px] bg-[#fffcf6] w-full h-full">
          {/* Header Badge */}
          <div className="border-2 border-black bg-black text-[#fffcf6] px-3 py-1 text-xs font-black uppercase tracking-wider select-none self-start">
            Multimaterial
          </div>

          {/* Text Block 1 */}
          <p className="font-normal text-xs sm:text-sm text-neutral-800 leading-relaxed text-left">
            Per poder gestionar el residu correctament, és necessari tenir el material pur. Si és possible separar els diferents materials del residu, si us plau, separa'ls i continua el qüestionari.
          </p>

          {/* Neobrutalist Button: Continuar */}
          <div className="relative group inline-flex self-start cursor-pointer" onClick={() => handleOptionClick({ dynamicNext: true })}>
            {/* Background shadow box */}
            <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[6px] translate-y-[6px] transition-all duration-300 hover:!bg-black group-hover:!bg-black"></div>
            {/* Front button */}
            <button className="relative border-2 border-black bg-black text-[#fffcf6] font-extrabold text-xs sm:text-sm uppercase py-3 px-6 flex items-center gap-2 transition-all duration-300 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:bg-[#fffcf6] hover:text-black group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] group-hover:bg-[#fffcf6] group-hover:text-black cursor-pointer">
              <span>Continuar</span>
              <span className="text-sm sm:text-base leading-none">➔</span>
            </button>
          </div>

          {/* Text Block 2 */}
          <p className="font-normal text-xs sm:text-sm text-neutral-600 leading-relaxed text-left italic">
            Si no t'és possible separar els materials, l'única gestió viable és llençar-ho al contenidor del rebuig.
          </p>
        </div>
      ) : (
        <div className="relative w-full h-full md:h-[432px] bg-[#fffcf6]">
          <div ref={optionsScrollRef} className="flex flex-col justify-start h-[calc(100%-24px)] my-3 overflow-y-auto w-full">
            {stepData.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left py-[18px] px-8 font-medium text-xs sm:text-sm tracking-tight text-black bg-[#fffcf6] border-b-[1.5px] border-black hover:bg-black hover:text-[#fffcf6] hover:italic hover:pl-10 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-between group"
              >
                <span>{option.text}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 stroke-[2.5]" />
              </button>
            ))}
          </div>
          {/* Scrollbar arrows */}
          {showOptionsScrollbar && (
            <>
              <div className="absolute right-0 top-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-black pointer-events-none z-30"></div>
              <div className="absolute right-0 bottom-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-black pointer-events-none z-30"></div>
            </>
          )}
        </div>
      )}

    </div>
  );
}
