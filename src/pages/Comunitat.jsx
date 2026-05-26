import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Filter, ArrowLeft, ArrowRight, Camera, User } from 'lucide-react';

export default function Comunitat() {
  const location = useLocation();
  const [view, setView] = useState(location.state?.view || 'main'); // 'main', 'join_form', 'search_list'

  useEffect(() => {
    if (location.state?.view) {
      setView(location.state.view);
    }
  }, [location.state]);

  const [creators, setCreators] = useState([
    { 
      name: "CircuLab.", 
      description: "Espai dedicat a la economia circular i el reciclatge. Disposem de maquinària per a la gestió de residus plàstics, fustes, material electrònic, etc.",
      avatarColor: "bg-blue-100 text-blue-600 border-blue-400"
    },
    { 
      name: "Plaxtic Solutions.", 
      description: "Projecte per crear nous objectes a partir d'impressió 3D amb plàstic reciclat. Reutilitza residus per donar-los una segona vida útil.",
      avatarColor: "bg-emerald-100 text-emerald-600 border-emerald-400"
    },
    { 
      name: "Reciclem Tèxtil.", 
      description: "Projecte que recull residus de teles i roba i el transforma per crear nous productes com bosses o articles de la llar.",
      avatarColor: "bg-purple-100 text-purple-600 border-purple-400"
    },
    { 
      name: "Maker de fusta.", 
      description: "Busco espai per exposar la meva feina i trobar col·laboradors per crear objectes amb fusta. Coneix els meus projectes i contacta amb mi.",
      avatarColor: "bg-amber-100 text-amber-600 border-amber-400"
    }
  ]);

  // Form states
  const [nom, setNom] = useState('');
  const [descripcio, setDescripcio] = useState('');
  const [motiu, setMotiu] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim() || !descripcio.trim() || !motiu.trim()) {
      alert("Si us plau, emplena tots els camps obligatoris (*).");
      return;
    }

    const newCreator = {
      name: nom.endsWith('.') ? nom : `${nom}.`,
      description: `${descripcio} Motiu de col·laboració: ${motiu}`,
      avatarColor: "bg-rose-100 text-rose-600 border-rose-400",
      photo: photoPreview
    };

    setCreators([newCreator, ...creators]);
    alert("Moltes gràcies! T'has unit a la comunitat de creadors.");
    
    // Reset form fields
    setNom('');
    setDescripcio('');
    setMotiu('');
    setPhotoPreview(null);
    
    // Redirect to list view
    setView('search_list');
  };

  const handleEnrere = () => {
    if (view === 'main') {
      navigate('/');
    } else {
      setView('main');
    }
  };

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-start px-4 md:px-12 max-w-7xl mx-auto overflow-visible select-none pb-12 pt-2">
      
      {/* Floating Collage Decorative Elements (z-10 to be on top of comunitat-lletres but behind the cards at z-20) */}
      <img 
        src="/assets/wooden-letters.png" 
        alt="Wooden letters decoration" 
        className="absolute top-[30px] right-[-10px] sm:right-[-14px] md:right-[-17px] lg:right-[-21px] xl:right-[-25px] w-[50px] sm:w-[70px] md:w-[85px] lg:w-[105px] xl:w-[125px] pointer-events-none select-none z-10"
      />
      <img 
        src="/assets/crumpled-paper.png" 
        alt="Crumpled paper decoration" 
        className="absolute top-[180px] left-[-13px] sm:left-[-18px] md:left-[-22px] lg:left-[-26px] xl:left-[-30px] w-[44px] sm:w-[60px] md:w-[72px] lg:w-[88px] xl:w-[100px] pointer-events-none select-none z-10"
      />
      <img 
        src="/assets/wood-scraps.png" 
        alt="Wood scraps decoration" 
        className="absolute bottom-[40px] left-[3%] sm:left-[8%] w-[95px] sm:w-[133px] md:w-[162px] lg:w-[200px] xl:w-[238px] pointer-events-none select-none z-10"
      />
      <img 
        src="/assets/3d-print.png" 
        alt="3D print benchy decoration" 
        className="absolute bottom-[40px] right-0 sm:right-[10px] md:right-[20px] lg:right-[30px] xl:right-[40px] w-[116px] sm:w-[160px] md:w-[193px] lg:w-[237px] xl:w-[281px] rotate-[10deg] pointer-events-none select-none z-10"
      />

      <div className="max-w-[820px] w-full mx-auto px-2 md:px-6 pt-2 pb-12 flex flex-col justify-start z-20 relative overflow-hidden">
        
        {/* VIEW 1: MAIN HUB */}
        {view === 'main' && (
          <div className="flex flex-col items-center w-full animate-fade-in z-20 relative">
            
            {/* 1. Top Element: Letters in Collage Format inside a fixed-height container to prevent shifting other elements when scaled */}
            <div className="w-full h-[80px] sm:h-[100px] md:h-[120px] relative flex justify-center items-center overflow-visible z-0 mt-4">
              <img 
                src="/assets/comunitat-lletres.png" 
                alt="Comunitat" 
                className="absolute h-full w-auto object-contain pointer-events-none select-none z-0 origin-center scale-[0.56] sm:scale-[0.672] md:scale-[0.784]"
              />
            </div>

            {/* 2. Subtitle - placed below the letters container with top margin to account for visual overflow of scaled letters */}
            <p className="font-normal text-sm sm:text-base text-neutral-800 leading-relaxed text-center max-w-2xl mt-[-4px] sm:mt-[4px] md:mt-[12px] z-20 relative">
              Col·labora amb altres creadors i troba noves formes d'allargar la vida útil dels teus residus
            </p>

            {/* 3. Two Main Cards Grid - placed below subtitle with a 5mm reduced (mt-3) margin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-3 z-20 relative">
              
              {/* Left Card: Buscar Creadors */}
              <div 
                onClick={() => setView('search_list')}
                className="border-2 border-black bg-[#fffcf6] text-black p-8 flex flex-col justify-between items-start cursor-pointer transition-all duration-300 group min-h-[260px] relative z-20"
              >
                <div className="flex flex-col gap-3 text-left">
                  <h3 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight transition-colors duration-300">
                    Vols trobar noves relacions professionals?
                  </h3>
                  <p className="font-medium text-xs sm:text-sm text-neutral-700 leading-relaxed transition-colors duration-300">
                    Busca creadors que s'ajustin al que necessites i contacta amb ells per crear noves sinèrgies
                  </p>
                </div>

                {/* Neobrutalist Button inside Left Card */}
                <div className="relative group/btn inline-flex w-full mt-6">
                  {/* Hollow offset shadow box (cream background, black border only) */}
                  <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[4px] translate-y-[4px] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-all duration-200"></div>
                  <button className="relative w-full border-2 border-black bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-bold text-xs uppercase py-3 px-6 flex items-center justify-between transition-all duration-200">
                    <span>BUSCAR CREADORS</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Right Card: Unir-se a la Comunitat */}
              <div 
                onClick={() => setView('join_form')}
                className="border-2 border-black bg-[#fffcf6] text-black p-8 flex flex-col justify-between items-start cursor-pointer transition-all duration-300 group min-h-[260px] relative z-20"
              >
                <div className="flex flex-col gap-3 text-left">
                  <h3 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight transition-colors duration-300">
                    Estàs obert@ a noves oportunitats?
                  </h3>
                  <p className="font-medium text-xs sm:text-sm text-neutral-700 leading-relaxed transition-colors duration-300">
                    Introdueix una descripció del teu perfil i les teves motivacions i fes que altres usuaris puguin conèixer-te i connectar amb tu
                  </p>
                </div>

                {/* Neobrutalist Button inside Right Card */}
                <div className="relative group/btn inline-flex w-full mt-6">
                  {/* Hollow offset shadow box (cream background, black border only) */}
                  <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[4px] translate-y-[4px] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-all duration-200"></div>
                  <button className="relative w-full border-2 border-black bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-bold text-xs uppercase py-3 px-6 flex items-center justify-between transition-all duration-200">
                    <span>UNIR-SE A LA COMUNITAT</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: JOIN COMMUNITY FORM */}
        {view === 'join_form' && (
          <div className="w-full flex flex-col gap-4 animate-fade-in">
            
            {/* Form Neobrutalist Box */}
            <div className="border-2 border-black bg-[#fffcf6] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
              
              {/* Header inside the box */}
              <div className="border-b-2 border-black py-4 px-6 text-left">
                <h2 className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-black">
                  UNIR-SE A LA COMUNITAT
                </h2>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Inputs Left Column */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  
                  {/* Nom Input */}
                  <div className="flex flex-col gap-1 items-start">
                    <input 
                      type="text" 
                      placeholder="...Nom propi o de l'espai de fabricació*" 
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="w-full bg-[#fffcf6] border-2 border-black py-3.5 px-4 text-black placeholder-neutral-500 font-semibold text-xs sm:text-sm focus:bg-black focus:text-[#fffcf6] focus:placeholder-neutral-400 focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Descripció Textarea */}
                  <div className="flex flex-col gap-1 items-start">
                    <textarea 
                      placeholder="...Breu descripció de l'espai*" 
                      value={descripcio}
                      onChange={(e) => setDescripcio(e.target.value)}
                      rows={5}
                      className="w-full bg-[#fffcf6] border-2 border-black py-3.5 px-4 text-black placeholder-neutral-500 font-semibold text-xs sm:text-sm focus:bg-black focus:text-[#fffcf6] focus:placeholder-neutral-400 focus:outline-none transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  {/* Motiu de col·laboració Textarea */}
                  <div className="flex flex-col gap-1 items-start">
                    <textarea 
                      placeholder="... Amb qui vols col·laborar? Motiu de la unió a la comunitat*" 
                      value={motiu}
                      onChange={(e) => setMotiu(e.target.value)}
                      rows={3}
                      className="w-full bg-[#fffcf6] border-2 border-black py-3.5 px-4 text-black placeholder-neutral-500 font-semibold text-xs sm:text-sm focus:bg-black focus:text-[#fffcf6] focus:placeholder-neutral-400 focus:outline-none transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                </div>

                {/* Right Column: Photo Upload and Submit Button */}
                <div className="md:col-span-1 flex flex-col justify-between items-stretch gap-6">
                  
                  {/* Photo upload Box */}
                  <div 
                    onClick={handlePhotoClick}
                    className="border-2 border-black bg-[#fffcf6] border-dashed hover:bg-neutral-50 hover:border-solid transition-all duration-200 flex flex-col items-center justify-center p-6 text-center cursor-pointer min-h-[180px] md:h-full relative group"
                  >
                    <input 
                      type="file" 
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {photoPreview ? (
                      <div className="absolute inset-0 p-2">
                        <img 
                          src={photoPreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover border border-black"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-left text-neutral-500 font-semibold text-xs sm:text-sm px-2">
                        <span className="font-extrabold text-neutral-800 text-lg leading-none">***</span>
                        <span className="leading-snug">Afegeix una foto de perfil</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="relative group inline-flex self-end w-full md:w-auto">
                    {/* Hollow offset shadow box (cream background, black border only) */}
                    <div className="absolute inset-0 border-2 border-black bg-[#fffcf6] translate-x-[4px] translate-y-[4px]"></div>
                    <button 
                      type="submit" 
                      className="relative w-full md:w-auto border-2 border-black bg-black text-[#fffcf6] hover:bg-[#fffcf6] hover:text-black font-extrabold text-xs uppercase py-3.5 px-8 transition-all duration-200 cursor-pointer text-center"
                    >
                      ENVIAR
                    </button>
                  </div>

                </div>

              </form>

            </div>

          </div>
        )}

        {/* VIEW 3: BUSCAR CREADORS LIST */}
        {view === 'search_list' && (
          <div className="w-full flex flex-col gap-4 animate-fade-in">
            
            {/* List Neobrutalist Container */}
            <div className="border-2 border-black bg-[#fffcf6] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
              
              {/* Header Row */}
              <div className="border-b-2 border-black py-4 px-6 flex justify-between items-center bg-[#fffcf6]">
                <h2 className="font-extrabold text-base sm:text-lg uppercase tracking-tight text-black">
                  BUSCAR CREADORS
                </h2>
                
                {/* Filter Button */}
                <button 
                  onClick={() => alert("Filtres en desenvolupament...")}
                  className="border-2 border-black bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] font-bold text-xs uppercase px-4 py-1.5 flex items-center gap-2 transition-all duration-200 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none cursor-pointer"
                >
                  <span>Filtrar</span>
                  <Filter className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Creators Profile List */}
              <div className="flex flex-col bg-[#fffcf6] min-h-[300px]">
                {creators.map((creator, index) => (
                  <div 
                    key={index}
                    className="p-5 flex items-center gap-4 text-left border-b-[1.5px] border-black last:border-b-0 bg-[#fffcf6] transition-all duration-200 hover:scale-105 hover:z-10 relative hover:border-[1.5px] hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {/* Rounded Profile Avatar */}
                    {creator.photo ? (
                      <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden flex-shrink-0 bg-neutral-100">
                        <img src={creator.photo} alt={creator.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center overflow-hidden flex-shrink-0 ${
                        creator.name === "Maker de fusta." 
                          ? "border-amber-600 bg-amber-100 text-amber-600" 
                          : `border-black ${creator.avatarColor || ''}`
                      }`}>
                        <User className="w-5 h-5 stroke-[2]" />
                      </div>
                    )}

                    {/* Text Profile: Inline name and description */}
                    <div className="flex-grow">
                      <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                        <span className="font-extrabold text-black mr-1.5">{creator.name}</span>
                        {creator.description}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

        {/* Dynamic Back Button / Enrere */}
        {view !== 'main' && (
          <div className="flex justify-start w-full mt-6">
            <button 
              onClick={handleEnrere}
              className="font-bold text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors duration-200 py-2 flex items-center gap-1.5 border-none bg-transparent cursor-pointer"
            >
              <span>← Enrere</span>
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
