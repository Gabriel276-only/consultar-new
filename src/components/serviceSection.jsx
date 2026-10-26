import React from 'react';
import Galeria from './carrousel.jsx';

const ServicesSection = () => (
  <div className="team-inner">
    <div className="section-heading team-heading">
      <div><span className="eyebrow">Pessoas que cuidam de pessoas</span><h2>Conheça nossa<br /><em>equipe de profissionais.</em></h2></div>
      <p>Profissionais com diferentes formações e experiências, reunidos pelo compromisso com um cuidado ético e humanizado.</p>
    </div>
    <Galeria />
  </div>
);

export default ServicesSection;
