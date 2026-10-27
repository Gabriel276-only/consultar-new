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
    <div className="professional-carousel mx-[-10px] max-[700px]:mx-0">
      <Slider dots={true} infinite={false} speed={500} slidesToShow={3} slidesToScroll={1} arrows={true} responsive={[{ breakpoint: 1000, settings: { slidesToShow: 2 } }, { breakpoint: 650, settings: { slidesToShow: 1, arrows: false } }]}>
        {professionals.map((professional) => (
          <article className="group mx-[10px] mb-5 min-h-[530px] border border-line bg-white shadow-[0_8px_24px_rgba(116,62,70,0.045)] max-[700px]:mx-1 max-[700px]:min-h-0" key={professional.name}>
            <div className="h-[235px] overflow-hidden bg-[#eeece5] max-[700px]:h-[260px]"><img className="h-full w-full object-cover object-[center_35%] transition-transform duration-[400ms] group-hover:scale-[1.035]" src={professional.image} alt={professional.name} loading="lazy" /></div>
            <div className="px-[21px] pb-6 pt-[22px] max-[700px]:p-[19px]">
              <span className="text-[9px] font-bold uppercase tracking-[.12em] text-sage">{professional.title}</span>
              <h3 className="my-2 mb-[10px] font-serif text-[23px] font-medium">{professional.name}</h3>
              <p className="mb-[13px] min-h-[124px] text-[11px] leading-[1.75] text-muted max-[700px]:min-h-0">{professional.description}</p>
              <a className="inline-flex gap-[10px] text-[10px] font-bold text-wine" href={contactUrl} target="_blank" rel="noopener noreferrer">Conversar sobre atendimento <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </Slider>
    </div>
);

export default Galeria;

export const PartnersSection = () => (
  <section className="convenios-section relative overflow-hidden bg-[#f1e7e6] px-7 py-[64px] max-[700px]:px-[21px] max-[700px]:py-[48px]" id="convenios" aria-labelledby="convenios-title">
    <div className="relative z-[1] mx-auto grid max-w-[1160px] grid-cols-[.82fr_1.18fr] items-center gap-[40px] max-[700px]:grid-cols-1 max-[700px]:gap-[18px]">
      <div>
        <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-sage">Mais possibilidades para cuidar de você</span>
        <h2 className="my-2 mb-[10px] font-serif text-[clamp(34px,3.5vw,45px)] font-medium leading-[1.13] tracking-[-.025em] text-ink max-[700px]:text-4xl" id="convenios-title">Atendemos por convênios<br />e parcerias.</h2>
        <p className="mb-4 max-w-[390px] text-[13px] leading-[1.8] text-[#66675e] max-[700px]:text-xs">Confira se o seu plano ou instituição faz parte da nossa rede e consulte as condições de atendimento com a equipe.</p>
        <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded border border-transparent bg-wine px-4 py-3 text-xs font-bold text-white transition-all hover:-translate-y-px hover:bg-wine-dark">Consultar meu convênio <span aria-hidden="true">↗</span></a>
      </div>
      <div className="grid grid-cols-3 gap-3 max-[700px]:grid-cols-2 max-[700px]:gap-2" aria-label="Convênios e parceiros da ConsultAR">
        {partners.map((partner) => <div className="grid h-[72px] place-items-center px-2 py-1 transition-transform hover:-translate-y-0.5 max-[700px]:h-[60px] max-[700px]:px-1 max-[700px]:py-1" key={partner.alt}><img className="h-auto max-h-[80px] w-auto max-w-full mix-blend-multiply object-contain max-[700px]:max-h-[42px]" src={partner.src} alt={partner.alt} loading="lazy" /></div>)}
      </div>
    </div>
  </section>
);
