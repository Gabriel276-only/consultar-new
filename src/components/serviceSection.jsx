import React from 'react';
import Galeria from './carrousel.jsx';

const ServicesSection = () => (
  <div className="mx-auto max-w-[1160px]">
    <div className="mb-8 flex items-end justify-between gap-[60px] max-[700px]:mb-[20px] max-[700px]:block">
      <div>
        <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-sage">Pessoas que cuidam de pessoas</span>
        <h2 className="mt-[13px] font-serif text-[clamp(36px,4vw,50px)] font-medium leading-[1.13] tracking-[-.025em]">Conheça nossa<br /><em className="font-medium text-wine">equipe de profissionais.</em></h2>
      </div>
      <p className="mb-1 max-w-[390px] text-[14px] leading-[1.8] text-muted max-[700px]:mt-[17px] max-[700px]:text-[13px]">Profissionais com diferentes formações e experiências, reunidos pelo compromisso com um cuidado ético e humanizado.</p>
    </div>
    <Galeria />
  </div>
);

export default ServicesSection;
