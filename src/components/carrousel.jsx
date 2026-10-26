import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const contactUrl = 'https://linktr.ee/consultarsaudebemestar';
const professionals = [
  { name: 'Acácio Fonseca Borges', title: 'Massoterapeuta', image: '/assets/professional/profissional1.png', description: 'Atua na promoção da saúde e prevenção de dores. Trabalha com massagens relaxantes, desportivas e terapêuticas, além de técnicas como ventosas, dry needling, moxa, cone hindu, pedras quentes e bandagem funcional.' },
  { name: 'Regiane Magalhães', title: 'Psicóloga · CRP 05/31197', image: '/assets/professional/profissional2.png', description: 'Pós-graduada em Gestão de Pessoas e psicanalista em formação. Atua como psicóloga clínica de adultos, auxiliando em demandas emocionais e na promoção de saúde e bem-estar.' },
  { name: 'Bárbara Crivas', title: 'Psicóloga · CRP 05/55030', image: '/assets/professional/profissional3.png', description: 'Psicóloga e graduada em Direito. Atua com o público feminino em temas como autonomia, autoestima e relações saudáveis, além de grupos psicoterapêuticos infantojuvenis e orientação familiar.' },
  { name: 'Raabe Santos', title: 'Psicóloga · CRP 05/57226', image: '/assets/professional/profissional4.png', description: 'Pós-graduada em Neuropsicologia, Psicopedagogia e Psicologia Hospitalar e da Saúde. Atua com crianças e adolescentes, avaliação do desenvolvimento infantil e orientação de pais.' },
  { name: 'Fabiana da Fonseca', title: 'Psicóloga · CRP 05/71281', image: '/assets/professional/profissional7.png', description: 'Atua na abordagem TCC (Terapia Cognitivo-Comportamental), que observa a influência dos pensamentos sobre emoções e comportamentos.' },
];
const partners = [
  { src: '/assets/logos/unimed.png', alt: 'Unimed' }, { src: '/assets/logos/cherem.png', alt: 'Grupo Cherem' },
  { src: '/assets/logos/ABM.png', alt: 'ABM Plano de Vida' }, { src: '/assets/logos/planMinas.png', alt: 'Plan Minas' },
  { src: '/assets/logos/Ultraplan.jpg', alt: 'Ultraplan' }, { src: '/assets/logos/BomJesus.jpg', alt: 'Grupo Bom Jesus' },
];

const Galeria = () => (
    <div className="professional-carousel">
      <Slider dots={true} infinite={false} speed={500} slidesToShow={3} slidesToScroll={1} arrows={true} responsive={[{ breakpoint: 1000, settings: { slidesToShow: 2 } }, { breakpoint: 650, settings: { slidesToShow: 1, arrows: false } }]}>
        {professionals.map((professional) => (
          <article className="professional-card" key={professional.name}>
            <div className="professional-photo"><img src={professional.image} alt={professional.name} loading="lazy" /></div>
            <div className="professional-info"><span className="professional-role">{professional.title}</span><h3>{professional.name}</h3><p>{professional.description}</p><a href={contactUrl} target="_blank" rel="noopener noreferrer">Conversar sobre atendimento <span aria-hidden="true">↗</span></a></div>
          </article>
        ))}
      </Slider>
    </div>
);

export default Galeria;

export const PartnersSection = () => (
  <section className="convenios-section" id="convenios" aria-labelledby="convenios-title">
    <div className="convenios-inner">
      <div className="convenios-copy">
        <span className="eyebrow">Mais possibilidades para cuidar de você</span>
        <h2 id="convenios-title">Atendemos por convênios<br />e parcerias.</h2>
        <p>Confira se o seu plano ou instituição faz parte da nossa rede e consulte as condições de atendimento com a equipe.</p>
        <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Consultar meu convênio <span aria-hidden="true">↗</span></a>
      </div>
      <div className="convenios-grid" aria-label="Convênios e parceiros da ConsultAR">
        {partners.map((partner) => <div className="convenio-card" key={partner.alt}><img src={partner.src} alt={partner.alt} loading="lazy" /></div>)}
      </div>
    </div>
  </section>
);
